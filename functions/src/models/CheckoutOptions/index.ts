export class CheckoutOptions {
  selected_service: string = '';
  selected_service_fields: string = '';
  auto_redirect: boolean = false;
  amount_readonly: boolean = false;
  context_data_readonly: string = '';
  theme: string = 'default';
  theme_options: { [key: string]: string } = {};
}