import {BigNumber, Contract, utils} from 'ethers'
import {
    FunctionFragment,
    getAddress,
    keccak256,
    defaultAbiCoder,
    toUtf8Bytes,
    solidityPack
} from 'ethers/lib/utils'
import {Web3Provider} from '@ethersproject/providers'
import {MockProvider} from "ethereum-waffle";

const PERMIT_TYPEHASH = keccak256(
  toUtf8Bytes('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
)

export function expandTo18Decimals(n: number): BigNumber {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(18))
}

export function expandTo6Decimals(n: number): BigNumber {
    return BigNumber.from(n).mul(BigNumber.from(10).pow(6))
}

function getDomainSeparator(name: string, tokenAddress: string) {
  return keccak256(
    defaultAbiCoder.encode(
      ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
      [
        keccak256(toUtf8Bytes('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)')),
        keccak256(toUtf8Bytes(name)),
        keccak256(toUtf8Bytes('1')),
        1,
        tokenAddress
      ]
    )
  )
}

export function getFunctionSelector(fragment: FunctionFragment): string {
    let inputs = fragment.inputs.map(i => {
        return i.type
    })

    let fragmentStr = fragment.name + '('
    inputs.forEach((e, i) => {
        if (i == 0) {
            fragmentStr += e;
        }
        else {
            fragmentStr += ',' + e;
        }
    })

    fragmentStr += ')'
    //console.log(fragmentStr)
    return utils.keccak256(utils.toUtf8Bytes(fragmentStr)).substring(0, 10)
}

export function getCreate2Address(
  factoryAddress: string,
  [tokenA, tokenB]: [string, string],
  bytecode: string
): string {
  const [token0, token1] = tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA]
  const create2Inputs = [
    '0xff',
    factoryAddress,
    keccak256(solidityPack(['address', 'address'], [token0, token1])),
    keccak256(bytecode)
  ]
  const sanitizedInputs = `0x${create2Inputs.map(i => i.slice(2)).join('')}`
  return getAddress(`0x${keccak256(sanitizedInputs).slice(-40)}`)
}

export async function getApprovalDigest(
  token: Contract,
  approve: {
    owner: string
    spender: string
    value: BigNumber
  },
  nonce: BigNumber,
  deadline: BigNumber
): Promise<string> {
  const name = await token.name()
  const DOMAIN_SEPARATOR = getDomainSeparator(name, token.address)
  return keccak256(
    solidityPack(
      ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
      [
        '0x19',
        '0x01',
        DOMAIN_SEPARATOR,
        keccak256(
          defaultAbiCoder.encode(
            ['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
            [PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
          )
        )
      ]
    )
  )
}

export async function mineBlock(provider: Web3Provider | MockProvider, timestamp: number): Promise<void> {
    await new Promise(async (resolve, reject) => {
        ;(provider.provider.sendAsync as any)(
            { jsonrpc: '2.0', method: 'evm_mine', params: [timestamp] },
            (error: any, result: any): void => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            }
        )
    })
}

export function encodePrice(reserve0: BigNumber, reserve1: BigNumber) {
  return [reserve1.mul(BigNumber.from(2).pow(112)).div(reserve0), reserve0.mul(BigNumber.from(2).pow(112)).div(reserve1)]
}

export function timestamp2Date(timestamp: number) {
    return new Date(timestamp * 1000)
}

export function timestamp2String(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleString()
}

export function date2Timestamp(date: Date) {
    return date.getTime() / 1000
}

export async function printBlockTimestamp(provider) {
    let currentBlock = await provider.getBlock("latest")
    console.log('Block timestamp', timestamp2String(currentBlock.timestamp), currentBlock.timestamp)
}
