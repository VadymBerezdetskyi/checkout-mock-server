export interface InvoiceBuilder {
  setStatus(): this;
  setActivePaymentRequest(): this;
  setActivePayment(): this;
  setCustomer(): this;
  setCheckoutOptions(): this;
}