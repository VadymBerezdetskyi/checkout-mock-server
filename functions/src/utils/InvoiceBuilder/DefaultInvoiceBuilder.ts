import { InvoiceBuilder } from "./index";
import { BaseInvoiceBuilder } from "./BaseInvoiceBuilder";

export class DefaultInvoiceBuilder extends BaseInvoiceBuilder implements InvoiceBuilder {
  setActivePayment(): this {
    return this;
  }

  setActivePaymentRequest(): this {
    return this;
  }

  setCheckoutOptions(): this {
    return this;
  }

  setCustomer(): this {
    return this;
  }

  setStatus(): this {
    return this;
  }
}