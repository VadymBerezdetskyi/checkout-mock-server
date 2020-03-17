import { Request, Response } from 'express';
import { Controller, Get, Post } from '@overnightjs/core';
import { InvoiceStateEnum } from "../models/PaymentInvoice/enumerations/InvoiceStateEnum";
import { PaymentInvoiceStatusDictionary } from "../models/PaymentInvoice/dictionaries/PaymentInvoiceState";

@Controller('payment-invoices')
export class PaymentInvoiceController {
  @Get(':id')
  get(req: Request, res: Response): any {
    const id = req.params.id;
    console.log(id, Object.values(InvoiceStateEnum).includes(id), Object.values(InvoiceStateEnum));

    if (!Object.values(InvoiceStateEnum).includes(id)) {
      return res.status(404).json({ message: 'Not found' });
    }

    const attributes = PaymentInvoiceStatusDictionary.getFor(id);

    return res.status(200).json({ id, attributes });
  }

  @Post(':id/process')
  process(req: Request, res: Response): void {
    const id = req.params.id;

    if (!Object.values(InvoiceStateEnum).includes(id)) {
      res.status(422).json({ message: 'Validation error' });
    }

    const attributes = PaymentInvoiceStatusDictionary.getFor(id);

    res.status(200).json({ id, attributes });
  }
}