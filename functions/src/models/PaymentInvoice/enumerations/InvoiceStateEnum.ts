const InvoiceStateEnum = {
  Success: 'success',
  Fail: 'fail',
  Pending: 'pending',
  BackendError: 'error',
  Repay: 'repay',
};

type InvoiceStateEnum = typeof InvoiceStateEnum[keyof typeof InvoiceStateEnum];

export { InvoiceStateEnum };