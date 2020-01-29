const router = require('express').Router();

router.get('/payment-invoices/:id', (_request: any, response: any) => {
  return response.json({ success: true });
});

module.exports = router;