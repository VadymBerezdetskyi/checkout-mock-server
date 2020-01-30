import ResourceProvider from '../resource/index';

class PaymentInvoiceController {
  static get(_request: any, response: any) {
    return response.json(ResourceProvider(response).getPaymentInvoice());
  }

  static create(_request: any, response: any) {
    // add constraint for body
    return response.json(ResourceProvider(response).getPaymentInvoice());
  }

  static process(_request: any, response: any) {
    // add constraint for body
    return response.json(ResourceProvider(response).getPaymentInvoice());
  }
}

export default PaymentInvoiceController;