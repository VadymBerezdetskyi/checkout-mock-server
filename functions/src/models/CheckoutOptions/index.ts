import { KeyValueString } from "../../controllers/PaymentInvoiceController";

export class CheckoutOptions {
  selected_service: string = '';
  selected_service_fields: KeyValueString = {};
  auto_redirect: boolean = false;
  amount_readonly: boolean = false;
  context_data_readonly: string = '';
  theme: string = 'default';
  theme_options: KeyValueString = {};
}