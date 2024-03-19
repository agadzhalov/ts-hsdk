import { Hbar } from "@hashgraph/sdk";

export class ContractConfig {
   public gas: number;
   public maxTransactionFee: Hbar;
   public maxQueryPayment: Hbar;

   builder(
     gas: number = 100000,
     maxTransactionFee: Hbar = new Hbar(2),
     maxQueryPayment: Hbar = new Hbar(1)
   ) {
     this.gas = gas;
     this.maxTransactionFee = maxTransactionFee;
     this.maxQueryPayment = maxQueryPayment;
   }
}