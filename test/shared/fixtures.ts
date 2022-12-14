import { utils } from 'ethers'

import { MRX } from '../../typechain'
import {TokenLockForPublicTest} from "../../typechain";
// @ts-ignore
import { ethers } from "hardhat";
import {date2Timestamp, mineBlock, printBlockTimestamp, timestamp2Date, timestamp2String} from "./utilities";
import {Web3Provider} from "@ethersproject/providers";
import {MockProvider} from "ethereum-waffle";

interface FactoryFixture {
  provider: Web3Provider | MockProvider
  mirrorX: MRX
  tokenLockForPublic: TokenLockForPublicTest
  openDate: Date
}

const overrides = {
  gasLimit: 19999999
}

export async function factoryFixture(wallets, provider): Promise<FactoryFixture> {
  let wallet = wallets[0]
  let balance = await wallet.getBalance()
  console.log('balance', utils.formatEther(balance))
  const MRX = await ethers.getContractFactory('MRX', wallet)
  const mirrorX = (await MRX.deploy(wallet.address, overrides)) as MRX

  await printBlockTimestamp(provider)

  const TokenLockForPublic = await ethers.getContractFactory('TokenLockForPublic', wallet)
  const tokenLockForPublic = (await TokenLockForPublic.deploy(mirrorX.address, overrides)) as TokenLockForPublicTest

  let openDate = new Date(Date.parse('2023/10/10 12:00:00'))
  let openDateSeconds = date2Timestamp(openDate)
  //console.log(openDate.toLocaleString(), openDate.getTime())

  await tokenLockForPublic.activate(wallet.address, openDateSeconds)
  await mineBlock(provider, openDateSeconds - 30 * 24 * 3600)
  await printBlockTimestamp(provider)

  return { provider, mirrorX, tokenLockForPublic, openDate }
}
