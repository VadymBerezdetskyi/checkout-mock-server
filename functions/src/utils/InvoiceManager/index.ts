import { InvoiceBuilder } from "../InvoiceBuilder";

export class InvoiceManager {
  private _builder: InvoiceBuilder;

  constructor(builder: InvoiceBuilder) {
    this._builder = builder;
  }

  make(): void {
    this._builder
      .setStatus()
      .setActivePaymentRequest()
      .setActivePayment();
  }
}