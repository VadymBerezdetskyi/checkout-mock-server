import checkoutOptions from './data/checkoutOptions';
import contextData from './data/contextData';
import paymentInvoice from './data/paymentInvoice';
import paymentRequest from './data/paymentRequest';
import prerequestData from './data/prerequestData';

// import oft_payment_services from './data/payment_services';
// import oft_payment_methods from './data/payment_methods';

class ResourceProvider {
  constructor(params: object) {
    // this._params = params;
  }

  getPaymentInvoice(): object {
    return this.buildInvoice();
  }

  getPrerequestData(): object {
    return prerequestData;
  }

  private buildInvoice(): object {
    return {
      id: 'pci_1q2w3e4r5t6y6y7u8i9o',
      attributes: {
        ...paymentInvoice,
        payment_request: paymentRequest,
        checkout_options: checkoutOptions,
        context_data: contextData,
        prerequest_data: prerequestData,
      }
    }
  }
}

export default (params: object) => new ResourceProvider(params);