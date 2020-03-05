export class PaymentRequest {
  readonly resolution: string = 'ok';
  readonly flow: string = 'card';
  readonly service: string = 'card';

  status: string;

  constructor(status: string) {
    this.status = status;
  }
}