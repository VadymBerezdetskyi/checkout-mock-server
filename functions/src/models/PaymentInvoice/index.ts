import ContextData from '../../resource/data/contextData';
import { Payment } from "../Payment";
import { Customer } from "../Customer";
import { CommerceAccount } from "../CommerceAccount";
import { CheckoutOptions } from "../CheckoutOptions";
import { PaymentRequest } from "../PaymentRequest";

export class PaymentInvoice {
  readonly amount: number = 100;
  readonly currency: string = 'UAH';
  readonly description: string = 'Payment #123456324';
  readonly reference_id: string = 'adsfasdeg345';
  readonly resolution: string = 'ok';
  readonly context_data: object = ContextData;
  readonly payment_requests: any[] = [];
  readonly options: object = {
    return_url: 'https://example.com'
  };

  commerce_account: CommerceAccount = new CommerceAccount();
  customer: Customer = new Customer();
  checkout_options: CheckoutOptions = new CheckoutOptions();

  active_payment_request: PaymentRequest | null = null;
  active_payment: Payment | null = null;

  status: string = 'created';

  constructor() {

  }

  setStatus(status: string): void {
    this.status = status;
  }
}