import { customerMock } from "../customerMock";
import { contextDataMock } from "../contextDataMock";
import { optionsMock } from "../optionsMock";
import { checkoutOptionsMock } from "../checkoutOptionsMock";
import { commerceAccountMock } from "../commerceAccountMock";
import { Payment } from "../Payment";
import { PaymentRequest } from "../PaymentRequest";
import { InvoiceStateEnum } from "../../enumerations/InvoiceStateEnum";

export default {
  amount: 10,
  currency: 'UAH',
  description: 'Invoice decription',
  status: 'paid',
  resolution: 'ok',
  referenceId: 'referenceId111',
  customer: customerMock,
  active_payment: new Payment(InvoiceStateEnum.Success),
  active_payment_request: new PaymentRequest(InvoiceStateEnum.Success),
  context_data: contextDataMock,
  options: optionsMock,
  checkout_options: checkoutOptionsMock,
  commerce_account: commerceAccountMock,
}