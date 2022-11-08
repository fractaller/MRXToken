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

interface TokenLockForPrivateInterface extends ethers.utils.Interface {
  functions: {
    "activate(address,address,uint256)": FunctionFragment;
    "available()": FunctionFragment;
    "claim()": FunctionFragment;
    "firstTerm()": FunctionFragment;
    "lock(uint256)": FunctionFragment;
    "lockedAmount()": FunctionFragment;
    "owner()": FunctionFragment;
    "payer()": FunctionFragment;
    "recipient()": FunctionFragment;
    "releaseDate()": FunctionFragment;
    "releaseInterval()": FunctionFragment;
    "releasePercents(uint256)": FunctionFragment;
    "releasedAmount()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startDate()": FunctionFragment;
    "startPercent()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activate",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "available", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "firstTerm", values?: undefined): string;
  encodeFunctionData(functionFragment: "lock", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "lockedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payer", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
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
    values?: undefined
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
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "available", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstTerm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
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

export class TokenLockForPrivate extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TokenLockForPrivateInterface;

  functions: {
    activate(
      _payer: string,
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "activate(address,address,uint256)"(
      _payer: string,
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    available(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "available()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    claim(overrides?: Overrides): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    firstTerm(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "firstTerm()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    lock(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lock(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lockedAmount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "lockedAmount()"(overrides?: CallOverrides): Promise<{
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

    recipient(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "recipient()"(overrides?: CallOverrides): Promise<{
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

    releasedAmount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "releasedAmount()"(overrides?: CallOverrides): Promise<{
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
    _recipient: string,
    _openDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "activate(address,address,uint256)"(
    _payer: string,
    _recipient: string,
    _openDate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  available(overrides?: CallOverrides): Promise<BigNumber>;

  "available()"(overrides?: CallOverrides): Promise<BigNumber>;

  claim(overrides?: Overrides): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

  "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

  lock(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lock(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "lockedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  payer(overrides?: CallOverrides): Promise<string>;

  "payer()"(overrides?: CallOverrides): Promise<string>;

  recipient(overrides?: CallOverrides): Promise<string>;

  "recipient()"(overrides?: CallOverrides): Promise<string>;

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

  releasedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "releasedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  startDate(overrides?: CallOverrides): Promise<BigNumber>;

  "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

  startPercent(overrides?: CallOverrides): Promise<BigNumber>;

  "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

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
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "activate(address,address,uint256)"(
      _payer: string,
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    "available()"(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

    "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "lock(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "lockedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    payer(overrides?: CallOverrides): Promise<string>;

    "payer()"(overrides?: CallOverrides): Promise<string>;

    recipient(overrides?: CallOverrides): Promise<string>;

    "recipient()"(overrides?: CallOverrides): Promise<string>;

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

    releasedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "releasedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    startPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

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
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "activate(address,address,uint256)"(
      _payer: string,
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    "available()"(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    firstTerm(overrides?: CallOverrides): Promise<BigNumber>;

    "firstTerm()"(overrides?: CallOverrides): Promise<BigNumber>;

    lock(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "lock(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "lockedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    payer(overrides?: CallOverrides): Promise<BigNumber>;

    "payer()"(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    "recipient()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    releasedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "releasedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    startDate(overrides?: CallOverrides): Promise<BigNumber>;

    "startDate()"(overrides?: CallOverrides): Promise<BigNumber>;

    startPercent(overrides?: CallOverrides): Promise<BigNumber>;

    "startPercent()"(overrides?: CallOverrides): Promise<BigNumber>;

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
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "activate(address,address,uint256)"(
      _payer: string,
      _recipient: string,
      _openDate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    available(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "available()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    firstTerm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "firstTerm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lock(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lock(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lockedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockedAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "payer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "recipient()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    releasedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releasedAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    startDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startDate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startPercent()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
