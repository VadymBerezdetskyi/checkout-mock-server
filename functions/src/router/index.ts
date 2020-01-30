const router = require('express').Router();

import PaymentInvoiceController from '../controllers/PaymentInvoiceController';
import PublicApiController from '../controllers/PublicApiController';

router.get('/payment-invoices/:id', PaymentInvoiceController.get);
router.post('/payment-invoices', PaymentInvoiceController.create);
router.post('/payment-invoices/process', PaymentInvoiceController.process);

router.post('/public-api/payment-prerequest', PublicApiController.paymentPrerequest);

//TODO: add endpoint for tokens

module.exports = router;