// @ts-ignore
import { ethers } from 'hardhat'
import {BigNumber, Contract, Wallet} from 'ethers'
import {createFixtureLoader, MockProvider} from 'ethereum-waffle'
import {formatUnits} from 'ethers/lib/utils'

import {
    date2Timestamp,
    expandTo18Decimals,
    expandTo6Decimals,
    mineBlock, printBlockTimestamp,
    timestamp2Date,
    timestamp2String
} from './shared/utilities'
import {factoryFixture} from './shared/fixtures'
import {MRX} from "../typechain";
import {TokenLockForPublicTest} from "../typechain";

describe('TokenLockForPublic', () => {
    let provider
    let wallet: Wallet, other: Wallet
    let loadFixture: ReturnType<typeof createFixtureLoader>

    let mirrorX: MRX
    let decimals
    let tokenLockForPublic: TokenLockForPublicTest
    let openDate: Date

    before('create fixture loader', async () => {
        [wallet, other] = await (ethers as any).getSigners()
        loadFixture = createFixtureLoader([wallet, other])
    })

    beforeEach(async () => {
        const fixture = await loadFixture(factoryFixture)
        mirrorX = fixture.mirrorX
        tokenLockForPublic = fixture.tokenLockForPublic
        provider = fixture.provider
        openDate = fixture.openDate
        decimals = await mirrorX.decimals()
    })

    it('lock', async () => {
        let startTimestamp = await tokenLockForPublic.startDate()
        console.log('start date', timestamp2String(startTimestamp.toNumber()), startTimestamp.toNumber())

        let releaseTimestamp = await tokenLockForPublic.releaseDate()
        console.log('release date', timestamp2String(releaseTimestamp.toNumber()), releaseTimestamp.toNumber())

        let amount = ethers.utils.parseUnits('10000', decimals)
        await mirrorX.approve(tokenLockForPublic.address, amount)

        await tokenLockForPublic.lock(other.address, amount)

        let lockAmount = await tokenLockForPublic.lockedAmounts(other.address)
        let releaseAvailable = await tokenLockForPublic.available(other.address)
        console.log('init date', ethers.utils.formatUnits(lockAmount, decimals), ethers.utils.formatUnits(releaseAvailable, decimals))

        await mineBlock(provider, date2Timestamp(openDate))
        await printBlockTimestamp(provider)
        lockAmount = await tokenLockForPublic.lockedAmounts(other.address)
        releaseAvailable = await tokenLockForPublic.available(other.address)
        console.log('open date', ethers.utils.formatUnits(lockAmount, decimals), ethers.utils.formatUnits(releaseAvailable, decimals))

        await mineBlock(provider, date2Timestamp(openDate) + 15 * 24 * 3600 + 1)
        await printBlockTimestamp(provider)
        lockAmount = await tokenLockForPublic.lockedAmounts(other.address)
        releaseAvailable = await tokenLockForPublic.available(other.address)
        console.log('release date 1', ethers.utils.formatUnits(lockAmount, decimals), ethers.utils.formatUnits(releaseAvailable, decimals))

        await mineBlock(provider, date2Timestamp(openDate) + 45 * 24 * 3600 + 1)
        await printBlockTimestamp(provider)
        lockAmount = await tokenLockForPublic.lockedAmounts(other.address)
        releaseAvailable = await tokenLockForPublic.available(other.address)
        let releasedAmount = await tokenLockForPublic.releasedAmount(other.address)
        console.log('release date 2', ethers.utils.formatUnits(lockAmount, decimals), ethers.utils.formatUnits(releaseAvailable, decimals),
            lockAmount.toString(), releaseAvailable.toString(), lockAmount.mul(80).div(1000).sub(releasedAmount).toString())
        let timestamp = await tokenLockForPublic.timestamp()
        console.log('block timestamp', timestamp)

        //await tokenLockForPublic.claim()
        timestamp = await tokenLockForPublic.timestamp()
        console.log('block timestamp', timestamp)

        let balance = await mirrorX.balanceOf(other.address)
        console.log('balance', balance.toString())
    })
})
