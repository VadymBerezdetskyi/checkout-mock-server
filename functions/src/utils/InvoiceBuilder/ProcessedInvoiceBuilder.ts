import { InvoiceBuilder } from "./index";
import { BaseInvoiceBuilder } from "./BaseInvoiceBuilder";

export class ProcessedInvoiceBuilder extends BaseInvoiceBuilder implements InvoiceBuilder {
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