import { PaymentInvoice } from "../../models/PaymentInvoice";

export class BaseInvoiceBuilder {
  protected readonly _invoice: PaymentInvoice;

  constructor() {
    this._invoice = new PaymentInvoice();
  }

  getResult(): PaymentInvoice {
    return this._invoice;
  }
}