import { InvoiceBuilder } from "./index";
import { BaseInvoiceBuilder } from "./BaseInvoiceBuilder";
import { StatusesFields } from "../../controllers/PaymentInvoiceController";
import { Payment } from "../../models/Payment";

export class ProcessedInvoiceBuilder extends BaseInvoiceBuilder implements InvoiceBuilder {
  private readonly _body_params: StatusesFields;

  constructor(id: string, body_params: StatusesFields) {
    super(id);
    this._body_params = body_params;
  }

  setActivePayment(): this {
    this._invoice.active_payment = new Payment(this._body_params.payment_resolution);

    return this;
  }

  setActivePaymentRequest(): this {

    return this;
  }

  setStatus(): this {

    return this;
  }
}