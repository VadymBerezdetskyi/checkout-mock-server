const InvoiceStateEnum = {
  Success: 'success',
  Fail: 'fail',
  Pending: 'pending',
  BackendError: 'error',
  Repay: 'repay',
  Redirect: 'redirect',
  Autorepay: 'autorepay',
};

type InvoiceStateEnum = typeof InvoiceStateEnum[keyof typeof InvoiceStateEnum];

export { InvoiceStateEnum };