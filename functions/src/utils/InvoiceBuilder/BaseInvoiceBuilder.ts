import { PaymentInvoice } from "../../models/PaymentInvoice";
import { InvoiceBuilder } from "./index";
import { StatusesFields } from "../../controllers/PaymentInvoiceController";
import { PaymentRequest } from "../../models/PaymentRequest";
import { Payment } from "../../models/Payment";

const SelectedServiceFields = (isSuccess: boolean): StatusesFields => ({
  status: (isSuccess && 'paid') || 'failed',
  request_status: (isSuccess && 'captured') || 'authorize_failed',
  payment_resolution: (isSuccess && 'ok') || 'unknown',
});

export class BaseInvoiceBuilder implements InvoiceBuilder {
  protected readonly _invoice: PaymentInvoice;
  protected readonly _id_params: string[];

  protected constructor(id: string) {
    this._invoice = new PaymentInvoice();
    this._id_params = id.split('&');

    this.initiate();
  }

  getResult(): PaymentInvoice {
    return this._invoice;
  }

  private initiate(): void {
    const checkoutOptions = this._invoice.checkout_options;
    this._id_params.includes('auto_redirect') && (checkoutOptions.auto_redirect = true);
    this._id_params.includes('amount_readonly') && (checkoutOptions.auto_redirect = true);
    this._id_params.includes('selected_service') && (checkoutOptions.selected_service = 'test');
    this._id_params.includes('selected_service_fields_success') && (checkoutOptions.selected_service_fields = SelectedServiceFields(true));
    this._id_params.includes('selected_service_fields_fail') && (checkoutOptions.selected_service_fields = SelectedServiceFields(false));
    this._invoice.checkout_options = checkoutOptions;

    const customer = this._invoice.customer;
    this._id_params.includes('no_accounts') && (customer.setAccounts([]));
    this._invoice.customer = customer;

    this._id_params.includes('status_fail') && (this._invoice.status = 'failed');
    this._id_params.includes('status_success') && (this._invoice.status = 'paid');

    this._id_params.includes('request_status_fail') && (this._invoice.active_payment_request = new PaymentRequest('authorize_failed'));
    this._id_params.includes('request_status_success') && (this._invoice.active_payment_request = new PaymentRequest('captured'));

    this._id_params.includes('payment_resolution_fail') && (this._invoice.active_payment = new Payment('invalid_pan'));
    this._id_params.includes('payment_resolution_success') && (this._invoice.active_payment = new Payment('ok'));
  }

  setActivePayment(): this {
    return this;
  }

  setActivePaymentRequest(): this {
    return this;
  }

  setStatus(): this {
    return this;
  }
}