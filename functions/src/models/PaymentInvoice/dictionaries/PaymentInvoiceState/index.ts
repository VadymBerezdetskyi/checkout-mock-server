import { DictionaryProvider } from "../../../../utils/Dictionary";
import { InvoiceStateEnum } from "../../enumerations/InvoiceStateEnum";
import { PaymentInvoiceStateDict } from "./PaymentInvoiceStateDict";

type PaymentInvoiceStateDictionary = DictionaryProvider<InvoiceStateEnum, object>;

export const PaymentInvoiceStatusDictionary: PaymentInvoiceStateDictionary = {
  getAll() {
    return Object.keys(PaymentInvoiceStateDict).map(a => ({
      key: a as InvoiceStateEnum,
      value: this.getFor(a as InvoiceStateEnum),
    }));
  },

  getFor(key: InvoiceStateEnum) {
    return PaymentInvoiceStateDict[key];
  },
};
