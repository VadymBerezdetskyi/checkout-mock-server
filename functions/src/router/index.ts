const router = require('express').Router();
import PaymentInvoiceController from '../controllers/PaymentInvoiceController';

router.get('/payment-invoices/:id', PaymentInvoiceController.get);
router.post('/payment-invoices/process', PaymentInvoiceController.process);

//TODO: add endpoint for tokens

module.exports = router;