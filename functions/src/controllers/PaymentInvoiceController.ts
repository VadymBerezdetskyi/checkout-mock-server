import { DefaultInvoiceBuilder } from "../utils/InvoiceBuilder/DefaultInvoiceBuilder";
import { InvoiceManager } from "../utils/InvoiceManager";
// import { ProcessedInvoiceBuilder } from "../utils/InvoiceBuilder/ProcessedInvoiceBuilder";

export interface KeyValueString {
  [key: string]: string;
}

interface RequestParams {
  id: string;
}

export interface StatusesFields extends KeyValueString {
  status: string;
  request_status: string;
  payment_resolution: string;
}

class PaymentInvoiceController {
  static get(_request: { params: RequestParams }, response: any) {
    const id =_request.params.id;

    const builder = new DefaultInvoiceBuilder(id);
    const manager = new InvoiceManager(builder);
    manager.make();

    const PaymentInvoice = { id, attributes: builder.getResult() };

    return response.json(PaymentInvoice);
  }

  static acsHandler(_request: { params: RequestParams, query: StatusesFields }, response: any) {
    // const { payment_resolution, request_status, status } = _request.query;
    // const absentFields = [ payment_resolution, request_status, status ].filter(f => !f);
    //
    // if (absentFields.length) {
      return response.status(404).json({
        message: `Not Found`
      });
    // }
    //
    // const id =_request.params.id;
    //
    // const builder = new ProcessedInvoiceBuilder(id, _request.query);
    // const manager = new InvoiceManager(builder);
    // manager.make();
    //
    // const PaymentInvoice = { id, attributes: builder.getResult() };
    //
    // return response.json(PaymentInvoice);
  }

  static process(_request: any, response: any) {
    /**
     * build redirect form with query params statuses
     */
    return response.status(404).json({
      message: `Not Found`
    });
  }
}

export default PaymentInvoiceController;