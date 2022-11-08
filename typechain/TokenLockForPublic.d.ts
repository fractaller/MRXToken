/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TokenLockForPublicInterface extends ethers.utils.Interface {
  functions: {
    "activate(address,uint256)": FunctionFragment;
    "allUsers(uint256)": FunctionFragment;
    "available(address)": FunctionFragment;
    "claim()": FunctionFragment;
    "claimFor(address)": FunctionFragment;
    "firstTerm()": FunctionFragment;
    "lock(address,uint256)": FunctionFragment;
    "lockBatch(address[],uint256[])": FunctionFragment;
    "lockedAmounts(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "payer()": FunctionFragment;
    "releaseDate()": FunctionFragment;
    "releaseInterval()": FunctionFragment;
    "releasePercents(uint256)": FunctionFragment;
    "releasedAmount(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startDate()": FunctionFragment;
    "startPercent()": FunctionFragment;
    "timestamp()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allUsers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "available", values: [string]): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimFor", values: [string]): string;
  encodeFunctionData(functionFragment: "firstTerm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedAmounts",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releaseInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releasePercents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "releasedAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startDate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startPercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allUsers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstTerm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasePercents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startDate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class TokenLockForPublic extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenLockForPublicInterface;

  functions: {
    activate(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "activate(address,uint256)"(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allUsers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "allUsers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    available(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "available(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    claimFor(user: string, overrides?: Overrides): Promise<ContractTransaction>;

    "claimFor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    firstTerm(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "firstTerm()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    lock(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockBatch(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lockBatch(address[],uint256[])"(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockedAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "lockedAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    payer(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "payer()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    releaseDate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "releaseDate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    releaseInterval(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "releaseInterval()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    releasePercents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "releasePercents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    releasedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "releasedAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    startDate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "startDate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    startPercent(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "startPercent()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    timestamp(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "timestamp()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  activate(
    _payer: string,
    _openDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "activate(address,uint256)"(
    _payer: string,
    _openDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allUsers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allUsers(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  available(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "available(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  claimFor(user: string, overrides?: Overrides): Promise<ContractTransaction>;

  "claimFor(address)"(
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

  "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

  lock(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockBatch(
    addresses: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lockBatch(address[],uint256[])"(
    addresses: string[],
    amounts: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "lockedAmounts(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  payer(overrides?: CallOverrides): Promise<string>;

  "payer()"(overrides?: CallOverrides): Promise<string>;

  releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

  "releaseDate()"(overrides?: CallOverrides): Promise<BigNumber>;

  releaseInterval(overrides?: CallOverrides): Promise<BigNumber>;

  "releaseInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

  releasePercents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasePercents(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  releasedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "releasedAmount(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  startDate(overrides?: CallOverrides): Promise<BigNumber>;

  "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

  startPercent(overrides?: CallOverrides): Promise<BigNumber>;

  "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

  timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    activate(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "activate(address,uint256)"(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    allUsers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allUsers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    available(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "available(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    claimFor(user: string, overrides?: CallOverrides): Promise<void>;

    "claimFor(address)"(user: string, overrides?: CallOverrides): Promise<void>;

    firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

    "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "lock(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockBatch(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "lockBatch(address[],uint256[])"(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    lockedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockedAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    payer(overrides?: CallOverrides): Promise<string>;

    "payer()"(overrides?: CallOverrides): Promise<string>;

    releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

    "releaseDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    releaseInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "releaseInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    releasePercents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasePercents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    releasedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "releasedAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    startPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    activate(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "activate(address,uint256)"(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    allUsers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allUsers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    available(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "available(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    claimFor(user: string, overrides?: Overrides): Promise<BigNumber>;

    "claimFor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

    "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lock(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockBatch(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lockBatch(address[],uint256[])"(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockedAmounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "lockedAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    payer(overrides?: CallOverrides): Promise<BigNumber>;

    "payer()"(overrides?: CallOverrides): Promise<BigNumber>;

    releaseDate(overrides?: CallOverrides): Promise<BigNumber>;

    "releaseDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    releaseInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "releaseInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    releasePercents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasePercents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    releasedAmount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "releasedAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    startPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "timestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activate(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "activate(address,uint256)"(
      _payer: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allUsers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allUsers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    available(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "available(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    claimFor(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimFor(address)"(
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    firstTerm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "firstTerm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockBatch(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lockBatch(address[],uint256[])"(
      addresses: string[],
      amounts: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockedAmounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lockedAmounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "payer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releaseDate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releaseInterval()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releasePercents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasePercents(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releasedAmount(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasedAmount(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    startDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startDate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startPercent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timestamp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
