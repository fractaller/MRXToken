const { Contract, Wallet} = require('ethers')
const { Interface, formatUnits, keccak256, toUtf8Bytes, arrayify } = require("ethers/lib/utils")
const { ethers } = require("hardhat")
const { saveConfig, loadConfig } = require("./config")
const {MRX} = require("../typechain");
const {date2Timestamp, timestamp2Date} = require("../test/shared/utilities");

const overrides = {
    gasLimit: 12999999
}

const configPath = "config/test_community_config.json"

const deploy = async () => {
    const [wallet] = await ethers.getSigners()
    let balance = await wallet.getBalance()
    console.log(wallet.address, formatUnits(balance, 18))

    let chainId = await wallet.getChainId()
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
        const TokenLockForCommunity = await ethers.getContractFactory('TokenLockForCommunityTest')
        const tokenLockForCommunity = await TokenLockForCommunity.deploy(configContent[chainId].mrx, overrides)
        await tokenLockForCommunity.deployed()
        configContent[chainId].tokenLockForCommunity = tokenLockForCommunity.address

        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('tokenLockForCommunity address:', tokenLockForCommunity.address)
    }

    if (configContent[chainId].step < 3) {
        let mrx = await ethers.getContractAt('MRX', configContent[chainId].mrx, wallet)
        let tx = await mrx.approve(configContent[chainId].tokenLockForCommunity, ethers.utils.parseUnits('3100000000', 18), overrides)
        await tx.wait()
        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('set approve')
    }

    if (configContent[chainId].step < 4) {
        const tokenLockForCommunity = await ethers.getContractAt('TokenLockForCommunityTest', configContent[chainId].tokenLockForCommunity, wallet)
        let tx = await tokenLockForCommunity.activate(wallet.address, date2Timestamp(new Date(configContent[chainId].openDate)))
        await tx.wait()
        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
        console.log('active at:', configContent[chainId].openDate)
    }

    if (configContent[chainId].step < 5) {
        const tokenLockForCommunity = await ethers.getContractAt('TokenLockForCommunityTest', configContent[chainId].tokenLockForCommunity, wallet)
        let addressList = []
        let amountList = []
        for (let i=1; i<=100; i++) {
            addressList.push(ethers.Wallet.createRandom().address)
            amountList.push(ethers.utils.parseUnits((i * 100).toString(), 18))
        }

        let tx = await tokenLockForCommunity.lock(wallet.address, ethers.utils.parseUnits('10000', 18))
        await tx.wait()
        console.log('lock 10000 mrx for user:', wallet.address)

        tx = await tokenLockForCommunity.lockBatch(addressList, amountList)
        await tx.wait()
        console.log('lock mrx for 100 users')

        configContent[chainId].step = configContent[chainId].step + 1
        saveConfig(configContent, configPath)
    }

    const tokenLockForCommunity = await ethers.getContractAt('TokenLockForCommunityTest', configContent[chainId].tokenLockForCommunity, wallet)

    while(true) {
        const timestamp = (await wallet.provider.getBlock('latest')).timestamp
        const startDate = await tokenLockForCommunity.startDate()
        const releaseDate = await tokenLockForCommunity.releaseDate()
        console.log('block timestamp', timestamp2Date(timestamp).toLocaleString())
        console.log('start date', timestamp2Date(startDate.toNumber()).toLocaleString())
        console.log('release date', timestamp2Date(releaseDate.toNumber()).toLocaleString())

        let lockedAmount = await tokenLockForCommunity.lockedAmounts(wallet.address)
        console.log(ethers.utils.formatUnits(lockedAmount, 18))

        let releasedAmount = await tokenLockForCommunity.releasedAmount(wallet.address)
        console.log(ethers.utils.formatUnits(releasedAmount, 18))

        let availableAmount = await tokenLockForCommunity.available(wallet.address)
        console.log(ethers.utils.formatUnits(availableAmount, 18))
        console.log('===================================================')

        if (ethers.utils.formatUnits(availableAmount, 18) === '9440.0') {
            let tx = await tokenLockForCommunity.claim()
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

