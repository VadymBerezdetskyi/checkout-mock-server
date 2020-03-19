const InvoiceStateEnum = {
  Success: 'success',
  Fail: 'fail',
  Pending: 'pending',
  BackendError: 'error',
  Repay: 'repay',
  Redirect: 'redirect',
  Autorepay: 'autorepay',
  RedirectGet: 'redirect_get',
  AutorepayGet: 'autorepay_get',
};

type InvoiceStateEnum = typeof InvoiceStateEnum[keyof typeof InvoiceStateEnum];

export { InvoiceStateEnum };