const InvoiceStateEnum = {
  Success: 'success' as 'success',
  Fail: 'fail' as 'fail',
  Pending: 'pending' as 'pending',
  BackendError: 'error' as 'error',
  Repay: 'repay' as 'repay',
  Redirect: 'redirect' as 'redirect',
  Autorepay: 'autorepay' as 'autorepay',
  RedirectGet: 'redirect_get' as 'redirect_get',
  AutorepayGet: 'autorepay_get' as 'autorepay_get',
  InvoiceUax: 'invoice_uax' as 'invoice_uax',
  InvoiceSelcom: 'invoice_selcom' as 'invoice_selcom',
  InvoiceMb: 'invoice_mb' as 'invoice_mb',
};

type InvoiceStateEnum = typeof InvoiceStateEnum[keyof typeof InvoiceStateEnum];

export { InvoiceStateEnum };