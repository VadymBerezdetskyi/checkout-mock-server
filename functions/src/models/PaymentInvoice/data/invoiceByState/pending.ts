import { customerMock } from "../customerMock";
import { contextDataMock } from "../contextDataMock";
import { optionsMock } from "../optionsMock";
import { checkoutOptionsMock } from "../checkoutOptionsMock";
import { commerceAccountMock } from "../commerceAccountMock";
import { Payment } from "../Payment";
import { InvoiceStateEnum } from "../../enumerations/InvoiceStateEnum";
import { PaymentRequest } from "../PaymentRequest";

export default {
  amount: 10,
  currency: 'UAH',
  description: 'Invoice decription',
  status: 'pending',
  resolution: 'ok',
  referenceId: 'referenceId111',
  customer: customerMock,
  active_payment: new Payment(InvoiceStateEnum.Pending),
  active_payment_request: new PaymentRequest(InvoiceStateEnum.Pending),
  context_data: contextDataMock,
  options: optionsMock,
  checkout_options: checkoutOptionsMock,
  commerce_account: commerceAccountMock,
}