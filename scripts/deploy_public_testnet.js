const { Contract, Wallet} = require('ethers')
const { Interface, formatUnits, keccak256, toUtf8Bytes, arrayify } = require("ethers/lib/utils")
const { ethers } = require("hardhat")
const { saveConfig, loadConfig } = require("./config")
const {MRX} = require("../typechain");
const {date2Timestamp, timestamp2Date} = require("../test/shared/utilities");

const overrides = {
    gasLimit: 12999999
}

const configPath = "config/test_public_config.json"

const deploy = async () => {
    const [wallet] = await ethers.getSigners()
    let balance = await wallet.getBalance()
    console.log(wallet.address, formatUnits(balance, 18))

    let chainId = await wallet.getChainId()
    let provider = wallet.provider
    let configContent = loadConfig(configPath)
    configContent[chainId] = configContent[chainId] ? configContent[chainId] : {}
    configContent[chainId].step = configContent[chainId].step ?? 0

    if (configContent[chainId].step < 1) {
        const MRX = await ethers.getContractFactory("MRX");
        const mrx = await MRX.deploy(wallet.address, overrides);
        await mrx.deployed()
        configContent[chainId].mrx = mrx.address
        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('mrx address:', mrx.address)
    }

    if (configContent[chainId].step < 2) {
        const TokenLockForPublic = await ethers.getContractFactory('TokenLockForPublicTest')
        const tokenLockForPublic = await TokenLockForPublic.deploy(configContent[chainId].mrx, overrides)
        await tokenLockForPublic.deployed()
        configContent[chainId].tokenLockForPublic = tokenLockForPublic.address

        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('tokenLockForPublic address:', tokenLockForPublic.address)
    }

    if (configContent[chainId].step < 3) {
        let mrx = await ethers.getContractAt('MRX', configContent[chainId].mrx, wallet)
        let tx = await mrx.approve(configContent[chainId].tokenLockForPublic, ethers.utils.parseUnits('3100000000', 18), overrides)
        await tx.wait()
        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('set approve')
    }

    if (configContent[chainId].step < 4) {
        const tokenLockForPublic = await ethers.getContractAt('TokenLockForPublicTest', configContent[chainId].tokenLockForPublic, wallet)
        let tx = await tokenLockForPublic.activate(wallet.address, date2Timestamp(new Date(configContent[chainId].openDate)))
        await tx.wait()
        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('active at:', configContent[chainId].openDate)

        let other = await ethers.Wallet.createRandom()
        other.connect(provider)
        console.log(other.address)
    }

    if (configContent[chainId].step < 5) {
        const tokenLockForPublic = await ethers.getContractAt('TokenLockForPublicTest', configContent[chainId].tokenLockForPublic, wallet)
        let addressList = []
        let amountList = []
        for (let i=1; i<=100; i++) {
            addressList.push(ethers.Wallet.createRandom().address)
            amountList.push(ethers.utils.parseUnits((i * 100).toString(), 18))
        }

        let tx = await tokenLockForPublic.lock(wallet.address, ethers.utils.parseUnits('10000', 18))
        await tx.wait()
        console.log('lock 10000 mrx for user:', wallet.address)

        tx = await tokenLockForPublic.lockBatch(addressList, amountList)
        await tx.wait()
        console.log('lock mrx for 100 users')

        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
    }

    const tokenLockForPublic = await ethers.getContractAt('TokenLockForPublicTest', configContent[chainId].tokenLockForPublic, wallet)

    while(true) {
        const timestamp = await tokenLockForPublic.timestamp()
        const startDate = await tokenLockForPublic.startDate()
        const releaseDate = await tokenLockForPublic.releaseDate()
        console.log('block timestamp', timestamp2Date(timestamp.toNumber()).toLocaleString())
        console.log('start date', timestamp2Date(startDate.toNumber()).toLocaleString())
        console.log('release date', timestamp2Date(releaseDate.toNumber()).toLocaleString())

        let lockedAmount = await tokenLockForPublic.lockedAmounts(wallet.address)
        console.log(ethers.utils.formatUnits(lockedAmount, 18))

        let releasedAmount = await tokenLockForPublic.releasedAmount(wallet.address)
        console.log(ethers.utils.formatUnits(releasedAmount, 18))

        let availableAmount = await tokenLockForPublic.available(wallet.address)
        console.log(ethers.utils.formatUnits(availableAmount, 18))
        console.log('===================================================')

        if (ethers.utils.formatUnits(availableAmount, 18) === '9440.0') {
            let tx = await tokenLockForPublic.claim()
            await tx.wait()
        }

        if (lockedAmount.toString() === releasedAmount.toString()) {
            break
        }
    }
}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

