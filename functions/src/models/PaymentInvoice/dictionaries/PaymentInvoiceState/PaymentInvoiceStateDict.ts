import { InvoiceStateEnum } from "../../enumerations/InvoiceStateEnum";

import successInvoice from '../../data/invoiceByState/success';
import pendingInvoice from '../../data/invoiceByState/pending';
import failInvoice from '../../data/invoiceByState/fail';
import backendErrorInvoice from '../../data/invoiceByState/backendError';
import repayInvoice from '../../data/invoiceByState/repay';

export const PaymentInvoiceStateDict: {
  [K in InvoiceStateEnum]: object
} = {
  [InvoiceStateEnum.Success]: successInvoice,
  [InvoiceStateEnum.Pending]: pendingInvoice,
  [InvoiceStateEnum.Fail]: failInvoice,
  [InvoiceStateEnum.BackendError]: backendErrorInvoice,
  [InvoiceStateEnum.Repay]: repayInvoice,
};