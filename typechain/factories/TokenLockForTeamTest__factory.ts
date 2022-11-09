/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenLockForTeamTest } from "../TokenLockForTeamTest";

export class TokenLockForTeamTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_token: string, overrides?: Overrides): Promise<TokenLockForTeamTest> {
    return super.deploy(
      _token,
      overrides || {}
    ) as Promise<TokenLockForTeamTest>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): TokenLockForTeamTest {
    return super.attach(address) as TokenLockForTeamTest;
  }
  connect(signer: Signer): TokenLockForTeamTest__factory {
    return super.connect(signer) as TokenLockForTeamTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenLockForTeamTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenLockForTeamTest;
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
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "destroy",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "reassign",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x601e60a052605a60c052610260604052600260e0908152600561010052600a61012052601061014052601761016052601f6101805260286101a05260326101c052603d6101e0526049610200526056610220526064610240526200006890600490600c6200010a565b503480156200007657600080fd5b506040516200166638038062001666833981016040819052620000999162000176565b620000a433620000ba565b60601b6001600160601b031916608052620001a8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280548282559060005260206000209081019282156200014d579160200282015b828111156200014d578251829060ff169055916020019190600101906200012b565b506200015b9291506200015f565b5090565b5b808211156200015b576000815560010162000160565b6000602082840312156200018957600080fd5b81516001600160a01b0381168114620001a157600080fd5b9392505050565b60805160601c60a05160c05161144562000221600039600081816101c30152818161047b0152610c3a01526000818161011a0152610c0a01526000818161029d0152818161033b015281816106c501528181610783015281816108bd0152818161097b01528181610d470152610e3101526114456000f3fe608060405234801561001057600080fd5b50600436106100fb5760003560e01c8062f55d9d1461010057806309e4fd45146101155780630b97bc861461014f57806310098ad514610158578063123119cd1461016b57806318695e481461018b5780631cf1bb721461019e5780631f8db268146101be578063282d3fdf146101e55780634e71d92d146101f85780635fff8cd314610200578063715018a6146102135780638aa71faa1461021b5780638da5cb5b1461022e578063a8c7a08a14610236578063b9e3e2db14610256578063ca11be691461025f578063ddeae03314610272578063f2fde38b14610285578063fc0c546a14610298575b600080fd5b61011361010e36600461104e565b6102bf565b005b61013c7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61013c60025481565b61013c61016636600461104e565b610446565b60015461017e906001600160a01b031681565b60405161014691906111f3565b6101136101993660046110d7565b610543565b61013c6101ac36600461104e565b60066020526000908152604090205481565b61013c7f000000000000000000000000000000000000000000000000000000000000000081565b6101136101f33660046110ab565b610818565b610113610a0f565b61011361020e366004611072565b610a60565b610113610b25565b61013c6102293660046111c1565b610b60565b61017e610b81565b61013c61024436600461104e565b60056020526000908152604090205481565b61013c60035481565b61011361026d3660046110ab565b610b90565b61011361028036600461104e565b610c66565b61011361029336600461104e565b610eec565b61017e7f000000000000000000000000000000000000000000000000000000000000000081565b336102c8610b81565b6001600160a01b0316146102f75760405162461bcd60e51b81526004016102ee906112a5565b60405180910390fd5b600254158061030857506002544211155b6103245760405162461bcd60e51b81526004016102ee9061127b565b6040516370a0823160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90839083906370a082319061037a9030906004016111f3565b60206040518083038186803b15801561039257600080fd5b505afa1580156103a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ca91906111da565b6040518363ffffffff1660e01b81526004016103e7929190611207565b602060405180830381600087803b15801561040157600080fd5b505af1158015610415573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610439919061119f565b50806001600160a01b0316ff5b600060035442101561045a57506000919050565b6001600160a01b0382166000908152600560205260408120546003549091907f0000000000000000000000000000000000000000000000000000000000000000906104a59042611386565b6104af9190611345565b6104ba90600161132d565b6004549091508110156104cd57806104d1565b6004545b9050600060046104e2600184611386565b815481106104f2576104f26113ce565b60009182526020808320909101546001600160a01b0388168352600690915260409091205490915060646105268386611367565b6105309190611345565b61053a9190611386565b95945050505050565b3361054c610b81565b6001600160a01b0316146105725760405162461bcd60e51b81526004016102ee906112a5565b600254158061058357506002544211155b61059f5760405162461bcd60e51b81526004016102ee9061127b565b600082511180156105b1575080518251145b6105f55760405162461bcd60e51b815260206004820152601560248201527409ad2e6dac2e8c6d040c2e4e4c2f240d8cadccee8d605b1b60448201526064016102ee565b6000805b83518110156106a857828181518110610614576106146113ce565b602002602001015182610627919061132d565b915082818151811061063b5761063b6113ce565b602002602001015160056000868481518110610659576106596113ce565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000828254610690919061132d565b909155508190506106a08161139d565b9150506105f9565b506001546040516370a0823160e01b815282916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926370a08231926106fb9216906004016111f3565b60206040518083038186803b15801561071357600080fd5b505afa158015610727573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074b91906111da565b10156107695760405162461bcd60e51b81526004016102ee90611244565b6001546040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926323b872dd926107c092919091169030908690600401611220565b602060405180830381600087803b1580156107da57600080fd5b505af11580156107ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610812919061119f565b50505050565b33610821610b81565b6001600160a01b0316146108475760405162461bcd60e51b81526004016102ee906112a5565b600254158061085857506002544211155b6108745760405162461bcd60e51b81526004016102ee9061127b565b6001600160a01b0382166000908152600560205260408120805483929061089c90849061132d565b90915550506001546040516370a0823160e01b815282916001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926370a08231926108f39216906004016111f3565b60206040518083038186803b15801561090b57600080fd5b505afa15801561091f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094391906111da565b10156109615760405162461bcd60e51b81526004016102ee90611244565b6001546040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926323b872dd926109b892919091169030908690600401611220565b602060405180830381600087803b1580156109d257600080fd5b505af11580156109e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0a919061119f565b505050565b60405163ddeae03360e01b8152309063ddeae03390610a329033906004016111f3565b600060405180830381600087803b158015610a4c57600080fd5b505af1158015610812573d6000803e3d6000fd5b33610a69610b81565b6001600160a01b031614610a8f5760405162461bcd60e51b81526004016102ee906112a5565b6001600160a01b0380831660009081526005602052604080822054928416825281208054909190610ac190849061132d565b90915550506001600160a01b038083166000908152600560209081526040808320839055600690915280822054928416825281208054909190610b0590849061132d565b9091555050506001600160a01b0316600090815260066020526040812055565b33610b2e610b81565b6001600160a01b031614610b545760405162461bcd60e51b81526004016102ee906112a5565b610b5e6000610f8c565b565b60048181548110610b7057600080fd5b600091825260209091200154905081565b6000546001600160a01b031690565b33610b99610b81565b6001600160a01b031614610bbf5760405162461bcd60e51b81526004016102ee906112a5565b6002541580610bce5750804211155b610bea5760405162461bcd60e51b81526004016102ee9061127b565b600180546001600160a01b0319166001600160a01b038416179055610c2f7f00000000000000000000000000000000000000000000000000000000000000008261132d565b6002819055610c5f907f00000000000000000000000000000000000000000000000000000000000000009061132d565b6003555050565b6040516310098ad560e01b815260009030906310098ad590610c8c9085906004016111f3565b60206040518083038186803b158015610ca457600080fd5b505afa158015610cb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdc91906111da565b905060008111610d2e5760405162461bcd60e51b815260206004820152601d60248201527f4e6f20617661696c61626c6520746f6b656e20746f2072656c6561736500000060448201526064016102ee565b6040516370a0823160e01b815281906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610d7c9030906004016111f3565b60206040518083038186803b158015610d9457600080fd5b505afa158015610da8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcc91906111da565b1015610e1a5760405162461bcd60e51b815260206004820152601e60248201527f496e73756666696369656e742062616c616e636520666f7220636c61696d000060448201526064016102ee565b60405163a9059cbb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90610e689085908590600401611207565b602060405180830381600087803b158015610e8257600080fd5b505af1158015610e96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eba919061119f565b506001600160a01b03821660009081526006602052604081208054839290610ee390849061132d565b90915550505050565b33610ef5610b81565b6001600160a01b031614610f1b5760405162461bcd60e51b81526004016102ee906112a5565b6001600160a01b038116610f805760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ee565b610f8981610f8c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600082601f830112610fed57600080fd5b81356020611002610ffd8361130a565b6112da565b80838252828201915082860187848660051b890101111561102257600080fd5b60005b8581101561104157813584529284019290840190600101611025565b5090979650505050505050565b60006020828403121561106057600080fd5b813561106b816113fa565b9392505050565b6000806040838503121561108557600080fd5b8235611090816113fa565b915060208301356110a0816113fa565b809150509250929050565b600080604083850312156110be57600080fd5b82356110c9816113fa565b946020939093013593505050565b600080604083850312156110ea57600080fd5b82356001600160401b038082111561110157600080fd5b818501915085601f83011261111557600080fd5b81356020611125610ffd8361130a565b8083825282820191508286018a848660051b890101111561114557600080fd5b600096505b8487101561117157803561115d816113fa565b83526001969096019591830191830161114a565b509650508601359250508082111561118857600080fd5b5061119585828601610fdc565b9150509250929050565b6000602082840312156111b157600080fd5b8151801515811461106b57600080fd5b6000602082840312156111d357600080fd5b5035919050565b6000602082840312156111ec57600080fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252601d908201527f496e73756666696369656e742062616c616e636520666f72206c6f636b000000604082015260600190565b60208082526010908201526f131bd8dac81d1a5b5948195e18d9595960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b604051601f8201601f191681016001600160401b0381118282101715611302576113026113e4565b604052919050565b60006001600160401b03821115611323576113236113e4565b5060051b60200190565b60008219821115611340576113406113b8565b500190565b60008261136257634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615611381576113816113b8565b500290565b600082821015611398576113986113b8565b500390565b60006000198214156113b1576113b16113b8565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610f8957600080fdfea26469706673582212208c851969485dcc25225580834d5d3af8cf83f7334cdfab51d006e24895941fd964736f6c63430008050033";
