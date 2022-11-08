/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenLockForPublic } from "../TokenLockForPublic";

export class TokenLockForPublic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_token: string, overrides?: Overrides): Promise<TokenLockForPublic> {
    return super.deploy(_token, overrides || {}) as Promise<TokenLockForPublic>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): TokenLockForPublic {
    return super.attach(address) as TokenLockForPublic;
  }
  connect(signer: Signer): TokenLockForPublic__factory {
    return super.connect(signer) as TokenLockForPublic__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenLockForPublic {
    return new Contract(address, _abi, signerOrProvider) as TokenLockForPublic;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_payer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_openDate",
        type: "uint256",
      },
    ],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allUsers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "claimFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firstTerm",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "lockBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockedAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "releasePercents",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "releasedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x601460a0526213c68060c05262278d0060e0526103406040526050610100908152608c6101205260c86101405261012c61016052610190610180526101f46101a05261021e6101c0526102486101e0526102726102005261029c610220526102c6610240526102f06102605261031a610280526103446102a05261036e6102c0526103986102e0526103c4610300526103e861032052620000a590600490601262000147565b50348015620000b357600080fd5b50604051620015dc380380620015dc833981016040819052620000d691620001b4565b620000e133620000f7565b60601b6001600160601b031916608052620001e6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280548282559060005260206000209081019282156200018b579160200282015b828111156200018b578251829061ffff1690559160200191906001019062000168565b50620001999291506200019d565b5090565b5b808211156200019957600081556001016200019e565b600060208284031215620001c757600080fd5b81516001600160a01b0381168114620001df57600080fd5b9392505050565b60805160601c60a05160c05160e05161137362000269600039600081816101bc015281816103850152610bb70152600081816101110152610b870152600081816101f6015261031b0152600081816102c30152818161067401528181610732015281816108d50152818161099301528181610cc40152610dbd01526113736000f3fe608060405234801561001057600080fd5b50600436106101075760003560e01c806309e4fd451461010c5780630b97bc861461014657806310098ad51461014f578063123119cd1461016257806318695e48146101825780631cf1bb72146101975780631f8db268146101b7578063282d3fdf146101de5780632a804efe146101f15780634e71d92d14610218578063715018a6146102205780638aa71faa146102285780638da5cb5b1461023b578063a2bdedf414610243578063a8c7a08a14610256578063b80777ea14610276578063b9e3e2db1461027c578063ca11be6914610285578063ddeae03314610298578063f2fde38b146102ab578063fc0c546a146102be575b600080fd5b6101337f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61013360025481565b61013361015d366004610fe9565b6102e5565b600154610175906001600160a01b031681565b60405161013d919061114f565b610195610190366004611035565b610452565b005b6101336101a5366004610fe9565b60076020526000908152604090205481565b6101337f000000000000000000000000000000000000000000000000000000000000000081565b6101956101ec36600461100b565b6107c7565b6101337f000000000000000000000000000000000000000000000000000000000000000081565b610195610a27565b610195610a78565b61013361023636600461111d565b610ab3565b610175610ad4565b61017561025136600461111d565b610ae3565b610133610264366004610fe9565b60066020526000908152604090205481565b42610133565b61013360035481565b61019561029336600461100b565b610b0d565b6101956102a6366004610fe9565b610be3565b6101956102b9366004610fe9565b610e6b565b6101757f000000000000000000000000000000000000000000000000000000000000000081565b60006002544210156102f957506000919050565b6001600160a01b038216600090815260066020526040812054906103e86103407f0000000000000000000000000000000000000000000000000000000000000000846112aa565b61034a9190611288565b9050600354421015610381576001600160a01b03841660009081526007602052604090205461037990826112c9565b949350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000600354426103b291906112c9565b6103bc9190611288565b6103c7906001611270565b6004549091508110156103da57806103de565b6004545b9050600060046103ef6001846112c9565b815481106103ff576103ff611311565b60009182526020808320909101546001600160a01b038916835260079091526040909120549091506103e861043483876112aa565b61043e9190611288565b61044891906112c9565b9695505050505050565b3361045b610ad4565b6001600160a01b03161461048a5760405162461bcd60e51b8152600401610481906111e8565b60405180910390fd5b600254158061049b57506002544211155b6104b75760405162461bcd60e51b8152600401610481906111be565b600082511180156104c9575080518251145b61050d5760405162461bcd60e51b815260206004820152601560248201527409ad2e6dac2e8c6d040c2e4e4c2f240d8cadccee8d605b1b6044820152606401610481565b6000805b83518110156106575782818151811061052c5761052c611311565b60200260200101518261053f9190611270565b91506006600085838151811061055757610557611311565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054600014156105d857600584828151811061059c5761059c611311565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790555b8281815181106105ea576105ea611311565b60200260200101516006600086848151811061060857610608611311565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020600082825461063f9190611270565b9091555081905061064f816112e0565b915050610511565b506001546040516370a0823160e01b815282916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926370a08231926106aa92169060040161114f565b60206040518083038186803b1580156106c257600080fd5b505afa1580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa9190611136565b10156107185760405162461bcd60e51b815260040161048190611187565b6001546040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926323b872dd9261076f92919091169030908690600401611163565b602060405180830381600087803b15801561078957600080fd5b505af115801561079d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c191906110fb565b50505050565b336107d0610ad4565b6001600160a01b0316146107f65760405162461bcd60e51b8152600401610481906111e8565b600254158061080757506002544211155b6108235760405162461bcd60e51b8152600401610481906111be565b6001600160a01b03821660009081526006602052604090205461088c57600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b038216600090815260066020526040812080548392906108b4908490611270565b90915550506001546040516370a0823160e01b815282916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926370a082319261090b92169060040161114f565b60206040518083038186803b15801561092357600080fd5b505afa158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b9190611136565b10156109795760405162461bcd60e51b815260040161048190611187565b6001546040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926323b872dd926109d092919091169030908690600401611163565b602060405180830381600087803b1580156109ea57600080fd5b505af11580156109fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2291906110fb565b505050565b60405163ddeae03360e01b8152309063ddeae03390610a4a90339060040161114f565b600060405180830381600087803b158015610a6457600080fd5b505af11580156107c1573d6000803e3d6000fd5b33610a81610ad4565b6001600160a01b031614610aa75760405162461bcd60e51b8152600401610481906111e8565b610ab16000610f0b565b565b60048181548110610ac357600080fd5b600091825260209091200154905081565b6000546001600160a01b031690565b60058181548110610af357600080fd5b6000918252602090912001546001600160a01b0316905081565b33610b16610ad4565b6001600160a01b031614610b3c5760405162461bcd60e51b8152600401610481906111e8565b6002541580610b4b5750804211155b610b675760405162461bcd60e51b8152600401610481906111be565b600180546001600160a01b0319166001600160a01b038416179055610bac7f000000000000000000000000000000000000000000000000000000000000000082611270565b6002819055610bdc907f000000000000000000000000000000000000000000000000000000000000000090611270565b6003555050565b6040516310098ad560e01b815260009030906310098ad590610c0990859060040161114f565b60206040518083038186803b158015610c2157600080fd5b505afa158015610c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c599190611136565b905060008111610cab5760405162461bcd60e51b815260206004820152601d60248201527f4e6f20617661696c61626c6520746f6b656e20746f2072656c656173650000006044820152606401610481565b6040516370a0823160e01b815281906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610cf990309060040161114f565b60206040518083038186803b158015610d1157600080fd5b505afa158015610d25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d499190611136565b1015610d975760405162461bcd60e51b815260206004820152601e60248201527f496e73756666696369656e742062616c616e636520666f7220636c61696d00006044820152606401610481565b60405163a9059cbb60e01b81526001600160a01b038381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b158015610e0157600080fd5b505af1158015610e15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3991906110fb565b506001600160a01b03821660009081526007602052604081208054839290610e62908490611270565b90915550505050565b33610e74610ad4565b6001600160a01b031614610e9a5760405162461bcd60e51b8152600401610481906111e8565b6001600160a01b038116610eff5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610481565b610f0881610f0b565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610f7257600080fd5b919050565b600082601f830112610f8857600080fd5b81356020610f9d610f988361124d565b61121d565b80838252828201915082860187848660051b8901011115610fbd57600080fd5b60005b85811015610fdc57813584529284019290840190600101610fc0565b5090979650505050505050565b600060208284031215610ffb57600080fd5b61100482610f5b565b9392505050565b6000806040838503121561101e57600080fd5b61102783610f5b565b946020939093013593505050565b6000806040838503121561104857600080fd5b82356001600160401b038082111561105f57600080fd5b818501915085601f83011261107357600080fd5b81356020611083610f988361124d565b8083825282820191508286018a848660051b89010111156110a357600080fd5b600096505b848710156110cd576110b981610f5b565b8352600196909601959183019183016110a8565b50965050860135925050808211156110e457600080fd5b506110f185828601610f77565b9150509250929050565b60006020828403121561110d57600080fd5b8151801515811461100457600080fd5b60006020828403121561112f57600080fd5b5035919050565b60006020828403121561114857600080fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252601d908201527f496e73756666696369656e742062616c616e636520666f72206c6f636b000000604082015260600190565b60208082526010908201526f131bd8dac81d1a5b5948195e18d9595960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f191681016001600160401b038111828210171561124557611245611327565b604052919050565b60006001600160401b0382111561126657611266611327565b5060051b60200190565b60008219821115611283576112836112fb565b500190565b6000826112a557634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156112c4576112c46112fb565b500290565b6000828210156112db576112db6112fb565b500390565b60006000198214156112f4576112f46112fb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220cd4a86729e6f4386ae521a63751552222070e58a28c1f74863f8fd0c1a8d966564736f6c63430008050033";