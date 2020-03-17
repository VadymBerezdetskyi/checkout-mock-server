import { InvoiceStateEnum } from "../enumerations/InvoiceStateEnum";

export class Payment {
  service_detals: object = {
    rrn: 'string',
    arn: 'string',
    mask: 'string',
    first6: 'string',
    last4: 'string',
    brand: 'mastercard',
    holder: 'string',
    issuer_name: 'string',
    issuer_country: 'string',
  };

  service: string = 'card';
  resolution: string = 'ok';

  status!: string;

  constructor(state: InvoiceStateEnum) {
    this._setStatus(state);
    this._setResolution(state);
  }

  private _setStatus(state: InvoiceStateEnum) {
    switch (state) {
      case InvoiceStateEnum.BackendError: this.status = 'authorize_pending'; break;
      case InvoiceStateEnum.Repay: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Fail: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Pending: this.status = 'capture_pending'; break;
      case InvoiceStateEnum.Success: this.status = 'captured'; break;
      default: break;
    }
  }

  private _setResolution(state: InvoiceStateEnum) {
    if (state === InvoiceStateEnum.Repay) {
      this.resolution = '';
    }
  }
}