import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';

import { PaymentInvoiceController } from "./controllers/PaymentInvoiceController";

export default class CheckoutMockServer extends Server {
  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));

    this._setupControllers();
  }

  private _setupControllers(): void {
    super.addControllers([
      new PaymentInvoiceController(),
    ]);
  }

  public getListener() {
    return this.app;
  }
}