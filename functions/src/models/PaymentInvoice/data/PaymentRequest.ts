import { InvoiceStateEnum } from "../enumerations/InvoiceStateEnum";

export class PaymentRequest {
  resolution: string = 'ok';
  service: string = 'card';

  status!: string;

  constructor(state: InvoiceStateEnum) {
    this._setStatus(state);
  }

  private _setStatus(state: InvoiceStateEnum) {
    switch (state) {
      case InvoiceStateEnum.BackendError: this.status = 'captured'; break;
      case InvoiceStateEnum.Repay: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Fail: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Pending: this.status = 'capture_pending'; break;
      case InvoiceStateEnum.Success: this.status = 'captured'; break;
      default: break;
    }
  }
}