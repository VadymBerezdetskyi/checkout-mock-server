import { InvoiceStateEnum } from "../enumerations/InvoiceStateEnum";
import { flowActionMock } from "./flowActionMock";
import { flowActionGet } from "./flowActionGet";

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

  flow_action?: object;
  flow?: string;

  constructor(state: InvoiceStateEnum) {
    this._setStatus(state);
    this._setResolution(state);
    this._setFlowAction(state);
  }

  private _setStatus(state: InvoiceStateEnum) {
    switch (state) {
      case InvoiceStateEnum.BackendError: this.status = 'authorize_pending'; break;
      case InvoiceStateEnum.Repay: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Fail: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Pending: this.status = 'capture_pending'; break;
      case InvoiceStateEnum.Success: this.status = 'captured'; break;
      case InvoiceStateEnum.Autorepay: this.status = 'authorize_failed'; break;
      case InvoiceStateEnum.Redirect: this.status = 'authorize_pending'; break;
      default: break;
    }
  }

  private _setResolution(state: InvoiceStateEnum) {
    if (state === InvoiceStateEnum.Repay) {
      this.resolution = 'insufficient_funds';
    }
  }

  private _setFlowAction(state: InvoiceStateEnum) {
    if (
      state === InvoiceStateEnum.Redirect
      || state === InvoiceStateEnum.Autorepay
      || state === InvoiceStateEnum.AutorepayGet
      || state === InvoiceStateEnum.RedirectGet
    ) {
      this.flow = 'card';
      this.flow_action = flowActionMock;

      if (state.includes('_get')) {
        this.flow_action = flowActionGet;
      }
    }
  }
}