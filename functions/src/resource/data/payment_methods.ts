interface OftMethod {
  code: string,
  vendor?: string,
  category: string,
  name?: object,
  description?: object,
  countries?: string[]
}

export default  [
  {
    "code": "bpay",
    "vendor": "bpay",
    "category": "alternative",
    "countries": [
      "AU"
    ],
    "name": {
      "en": "BPAY"
    },
    "description": {
      "en": "BPAY is a online payment solution for the Australian market which allows consumers to easily initiate payments by using their checking or savings account or linked debit card."
    }
  },
    {
      "code": "tescolotus",
      "vendor": "tescolotus",
      "category": "alternative",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "Tesco Lotus"
      },
      "description": {
        "en": "Tesco Lotus allows Thai shoppers to pay offline for their online purchases."
      }
    },
    {
      "code": "octopus",
      "vendor": "octopus",
      "category": "alternative",
      "countries": [
        "HK"
      ],
      "name": {
        "en": "Octopus"
      }
    },
    {
      "code": "bigconlinepayment",
      "vendor": "bigconlinepayment",
      "category": "alternative",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "Big C"
      },
      "description": {
        "en": "BIG C is a payment solution in Thailand that allows consumers to pay by cash or credit card for their online grocery purchases. "
      }
    },
    {
      "code": "bitcoin",
      "vendor": "bitcoin",
      "category": "alternative",
      "name": {
        "en": "Bitcoin"
      }
    },
    {
      "code": "litecoin",
      "category": "alternative",
      "name": {
        "en": "Litecoin"
      }
    },
    {
      "code": "ukrsibbank",
      "category": "internet_banking",
      "name": {
        "en": "Ukrsib Bank",
        "ru": "УкрСиб Банк",
        "uk": "УкрСиб Банк"
      }
    },
    {
      "code": "qazkombank",
      "category": "internet_banking",
      "name": {
        "en": "Qazkom Bank"
      }
    },
    {
      "code": "libertybank",
      "category": "internet_banking",
      "name": {
        "en": "Liberty Bank",
        "ru": "Либерти Банк",
        "uk": "Ліберті Банк"
      }
    },
    {
      "code": "promsvyazbank",
      "category": "internet_banking",
      "name": {
        "en": "Promsvyazbank",
        "ru": "Промсвязьбанк"
      }
    },
    {
      "code": "alfaclick",
      "category": "internet_banking",
      "name": {
        "en": "Alfa Click"
      }
    },
    {
      "code": "ibox",
      "category": "alternative",
      "name": {
        "en": "Ibox"
      }
    },
    {
      "code": "sepadirectdebit",
      "vendor": "sepadirectdebit",
      "category": "direct_debit",
      "countries": [
        "AL",
        "AD",
        "AU",
        "BY",
        "BE",
        "BA",
        "BG",
        "HR",
        "CZ",
        "DK",
        "EE",
        "FO",
        "FJ",
        "FR",
        "DE",
        "GI",
        "GR",
        "GG",
        "HU",
        "IS",
        "IM",
        "IT",
        "JE",
        "LV",
        "LI",
        "LT",
        "LU",
        "ML",
        "MD",
        "MC",
        "ME",
        "NL",
        "NO",
        "PT",
        "RO",
        "SM",
        "RS",
        "SK",
        "ES",
        "SJ",
        "SE",
        "CH"
      ],
      "name": {
        "en": "SEPA Direct Debit"
      },
      "description": {
        "en": "The SEPA Direct Debit enables to make pan-European collections in euro's on a one-off or recurrent basis. "
      }
    },
    {
      "code": "elektronischeslastschriftverfahren",
      "vendor": "elektronischeslastschriftverfahren",
      "category": "direct_debit",
      "countries": [
        "DE"
      ],
      "name": {
        "en": "ELV"
      },
      "description": {
        "en": "ELV stands for Elektronisches Lastschriftverfahren and is a popular online payment method in Germany. By choosing to pay with ELV at checkout, the consumer permits the merchant to collect (debit) the purchase amount directly from his or her bank account."
      }
    },
    {
      "code": "ssk",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk"
      }
    },
    {
      "code": "euroset",
      "category": "mobile_payment",
      "name": {
        "en": "Euroset",
        "ru": "Евросеть",
        "uk": "Євросеть"
      }
    },
    {
      "code": "bancoitau",
      "vendor": "bancoitau",
      "category": "internet_banking",
      "name": {
        "en": "Banco Itaú"
      },
      "description": {
        "en": ""
      }
    },
    {
      "code": "bradescocomercioeletronico",
      "vendor": "bradescocomercioeletronico",
      "category": "internet_banking",
      "name": {
        "en": "Bradesco Comércio Eletrônico"
      },
      "description": {
        "en": "Bradesco Comércio Eletrônico is the online bank transfer payment solution of Bradesco, one of the leading banks in Brazil."
      }
    },
    {
      "code": "enetsdirectdebit",
      "vendor": "enetsdirectdebit",
      "category": "internet_banking",
      "countries": [
        "SG"
      ],
      "name": {
        "en": "eNETS Direct Debit"
      },
      "description": {
        "en": "eNETS Direct Debit allows shoppers to pay from their secure internet banking application."
      }
    },
    {
      "code": "rcbc",
      "vendor": "rcbc",
      "category": "internet_banking",
      "countries": [
        "PH"
      ],
      "name": {
        "en": "RCBC over-the-counter"
      }
    },
    {
      "code": "pravexbank",
      "category": "mobile_payment",
      "name": {
        "en": "Pravex bank",
        "ru": "Правекс банк",
        "uk": "Правекс банк"
      }
    },
    {
      "code": "safetypay",
      "vendor": "safetypay",
      "category": "internet_banking",
      "name": {
        "en": "SafetyPay"
      },
      "description": {
        "en": "SafetyPay is a global, secure Internet payment solution that enables online banking customers to make online purchases from merchants worldwide and pay directly through their local bank account in their local currency. "
      }
    },
    {
      "code": "okpay",
      "category": "mobile_payment",
      "countries": [
        "RU"
      ],
      "name": {
        "en": "OKPay"
      }
    },
    {
      "code": "ethereum",
      "category": "alternative",
      "countries": [
        "UA"
      ],
      "name": {
        "en": "Ethereum"
      }
    },
    {
      "code": "ripple",
      "category": "alternative",
      "name": {
        "en": "Ripple"
      }
    },
    {
      "code": "tele2ru",
      "category": "alternative",
      "name": {
        "en": "Tele2",
        "ru": "Теле2",
        "uk": "Теле2"
      }
    },
    {
      "code": "otpbank",
      "vendor": "otpbank",
      "category": "internet_banking",
      "countries": [
        "SK"
      ],
      "name": {
        "en": "OTP Bank",
        "ru": "ОТП Банк",
        "uk": "ОТП Банк"
      },
      "description": {
        "en": "OTP Bank enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "euteller",
      "vendor": "euteller",
      "category": "internet_banking",
      "name": {
        "uk": "Euteller"
      },
      "description": {
        "en": "Euteller is a privately held payment service provider enabling consumers to make direct payment using online bank account."
      }
    },
    {
      "code": "poppankki",
      "vendor": "poppankki",
      "category": "internet_banking",
      "countries": [
        "FJ"
      ],
      "name": {
        "en": "POP Pankki"
      },
      "description": {
        "en": "POP Pankki enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
      }
    },
    {
      "code": "komercnibanka",
      "vendor": "komercnibanka",
      "category": "internet_banking",
      "countries": [
        "CZ"
      ],
      "name": {
        "en": "Komercni Banka"
      },
      "description": {
        "en": "Komercni Banka (Czech Republic) enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "krungthaibanknetbanking",
      "vendor": "krungthaibanknetbanking",
      "category": "internet_banking",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "Krungthai Bank netbanking"
      },
      "description": {
        "en": "Krungthai Bank netbanking allows its banking customers to use its internet banking application for online purchases."
      }
    },
    {
      "code": "scbbanknetbanking",
      "vendor": "scbbanknetbanking",
      "category": "internet_banking",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "SCB netbanking"
      },
      "description": {
        "en": "SCB Bank netbanking allows its banking customers to use its internet banking application for online purchases."
      }
    },
    {
      "code": "krungsrinetbanking",
      "vendor": "krungsrinetbanking",
      "category": "internet_banking",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "Krungsri netbanking"
      },
      "description": {
        "en": "Krungsri netbanking allows its banking customers to use its internet banking application for online purchases."
      }
    },
    {
      "code": "bancopastor",
      "vendor": "bancopastor",
      "category": "internet_banking",
      "countries": [
        "ES"
      ],
      "name": {
        "en": "Banco Pastor"
      },
      "description": {
        "en": "Banco Pastor in Spain enables its customers to pay for goods and services bought over the internet using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "jyskebank",
      "vendor": "jyskebank",
      "category": "internet_banking",
      "countries": [
        "DK"
      ],
      "name": {
        "en": "Jyske Bank"
      },
      "description": {
        "en": "Jyske Bank enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
      }
    },
    {
      "code": "vubbanka",
      "vendor": "vubbanka",
      "category": "internet_banking",
      "countries": [
        "SK"
      ],
      "name": {
        "en": "VÚB Banka"
      },
      "description": {
        "en": "VÚB Banka in Slovakia enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement."
      }
    },
    {
      "code": "alandsbanken",
      "vendor": "alandsbanken",
      "category": "internet_banking",
      "countries": [
        "FJ"
      ],
      "name": {
        "en": "Älandsbanken"
      },
      "description": {
        "en": "Älandsbanken enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
      }
    },
    {
      "code": "ingspain",
      "vendor": "ingspain",
      "category": "internet_banking",
      "countries": [
        "AX",
        "ES"
      ],
      "name": {
        "en": "ING Bank | Spain",
        "ru": "ИНГ Банк | Испания",
        "uk": "ІНГ Банк | Іспанія"
      },
      "description": {
        "en": "ING Bank enables its customers to shop online using online bank transfers as payment method. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "unicredit",
      "vendor": "unicredit",
      "category": "internet_banking",
      "countries": [
        "BG",
        "HR",
        "CZ",
        "RO",
        "SK"
      ],
      "name": {
        "en": "UniCredit",
        "ru": "ЮниКредит",
        "uk": "ЮніКредит"
      },
      "description": {
        "en": "UniCredit enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "ideal",
      "vendor": "ideal",
      "category": "internet_banking",
      "countries": [
        "NL"
      ],
      "name": {
        "en": "iDEAL"
      },
      "description": {
        "en": "iDEAL is a standardised payment method for making secure online payments directly between bank accounts in The Netherlands."
      }
    },
    {
      "code": "kasikornbankkbanknetbanking",
      "vendor": "kasikornbankkbanknetbanking",
      "category": "internet_banking",
      "countries": [
        "TH"
      ],
      "name": {
        "en": "Kbank netbanking"
      },
      "description": {
        "en": "The KasikornThai or Kbank net banking service allows its customers to pay online from their internet banking application. "
      }
    },
    {
      "code": "icicinetbanking",
      "vendor": "icicinetbanking",
      "category": "internet_banking",
      "countries": [
        "IN"
      ],
      "name": {
        "en": "ICICI netbanking"
      },
      "description": {
        "en": "ICICI netbanking in India allows its bank customers to use the bank's home banking to pay for online purchases."
      }
    },
    {
      "code": "volksbank",
      "vendor": "volksbank",
      "category": "internet_banking",
      "countries": [
        "CZ",
        "SK"
      ],
      "name": {
        "en": "Volksbank"
      },
      "description": {
        "en": "Volksbank enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "moneymail",
      "vendor": "moneymail",
      "category": "internet_banking",
      "name": {
        "en": "MoneyMail"
      },
      "description": {
        "en": "MoneyMail allows Russian shoppers to send their money through their nationwide bank network. MoneyMail users can pay by making bank deposits by using several payment systems, card and cash payments."
      }
    },
    {
      "code": "lacaixa",
      "vendor": "lacaixa",
      "category": "internet_banking",
      "countries": [
        "ES"
      ],
      "name": {
        "en": "La Caixa"
      },
      "description": {
        "en": "La Caixa in Spain enables its customers to shop online using online bank transfers as payment method. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "gemoney",
      "vendor": "gemoney",
      "category": "internet_banking",
      "countries": [
        "CZ"
      ],
      "name": {
        "en": "GE Money"
      },
      "description": {
        "en": "GE Money enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "spankki",
      "vendor": "spankki",
      "category": "internet_banking",
      "countries": [
        "FJ"
      ],
      "name": {
        "en": "S-Pankki"
      },
      "description": {
        "en": "S-Pankki enables their customers to use online banking to complete their internet purchases. Consumers are redirected to their trusted bank environment to initiate an online bank transfer."
      }
    },
    {
      "code": "mbank",
      "vendor": "mbank",
      "category": "internet_banking",
      "countries": [
        "AX",
        "SK"
      ],
      "name": {
        "en": "mBank (mTransfer)"
      },
      "description": {
        "en": "mBank (mTransfer) enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "provinciapagos",
      "vendor": "provinciapagos",
      "category": "internet_banking",
      "countries": [
        "AR"
      ],
      "name": {
        "en": "ProvinciaPagos"
      },
      "description": {
        "en": "ProvinciaPagos is the online banking service of the Grupo Provincia in Argentina. ProvinciaPagos allows online shoppers to use their online banking system to complete their online purchases."
      }
    },
    {
      "code": "trustly",
      "vendor": "trustly",
      "category": "internet_banking",
      "countries": [
        "AU",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FJ",
        "FR",
        "DE",
        "GR",
        "HU",
        "IS",
        "IT",
        "LV",
        "LT",
        "LU",
        "ML",
        "NL",
        "NO",
        "AX",
        "PT",
        "RO",
        "SK",
        "ES",
        "SE",
        "AE"
      ],
      "name": {
        "en": "Trustly"
      },
      "description": {
        "en": "Trustly makes paying directly from your online bank account as fast, simple and secure as sliding cash across the counter."
      }
    },
    {
      "code": "hdfcbanknetbankingindia",
      "vendor": "hdfcbanknetbankingindia",
      "category": "internet_banking",
      "countries": [
        "IN"
      ],
      "name": {
        "en": "HDFC Bank Netbanking"
      },
      "description": {
        "en": "The HDFC Bank's online banking (netbanking) service allows its customers to pay online from their home banking application. "
      }
    },
    {
      "code": "sepacredittransfer",
      "vendor": "sepacredittransfer",
      "category": "internet_banking",
      "countries": [
        "AX",
        "AL",
        "AD",
        "AU",
        "BE",
        "BA",
        "BG",
        "HR",
        "CZ",
        "EE",
        "FO",
        "FJ",
        "FR",
        "DE",
        "GI",
        "GR",
        "GG",
        "HU",
        "IS",
        "IM",
        "IT",
        "JE",
        "LV",
        "LI",
        "LT",
        "LU",
        "ML",
        "MD",
        "MC",
        "ME",
        "NL",
        "NO",
        "PT",
        "RO",
        "SM",
        "RS",
        "SK",
        "ES",
        "SJ",
        "SE"
      ],
      "name": {
        "en": "SEPA Credit Transfer"
      },
      "description": {
        "en": "The SEPA Credit Transfer (SCT) allows consumers to pay for their goods and services by using their euro bank account to transfer money directly to the merchants' bank account. Both the consumer and merchant should be domiciled within the SEPA (eurozone) region."
      }
    },
    {
      "code": "wiretransfer",
      "vendor": "wiretransfer",
      "category": "internet_banking",
      "name": {
        "en": "Wire Transfer"
      },
      "description": {
        "en": "Wire transfer or credit transfer is a method of electronic funds transfer from one person or institution (entity) to another. A wire transfer can be made from one bank account to another bank account or through a transfer of cash at a cash office."
      }
    },
    {
      "code": "inghomepay",
      "vendor": "inghomepay",
      "category": "internet_banking",
      "countries": [
        "BE"
      ],
      "name": {
        "en": "Home'Pay"
      },
      "description": {
        "en": "With ING's Home'Pay you do not even need a credit card to pay for your online purchases. Just pay via the secured Home'Bank connection!  "
      }
    },
    {
      "code": "citadelelatvia",
      "vendor": "citadelelatvia",
      "category": "internet_banking",
      "name": {
        "en": "Citadele Latvia"
      },
      "description": {
        "en": ""
      }
    },
    {
      "code": "erstebank",
      "vendor": "erstebank",
      "category": "internet_banking",
      "countries": [
        "HR",
        "HU",
        "SK"
      ],
      "name": {
        "en": "Erste Bank"
      },
      "description": {
        "en": "Erste Bank enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "inteligo",
      "vendor": "inteligo",
      "category": "internet_banking",
      "countries": [
        "AX"
      ],
      "name": {
        "en": "Inteligo"
      },
      "description": {
        "en": "Inteligo Bank (Poland) enables its customers to shop online using online bank transfers as payment method. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "nsmep",
      "category": "alternative",
      "name": {
        "en": "Prostir",
        "ru": "Простор",
        "uk": "Простір"
      }
    },
    {
      "code": "advcash",
      "category": "alternative",
      "name": {
        "en": "AdvCash"
      }
    },
    {
      "code": "advcash_wallet",
      "category": "alternative",
      "name": {
        "en": "AdvCash"
      }
    },
    {
      "code": "ssk_ua",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Ukraine"
      }
    },
    {
      "code": "paymer",
      "vendor": "webmoney",
      "category": "alternative",
      "countries": [
        "UA"
      ],
      "name": {
        "en": "Paymer check"
      },
      "description": {
        "ru": "Чек Paymer"
      }
    },
    {
      "code": "cifrograd",
      "category": "alternative",
      "name": {
        "en": "Cifrograd"
      }
    },
    {
      "code": "kviku",
      "category": "alternative",
      "name": {
        "en": "Kviku"
      }
    },
    {
      "code": "exmo",
      "category": "alternative",
      "name": {
        "en": "Exmo"
      }
    },
    {
      "code": "ssk_tj",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Tajikistan"
      }
    },
    {
      "code": "ssk_za",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk South Africa"
      }
    },
    {
      "code": "ssk_by",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Belarus"
      }
    },
    {
      "code": "ssk_ru",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Russia"
      }
    },
    {
      "code": "ssk_md",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Moldova"
      }
    },
    {
      "code": "ssk_ge",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Georgia"
      }
    },
    {
      "code": "ssk_kz",
      "category": "alternative",
      "name": {
        "en": "Self service kiosk Kazakhstan"
      }
    },
    {
      "code": "coingate",
      "category": "alternative",
      "name": {
        "en": "CoinGate"
      }
    },
    {
      "code": "perfectmoney",
      "category": "alternative",
      "name": {
        "en": "Perfect Money"
      }
    },
    {
      "code": "wmcard",
      "vendor": "webmoney",
      "category": "alternative",
      "name": {
        "en": "WebMoney card",
        "ru": "WebMoney карта",
        "uk": "WebMoney картка"
      }
    },
    {
      "code": "wmnote",
      "vendor": "webmoney",
      "category": "alternative",
      "name": {
        "en": "WebMoney note"
      }
    },
    {
      "code": "viabalotoonline",
      "vendor": "viabalotoonline",
      "category": "cash_payment",
      "countries": [
        "CO"
      ],
      "name": {
        "en": "Via Baloto"
      }
    },
    {
      "code": "famsa",
      "vendor": "famsa",
      "category": "cash_payment",
      "countries": [
        "MX"
      ],
      "name": {
        "en": "Famsa"
      }
    },
    {
      "code": "oxxo",
      "vendor": "oxxo",
      "category": "cash_payment",
      "countries": [
        "MX"
      ],
      "name": {
        "en": "Oxxo"
      }
    },
    {
      "code": "mts",
      "category": "mobile_carrier_billing",
      "name": {
        "en": "MTS",
        "ru": "МТС",
        "an": "МТС"
      }
    },
    {
      "code": "beeline",
      "category": "mobile_carrier_billing",
      "name": {
        "en": "Beeline",
        "ru": "Билайн",
        "uk": "Білайн"
      }
    },
    {
      "code": "test",
      "category": "alternative",
      "name": {
        "en": "Test",
        "ru": "Тест",
        "uk": "Тест"
      }
    },
    {
      "code": "kievstar",
      "category": "mobile_carrier_billing",
      "name": {
        "en": "Kievstar",
        "ru": "Киевстар",
        "uk": "Київстар"
      }
    },
    {
      "code": "csob",
      "vendor": "csob",
      "category": "internet_banking",
      "countries": [
        "CZ",
        "SK"
      ],
      "name": {
        "en": "CSOB"
      },
      "description": {
        "en": "CSOB Bank enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
      }
    },
    {
      "code": "megafon",
      "category": "mobile_carrier_billing",
      "name": {
        "en": "Megafon",
        "ru": "Мегафон",
        "uk": "Мегафон"
      }
    },
    {
      "code": "applepay",
      "vendor": "applepay",
      "category": "digital_wallet",
      "countries": [
        "UM"
      ],
      "name": {
        "en": "Apple Pay",
        "ru": "Apple Pay",
        "uk": "Apple Pay"
      },
      "description": {
        "en": "Apple Pay is the new mobile payment system by Apple. Apple Pay uses NFC technology for contactless payments in store, and can be used for online and in-app purchases. "
      }
    },
    {
      "code": "paydirekt",
      "vendor": "paydirekt",
      "category": "internet_banking",
      "countries": [
        "DE"
      ],
      "name": {
        "en": "paydirekt"
      }
    },
    {
      "code": "billmelater",
      "vendor": "billmelater",
      "category": "invoice_payment",
      "name": {
        "en": "PayPal Credit"
      },
      "description": {
        "en": "PayPal Credit (formerly known as Bill Me Later) is a convenient and secure way to pay on the web or over the phone. Bill Me Later lets shoppers buy now and pay later."
      }
    },
    {
      "code": "lider",
      "category": "alternative",
      "name": {
        "en": "Leader",
        "ru": "Лидер",
        "uk": "Лідер"
      }
    },
    {
      "code": "farmaciasdelahorro",
      "vendor": "farmaciasdelahorro",
      "category": "cash_payment",
      "countries": [
        "MX"
      ],
      "name": {
        "en": "Farmacias del Ahorro"
      }
    },
    {
      "code": "payshop",
      "vendor": "payshop",
      "category": "cash_payment",
      "countries": [
        "PT"
      ],
      "name": {
        "en": "Payshop"
      },
      "description": {
        "en": "Payshop is a Portugese online checkout method whereby consumers pay for their internet purchases at Payshop accepting brick-and-mortar shops. Shoppers get an Payshop 'invoice' which they pay in cash or via electronic payment at a physical location. "
      }
    },
    {
      "code": "capayable",
      "vendor": "capayable",
      "category": "cash_payment",
      "countries": [
        "NL"
      ],
      "name": {
        "en": "Capayable"
      },
      "description": {
        "en": "Capayable is a Dutch innovative payment solution for webshops. Capayable provides pay after delivery and a unique new payment solution: pay in three installments without interest!       "
      }
    },
    {
      "code": "frenchonlinepaymentmethodewalletpaylib",
      "vendor": "frenchonlinepaymentmethodewalletpaylib",
      "category": "digital_wallet",
      "countries": [
        "FR"
      ],
      "name": {
        "en": "paylib"
      },
      "description": {
        "en": "Digital wallet Paylib allows French consumers to easily pay for their online and mobile purchases. "
      }
    },
    {
      "code": "webmoneytransfer",
      "vendor": "webmoneytransfer",
      "category": "digital_wallet",
      "countries": [
        "AR",
        "BO",
        "BR",
        "CL",
        "CO",
        "EC",
        "FK",
        "GF",
        "GH",
        "PY",
        "PE",
        "RW",
        "SR",
        "TT",
        "VE"
      ],
      "name": {
        "en": "WebMoney Transfer"
      },
      "description": {
        "en": "WebMoney Transfer, established in 1998 - is the biggest electronic payment system in Russia and CIS, with 25 million registered users and more than 20 thousand merchants.                                "
      }
    },
    {
      "code": "visacheckout",
      "vendor": "visacheckout",
      "category": "digital_wallet",
      "countries": [
        "AR",
        "AU",
        "BR",
        "UM",
        "CA",
        "CL",
        "CO",
        "HK",
        "MY",
        "MX",
        "NZ",
        "SG",
        "ZA",
        "UA"
      ],
      "name": {
        "en": "Visa Checkout"
      },
      "description": {
        "en": "Visa Checkout is the fast online checkout service by Visa Inc. It allows Visa cardholders to checkout with just a username and password."
      }
    },
    {
      "code": "everi",
      "vendor": "everi",
      "category": "digital_wallet",
      "name": {
        "en": "Everi"
      },
      "description": {
        "en": "The first comprehensive US solution dedicated to facilitating payments and customer loyalty for online gaming."
      }
    },
    {
      "code": "pagseguro",
      "vendor": "pagseguro",
      "category": "digital_wallet",
      "countries": [
        "BR"
      ],
      "name": {
        "en": "PagSeguro"
      },
      "description": {
        "en": "PagSeguro is an online Payment Solution, leader in the Brazilian market."
      }
    },
    {
      "code": "qiwi",
      "vendor": "qiwi",
      "category": "digital_wallet",
      "countries": [
        "RW"
      ],
      "name": {
        "en": "VISA QIWI Wallet",
        "ru": "VISA QIWI Кошелек",
        "uk": "VISA QIWI Гаманець"
      },
      "description": {
        "en": "Qiwi Wallet is an electronic wallet system co-branded with Visa."
      }
    },
    {
      "code": "onecard",
      "vendor": "onecard",
      "category": "digital_wallet",
      "countries": [
        "DZ",
        "CA",
        "ID",
        "LB",
        "MY",
        "MA",
        "NA",
        "SD",
        "TR",
        "UA",
        "YE"
      ],
      "name": {
        "en": "OneCard"
      },
      "description": {
        "en": "Onecard is one of the popular online payment solutions for the Middle East. Onecard enables consumers to pay using the Onecard app which contains preloaded money, topped up by credit card, Ukash, cash or paypal."
      }
    },
    {
      "code": "mobikwik",
      "vendor": "mobikwik",
      "category": "digital_wallet",
      "countries": [
        "IN"
      ],
      "name": {
        "en": "MobiKwik"
      },
      "description": {
        "en": "Mobikwik is India’s fastest growing mobile wallet solution. Mobikwik can be used for online and in-app purchases, mobile top-ups and bill payments (utilities, insurance). Already over 5 million Indian consumers use the Mobikwik wallet. "
      }
    },
    {
      "code": "payfastwallet",
      "vendor": "payfastwallet",
      "category": "digital_wallet",
      "name": {
        "en": "Payfast Wallet",
        "ru": "Payfast Кошелек",
        "uk": "Payfast Гаманець"
      },
      "description": {
        "en": "Payfast Wallet is the digital wallet service by PayFast. PayFast Wallet users are able to checkout using an virtual wallet."
      }
    },
  {
    "code": "tenpay",
    "vendor": "tenpay",
    "category": "digital_wallet",
    "name": {
      "en": "Tenpay"
    },
    "description": {
      "en": "Tenpay is a major Chinese payments solution enabling Chinese consumers to pay online and cross-border. Tenpay is similar to PayPal and allows for payments between persons and businesses. Tenpay wallets can be topped up with cash, (e-)bank transfers and stored credit or debit cards."
    }
  },
  {
    "code": "abaqoos",
    "vendor": "abaqoos",
    "category": "digital_wallet",
    "name": {
      "en": "Abaqoos"
    },
    "description": {
      "en": "Abaqoos is a non-bank card based “virtual wallet” intended for use on the Internet, on mobile phones and with other digital channels. Abaqoos users can preload their wallet or pay directly from their bank account."
    }
  },
  {
    "code": "masterpass",
    "vendor": "masterpass",
    "category": "digital_wallet",
    "countries": [
      "AU",
      "UM",
      "CA",
      "IT",
      "AE"
    ],
    "name": {
      "en": "Masterpass"
    },
    "description": {
      "en": "MasterPass is the digital wallet from MasterCard. This electronic purse allows consumers to pay online using pre-registered credit or debit cards and personal shipping address information."
    }
  },
  {
    "code": "googlewallet",
    "category": "digital_wallet",
    "name": {
      "en": "Google Wallet",
      "ru": "Google Кошелек",
      "uk": "Google Гаманець"
    }
  },
  {
    "code": "epayua",
    "category": "digital_wallet",
    "name": {
      "en": "E-Pay"
    }
  },
  {
    "code": "rbkmoney",
    "category": "digital_wallet",
    "name": {
      "en": "RBK Money"
    }
  },
  {
    "code": "mminvoicing",
    "category": "digital_wallet",
    "name": {
      "en": "MM Invoicing"
    }
  },
  {
    "code": "sberbank",
    "category": "bank_transfers",
    "name": {
      "en": "SberBank",
      "ru": "Сбербанк",
      "uk": "Сбербанк"
    }
  },
  {
    "code": "banktransfer",
    "category": "bank_transfers",
    "name": {
      "en": "Bank transfer"
    }
  },
  {
    "code": "privatbank",
    "category": "bank_transfers",
    "name": {
      "en": "Privatbank",
      "ru": "Приватбанк",
      "uk": "Приватбанк"
    }
  },
  {
    "code": "postovabanka",
    "vendor": "postovabanka",
    "category": "internet_banking",
    "countries": [
      "SK"
    ],
    "name": {
      "en": "Postová Banka"
    },
    "description": {
      "en": "Poštová banka in Slovakia enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "cash",
    "category": "alternative",
    "name": {
      "en": "Cash",
      "ru": "Наличные",
      "uk": "Готівка"
    }
  },
  {
    "code": "ecoineu",
    "category": "alternative",
    "name": {
      "en": "Ecoin.eu"
    }
  },
  {
    "code": "cellularworld",
    "category": "mobile_carrier_billing",
    "name": {
      "en": "Cellular World"
    }
  },
  {
    "code": "barzahlen",
    "vendor": "barzahlen",
    "category": "invoice_payment",
    "countries": [
      "DE"
    ],
    "name": {
      "en": "Barzahlen"
    },
    "description": {
      "en": "Barzahlen offers cash payment solutions to online shops and a secure, transparent payment method to customers in Germany. "
    }
  },
  {
    "code": "fastcheckoutmultisafepay",
    "vendor": "fastcheckoutmultisafepay",
    "category": "digital_wallet",
    "countries": [
      "AX",
      "AL",
      "AD",
      "AU",
      "BY",
      "BE",
      "BA",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FO",
      "FJ",
      "FR",
      "DE",
      "GI",
      "GR",
      "GG",
      "HU",
      "IS",
      "IM",
      "IT",
      "JE",
      "LV",
      "LI",
      "LT",
      "LU",
      "ML",
      "MD",
      "MC",
      "ME",
      "NL",
      "NO",
      "PT",
      "RO",
      "SM",
      "RS",
      "SK",
      "ES",
      "SJ",
      "SE",
      "CH",
      "RW",
      "AE"
    ],
    "name": {
      "en": "MultiSafepay"
    },
    "description": {
      "en": "Fastcheckout is the online payment method which enables online shoppers to easily checkout on online and mobile devices. Shoppers can choose their preferred payment method and pay with simply an email address and a password."
    }
  },
  {
    "code": "gcashwallet",
    "vendor": "gcashwallet",
    "category": "digital_wallet",
    "countries": [
      "PH"
    ],
    "name": {
      "en": "GCASH"
    },
    "description": {
      "en": "GCASH is a digital wallet which allows its users to pay online through virtual cards and through an virtual account balance."
    }
  },
  {
    "code": "acceptgiro",
    "vendor": "acceptgiro",
    "category": "invoice_payment",
    "countries": [
      "NL"
    ],
    "name": {
      "en": "Acceptgiro"
    },
    "description": {
      "en": "The Acceptgiro credit transfer system is a well-known Dutch payment product, providing a flexible and straightforward way for businesses to ensure tha"
    }
  },
  {
    "code": "mypaywizard",
    "vendor": "mypaywizard",
    "category": "digital_wallet",
    "name": {
      "en": "MyPayWizard"
    },
    "description": {
      "en": "PayWizard is an eWallet or Digital Wallet: consumers can pay using their credit card stored in their secure PayWizard wallet for media, content purchases and subscription based billings."
    }
  },
  {
    "code": "walletone",
    "category": "digital_wallet",
    "name": {
      "en": "WalletOne"
    }
  },
  {
    "code": "russianpost",
    "category": "cash_on_delivery",
    "name": {
      "en": "Russian Post",
      "ru": "Почта Росии",
      "uk": "Пошта Росії"
    }
  },
  {
    "code": "privat24",
    "category": "internet_banking",
    "name": {
      "en": "Privat24",
      "ru": "Приват24",
      "uk": "Приват24"
    }
  },
  {
    "code": "wupay",
    "vendor": "wupay",
    "category": "invoice_payment",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "WU Pay"
    },
    "description": {
      "en": "WU Pay (formerly eBillme) is an online payment option, which allows shoppers in the U.S. to pay for online purchases from their existing bank accounts or in cash at Western Union Agent locations."
    }
  },
  {
    "code": "liqpay_wallet",
    "category": "digital_wallet",
    "name": {
      "en": "LiqPay wallet",
      "ru": "LiqPay кошелек",
      "uk": "LiqPay гаманець"
    }
  },
  {
    "code": "directdebit",
    "vendor": "directdebit",
    "category": "direct_debit",
    "name": {
      "en": "Direct Debit"
    },
    "description": {
      "en": "A direct debit is a transaction whereby funds are withdrawn from the customer's bank account. When a shopper selects the direct debit payment option upon checkout, the merchant is allowed to charge the purchase amount and collect it from the shopper's bank account."
    }
  },
  {
    "code": "payd",
    "vendor": "payd",
    "category": "payment_card",
    "name": {
      "en": "payD"
    },
    "description": {
      "en": "payD - a South-African online payment method - allows shoppers to pay on the web using their PIN-based credit or debit card and mobile phone."
    }
  },
  {
    "code": "futurepay",
    "vendor": "futurepay",
    "category": "invoice_payment",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "FuturePay"
    },
    "description": {
      "en": "FuturePay is a payment option that enables consumers to shop online without a credit card. Shoppers simply put purchases on a FuturePay tab, making it easy to buy now and pay later."
    }
  },
  {
    "code": "paynearme",
    "vendor": "paynearme",
    "category": "invoice_payment",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "PayNearMe"
    },
    "description": {
      "en": "PayNearMe is the cash transaction network that lets consumers use cash to make online purchases. This cash payment method is only available for the US market."
    }
  },
  {
    "code": "bank_card",
    "category": "payment_card",
    "name": {
      "en": "Card",
      "ru": "Карта",
      "uk": "Карта"
    }
  },
  {
    "code": "payment_card",
    "category": "payment_card",
    "name": {
      "en": "Payment card",
      "ru": "Платежная карта",
      "uk": "Платіжна карта"
    }
  },
  {
    "code": "payment_card_email",
    "category": "payment_card",
    "name": {
      "en": "Payment card email",
      "ru": "Платежная email карта",
      "uk": "Платіжна email карта"
    }
  },
  {
    "code": "payment_card_token",
    "category": "payment_card",
    "name": {
      "en": "Payment card by token",
      "ru": "Платежная карта по токену",
      "uk": "Платіжна карта по токену"
    }
  },
  {
    "code": "liqpay",
    "category": "alternative",
    "name": {
      "en": "LiqPay"
    }
  },
  {
    "code": "vtb24",
    "vendor": "vtb24",
    "category": "internet_banking",
    "name": {
      "en": "VTB24",
      "ru": "ВТБ24",
      "uk": "ВТБ24"
    }
  },
  {
    "code": "account2account",
    "vendor": "account2account",
    "category": "internet_banking",
    "countries": [
      "AU",
      "NZ"
    ],
    "name": {
      "en": "account2account"
    },
    "description": {
      "en": "Account2Account offers an alternative to accepting credit cards online. It is designed for merchants to accept online payments directly into their bank account in real time."
    }
  },
  {
    "code": "yota",
    "category": "alternative",
    "name": {
      "en": "Yota",
      "ru": "Yota",
      "uk": "Yota"
    }
  },
  {
    "code": "belfiusdirectnet",
    "vendor": "belfiusdirectnet",
    "category": "internet_banking",
    "countries": [
      "BE"
    ],
    "name": {
      "en": "Belfius DirectNet"
    },
    "description": {
      "en": "Belfius Direct Net is an online banking solution from Belfius, a leading bank in Belgium."
    }
  },
  {
    "code": "mazooma",
    "vendor": "mazooma",
    "category": "internet_banking",
    "name": {
      "en": "Mazooma"
    },
    "description": {
      "en": "Mazooma is a payment solution for online commerce in the U.S., connecting online shoppers directly to their online bank account for a safe checkout for both consumer and merchant."
    }
  },
  {
    "code": "interac",
    "vendor": "interac",
    "category": "internet_banking",
    "countries": [
      "CA"
    ],
    "name": {
      "en": "Interac Online"
    },
    "description": {
      "en": "INTERAC Online allows Canadian shoppers to pay for goods and services online, directly from their trusted online bank environment. Merchants benefit from secure and immediate debit payments with relatively low transaction costs."
    }
  },
  {
    "code": "payeer",
    "category": "alternative",
    "name": {
      "en": "Payeer"
    }
  },
  {
    "code": "interkassa",
    "category": "internet_banking",
    "name": {
      "en": "Interkassa",
      "ru": "Интеркасса",
      "uk": "Інтеркасса"
    }
  },
  {
    "code": "psbretail",
    "category": "internet_banking",
    "name": {
      "en": "PSB-Retail"
    }
  },
  {
    "code": "epese",
    "category": "internet_banking",
    "name": {
      "en": "Epese"
    }
  },
  {
    "code": "erip",
    "category": "internet_banking",
    "name": {
      "en": "Erip"
    }
  },
  {
    "code": "sberonline",
    "category": "mobile_payment",
    "name": {
      "en": "Sberbank Online",
      "ru": "Сбербанк Онлайн",
      "uk": "Сбербанк Онлайн"
    }
  },
  {
    "code": "viber",
    "category": "mobile_payment",
    "name": {
      "en": "Viber"
    }
  },
  {
    "code": "easypay",
    "category": "mobile_payment",
    "name": {
      "en": "EasyPay"
    }
  },
  {
    "code": "fakturaru",
    "category": "mobile_payment",
    "name": {
      "en": "Faktura"
    }
  },
  {
    "code": "standardbank",
    "category": "invoice_payment",
    "name": {
      "en": "Standart Bank",
      "ru": "Стандарт Банк",
      "uk": "Стандарт Банк"
    }
  },
  {
    "code": "tinkoff",
    "category": "bank_transfer",
    "countries": [
      "UA"
    ],
    "name": {
      "en": "Tinkoff",
      "ru": "Тинькофф",
      "uk": "Тінькофф"
    }
  },
  {
    "code": "santander",
    "vendor": "santander",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "Santander"
    },
    "description": {
      "en": "Santander in Spain supports online bank transfers as payment method for ecommerce purchases. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "bancobrasil",
    "vendor": "bancobrasil",
    "category": "internet_banking",
    "countries": [
      "BR"
    ],
    "name": {
      "en": "Banco do Brasil"
    },
    "description": {
      "en": "Banco do Brasil allow its banking clients to use online banking to complete their online purchases. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "bitcoin_cash",
    "category": "alternative",
    "name": {
      "en": "Bitcoin Cash"
    }
  },
  {
    "code": "ceskasporitelna",
    "vendor": "ceskasporitelna",
    "category": "internet_banking",
    "countries": [
      "CZ"
    ],
    "name": {
      "en": "Ceská Sporitelna"
    },
    "description": {
      "en": "Česká spořitelna enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "osuuspankki",
    "vendor": "osuuspankki",
    "category": "internet_banking",
    "countries": [
      "FJ"
    ],
    "name": {
      "en": "Osuuspankki"
    },
    "description": {
      "en": "Osuuspankki enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "inpay",
    "vendor": "inpay",
    "category": "internet_banking",
    "name": {
      "en": "inpay"
    },
    "description": {
      "en": "Founded in 2007, inpay's vision is to become the preferred provider of real-time online bank payment solutions for internet retailers worldwide. inpay"
    }
  },
  {
    "code": "banklink",
    "vendor": "banklink",
    "category": "internet_banking",
    "countries": [
      "LV"
    ],
    "name": {
      "en": "Bank Link"
    },
    "description": {
      "en": "Bank Link is the safest and the most advanced Internet payment system for online shopping. Payment for online purchases is effected via  Swedbank Internet Banking, system which is the safest and most rapid means of payment and excludes malicious use of the submitted information (paying by settl"
    }
  },
  {
    "code": "svyaznoy",
    "vendor": "svyaznojbank",
    "category": "invoice_payment",
    "name": {
      "en": "Svyaznoy",
      "ru": "Связной",
      "uk": "Связной"
    }
  },
  {
    "code": "usdt",
    "category": "alternative",
    "name": {
      "en": "Tether"
    }
  },
  {
    "code": "ekonto",
    "vendor": "ekonto",
    "category": "internet_banking",
    "countries": [
      "CZ",
      "SK"
    ],
    "name": {
      "en": "eKonto"
    },
    "description": {
      "en": "eKonto is a type of a bank account available through Raiffeisen Bank in the Czech Republic and Slovakia. This type of method of payment is definitely "
    }
  },
  {
    "code": "kbcbetaalknop",
    "vendor": "kbcbetaalknop",
    "category": "internet_banking",
    "countries": [
      "BE"
    ],
    "name": {
      "en": "KBC \/ CBC Online"
    },
    "description": {
      "en": "KBC Online and CBC online is a secure payment system exclusively for clients of KBC and CBC Banks."
    }
  },
  {
    "code": "tatrabanka",
    "vendor": "tatrabanka",
    "category": "internet_banking",
    "countries": [
      "SK"
    ],
    "name": {
      "en": "Tatra Banka"
    },
    "description": {
      "en": "Tatra Banka in Slovakia enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "giropay",
    "vendor": "giropay",
    "category": "internet_banking",
    "countries": [
      "DE"
    ],
    "name": {
      "en": "Giropay"
    },
    "description": {
      "en": "giropay is one of the popular online payment methods in Germany. giropay enables German consumers to pay online using their trusted online banking account. Merchants receive instant confirmation and are guaranteed of payment. "
    }
  },
  {
    "code": "bancodobrasil",
    "vendor": "bancodobrasil",
    "category": "internet_banking",
    "name": {
      "en": "Banco do Brasil"
    }
  },
  {
    "code": "bankinter",
    "vendor": "bankinter",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "Bank Inter"
    },
    "description": {
      "en": "Bank Inter in Spain enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "sebbank",
    "vendor": "sebbank",
    "category": "internet_banking",
    "countries": [
      "EE",
      "LV",
      "LT",
      "SE"
    ],
    "name": {
      "en": "SEB Bank"
    },
    "description": {
      "en": "SEB Bank enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "privatbank_ssk",
    "category": "alternative",
    "countries": [
      "UA"
    ],
    "name": {
      "en": "Privatbank Terminals",
      "ru": "Приватбанк терминали",
      "uk": "Приватбанк термінали"
    }
  },
  {
    "code": "perfectmoney_account",
    "vendor": "perfectmoney",
    "category": "alternative",
    "countries": [
      "UA"
    ],
    "name": {
      "en": "Perfect Money Account"
    }
  },
  {
    "code": "zapp",
    "vendor": "zapp",
    "category": "digital_wallet",
    "name": {
      "en": "Zapp"
    },
    "description": {
      "en": "Zapp is the UK’s leading mobile payment innovation. Zapp allows you to receive instant payments from customers using the simplest mobile enabled checkout process, meaning businesses can sell more whilst keeping costs low. "
    }
  },
  {
    "code": "unistream",
    "category": "bank_transfer",
    "name": {
      "en": "Unistream"
    }
  },
  {
    "code": "perfectmoney_voucher",
    "vendor": "perfectmoney",
    "category": "prepaid_card",
    "countries": [
      "RU",
      "UA"
    ],
    "name": {
      "en": "Perfect Money Voucher",
      "ru": "Perfect Money Ваучер"
    }
  },
  {
    "code": "russian_standart_bank",
    "vendor": "russkijstandart",
    "category": "mobile_payment",
    "name": {
      "en": "Russian Standard Bank",
      "ru": "Русский стандарт",
      "uk": "Російський стандарт"
    }
  },
  {
    "code": "slovenskasporitelna",
    "vendor": "slovenskasporitelna",
    "category": "internet_banking",
    "countries": [
      "SK"
    ],
    "name": {
      "en": "Slovenská Sporitelña"
    },
    "description": {
      "en": "Slovenská Sporitelña in Slovakia enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "handelsbanken",
    "vendor": "handelsbanken",
    "category": "internet_banking",
    "countries": [
      "FJ",
      "SE"
    ],
    "name": {
      "en": "Handelsbanken"
    },
    "description": {
      "en": "Handelsbanken enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "servipag",
    "vendor": "servipag",
    "category": "cash_payment",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Servipag"
    },
    "description": {
      "en": "Servipag is a popular, secure and simple post-pay payment method for online shoppers in Chile. Servipag is an offline cash payment method for online purchases using payment vouchers."
    }
  },
  {
    "code": "kriita2",
    "vendor": "kriita2",
    "category": "invoice_payment",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Kriita AB"
    },
    "description": {
      "en": "Kriita offers a new invoice-based payment solution for egaming operators, which enables smart, convenient and secure deposits from any device. The fou"
    }
  },
  {
    "code": "billsafe",
    "vendor": "billsafe",
    "category": "invoice_payment",
    "countries": [
      "AU",
      "DE"
    ],
    "name": {
      "en": "BillSAFE"
    },
    "description": {
      "en": "BillSAFE alllows merchants to invoice consumers so that they can shop and pay later. BillSAFE is a PayPal Company."
    }
  },
  {
    "code": "farmaciasbenavides",
    "vendor": "farmaciasbenavides",
    "category": "cash_payment",
    "countries": [
      "MX"
    ],
    "name": {
      "en": "Farmacias Benavides"
    }
  },
  {
    "code": "minitix",
    "vendor": "minitix",
    "category": "digital_wallet",
    "name": {
      "en": "Minitix"
    },
    "description": {
      "en": "Minitix is a digital wallet or electronic purse - only available to Dutch online shoppers - that allows its users to make online or mobile purchases up to 150 euro. Minitix can be accepted in online shops and for in-app payment."
    }
  },
  {
    "code": "yandexmoney",
    "vendor": "yandex",
    "category": "digital_wallet",
    "name": {
      "en": "Yandex.Money",
      "ru": "Яндекс.Деньги",
      "uk": "Yandex.Money"
    },
    "description": {
      "en": "Yandex.Money is the largest electronic payment service in Russia, offering easy, safe, and reliable methods of paying and accepting payments online from bank cards, e-wallets, mobile phone balances, and in cash via payment kiosks.                   "
    }
  },
  {
    "code": "ingpl",
    "category": "alternative",
    "name": {
      "en": "ING Bank(Poland)",
      "ru": "ИНГ Банк(Польша)",
      "uk": "ІНГ Банк(Польща)"
    }
  },
  {
    "code": "clickandbuy",
    "vendor": "clickandbuy",
    "category": "digital_wallet",
    "name": {
      "en": "ClickandBuy"
    },
    "description": {
      "en": "ClickandBuy is an eWallet or Digital Wallet enabling users to pay online using their securely stored credit or debit cards or pay using local bank transfers. ClickandBuy has a community of over 14 million customers."
    }
  },
  {
    "code": "vmevisa",
    "vendor": "vmevisa",
    "category": "digital_wallet",
    "countries": [
      "BE",
      "FR",
      "AE"
    ],
    "name": {
      "en": "V.me by Visa"
    },
    "description": {
      "en": "V.me simplifies the payment experience for online or in-app shoppers. "
    }
  },
  {
    "code": "alipay",
    "vendor": "alipay",
    "category": "digital_wallet",
    "name": {
      "en": "Alipay.com"
    },
    "description": {
      "en": "Alipay is China's leading third-party online payment solution, providing an easy, safe and secure way for millions of individuals and businesses to ma"
    }
  },
  {
    "code": "neteller",
    "vendor": "neteller",
    "category": "digital_wallet",
    "name": {
      "en": "NETELLER"
    },
    "description": {
      "en": "NETELLER is a digital wallet or electronic purse that allows consumers to pay online using a pre-loaded value securely stored in a virtual wallet. Consumers can preload their NETELLER wallet by using a credit or debit card or other alternative payment method."
    }
  },
  {
    "code": "paysbuy",
    "vendor": "paysbuy",
    "category": "digital_wallet",
    "countries": [
      "TH"
    ],
    "name": {
      "en": "PAYSBUY"
    },
    "description": {
      "en": "PAYSBUY is an online payment service that allows member to instantly and securely send money to anyone with an email address and a bank account in Thailand."
    }
  },
  {
    "code": "payzippy",
    "vendor": "payzippy",
    "category": "digital_wallet",
    "name": {
      "en": "PayZippy"
    },
    "description": {
      "en": "PayZippy, built by Flipkart, is a fresh new approach to online\/mobile payments with a vision to make digital payments happen in India!"
    }
  },
  {
    "code": "vvvgiftcard",
    "vendor": "vvvgiftcard",
    "category": "prepaid_voucher",
    "countries": [
      "NL"
    ],
    "name": {
      "en": "VVV Giftcard"
    },
    "description": {
      "en": "VVV Giftcard, the online gift card for the Dutch E-commerce market"
    }
  },
  {
    "code": "pagoefectivo",
    "vendor": "pagoefectivo",
    "category": "cash_payment",
    "countries": [
      "PE"
    ],
    "name": {
      "en": "PagoEfectivo"
    },
    "description": {
      "en": "PagoEfectivo is an online payment method in Peru that allows online shoppers to pay through online banking or in cash at over 40,000 payment centers nationwide."
    }
  },
  {
    "code": "rapipago",
    "vendor": "rapipago",
    "category": "cash_payment",
    "countries": [
      "AR"
    ],
    "name": {
      "en": "Rapipago"
    },
    "description": {
      "en": "Rapipago from Argentina is an offline payment method used for online purchases. Shoppers buy their goods and services online and pay offline at one the 6,000+ Rapipago payment locations."
    }
  },
  {
    "code": "efecty",
    "vendor": "efecty",
    "category": "cash_payment",
    "countries": [
      "CO"
    ],
    "name": {
      "en": "Efecty"
    }
  },
  {
    "code": "moneta",
    "vendor": "moneta",
    "category": "digital_wallet",
    "name": {
      "en": "Moneta"
    },
    "description": {
      "en": "Moneta.ru is a Russian e-wallet enabling its users to shop and pay safely online. Moneta wallet users are free to open an account in Russian Rubles, US Dollars and Euros and can preload their wallet with major card and alternative payment methods."
    }
  },
  {
    "code": "mercadopago",
    "vendor": "mercadopago",
    "category": "digital_wallet",
    "countries": [
      "AR",
      "BR",
      "CL",
      "CO",
      "MX",
      "VE"
    ],
    "name": {
      "en": "MercadoPago"
    },
    "description": {
      "en": "MercadoPago is the leading online payment solution in Latin America. It has operations in Argentina, Brazil, Chile, Colombia, Mexico and Venezuela."
    }
  },
  {
    "code": "toditocash",
    "vendor": "toditocash",
    "category": "digital_wallet",
    "countries": [
      "MX"
    ],
    "name": {
      "en": "Todito Cash"
    },
    "description": {
      "en": "Change the way you make your online payments. Pay in a wide variety of merchants like: casinos, videogames, e-commerce, movie tickets, cellphone prepaid services\/minutes and more."
    }
  },
  {
    "code": "boletobancariopay",
    "vendor": "boletobancariopay",
    "category": "invoice_payment",
    "name": {
      "en": "Boleto Bancario"
    },
    "description": {
      "en": "Boleto Bancário is the preferred Brazilian payment method that acts as a 'pro-forma invoice'. Brazilian consumers can complete their online purchases by paying cash at physical stores or use internet banking.  "
    }
  },
  {
    "code": "dokuwallet",
    "vendor": "dokuwallet",
    "category": "digital_wallet",
    "name": {
      "en": "DOKU Wallet"
    },
    "description": {
      "en": "DOKU wallet acts as a virtual wallet and can be used by Indonesian shoppers only. DOKU wallet users can purchase goods and services online by using their topped up value. Top-ups can be done via credit cards, online bank transfer or cash payment. "
    }
  },
  {
    "code": "skrill",
    "vendor": "skrill",
    "category": "digital_wallet",
    "name": {
      "en": "Skrill Wallet"
    },
    "description": {
      "en": "Skrill is the easy way to make safe and fast online payments internationally, with the highest security standards."
    }
  },
  {
    "code": "paypal",
    "vendor": "paypal",
    "category": "digital_wallet",
    "name": {
      "en": "PayPal"
    },
    "description": {
      "en": "PayPal is the online payment method that enables people to send money and to shop online without sharing financial information. Shoppers can pay from their PayPal preloaded balance, directly from their bank account or stored credit cards like MasterCard and Visa."
    }
  },
  {
    "code": "billink",
    "vendor": "billink",
    "category": "invoice_payment",
    "countries": [
      "NL"
    ],
    "name": {
      "en": "Billink"
    },
    "description": {
      "en": "Billink enables Dutch consumers to shop online and pay later. Billink absorbes the risk for non-payment for merchants and increases conversion by simplifying checkout on any device."
    }
  },
  {
    "code": "247billpay",
    "vendor": "247billpay",
    "category": "digital_wallet",
    "name": {
      "en": "24-7 Bill Pay"
    }
  },
  {
    "code": "piastrix",
    "vendor": "piastrix",
    "category": "digital_wallet",
    "name": {
      "en": "Piastrix"
    }
  },
  {
    "code": "afterpay",
    "vendor": "afterpay",
    "category": "invoice_payment",
    "countries": [
      "BE",
      "FR",
      "DE",
      "NL",
      "NO",
      "SE"
    ],
    "name": {
      "en": "AfterPay"
    },
    "description": {
      "en": "AfterPay is a Dutch company which develops and provides innovative post-payment methods for web shops and third parties offering online payment. After"
    }
  },
  {
    "code": "paybybill",
    "vendor": "paybybill",
    "category": "invoice_payment",
    "countries": [
      "DK",
      "FJ",
      "DE",
      "NL",
      "NO",
      "SE"
    ],
    "name": {
      "en": "PayByBill"
    },
    "description": {
      "en": "PayByBill is a online payment solution that allows consumers to pay after delivery of the goods. PayByBill enables merchants to achieve higher conversion rates by simplified checkout on any shopping device and hands over the risk of non-payment to PayByBill."
    }
  },
  {
    "code": "acceptemail",
    "vendor": "acceptemail",
    "category": "invoice_payment",
    "countries": [
      "AX",
      "AL",
      "AD",
      "AU",
      "BY",
      "BE",
      "BA",
      "BG",
      "HR",
      "CZ",
      "DK",
      "EE",
      "FO",
      "FJ",
      "FR",
      "DE",
      "GI",
      "GR",
      "GG",
      "HU",
      "IS",
      "IM",
      "IT",
      "JE",
      "LV",
      "LI",
      "LT",
      "LU",
      "ML",
      "MD",
      "MC",
      "ME",
      "NL",
      "NO",
      "PT",
      "RO",
      "SM",
      "RS",
      "SK",
      "ZA",
      "ES",
      "SJ",
      "SE",
      "CH",
      "RW",
      "AE",
      "UM"
    ],
    "name": {
      "en": "AcceptEmail"
    },
    "description": {
      "en": "From now on, your bills will be sent directly to your inbox on your computer, tablet or mobile. No more deposit transfers that end up in a drawer, no more losing bills or logging in on supplier sites. AcceptEmail makes paying bills easy!"
    }
  },
  {
    "code": "7eleven",
    "vendor": "7eleven",
    "category": "cash_payment",
    "countries": [
      "MX"
    ],
    "name": {
      "en": "7-Eleven"
    }
  },
  {
    "code": "klarna",
    "vendor": "klarna",
    "category": "invoice_payment",
    "countries": [
      "AU",
      "DK",
      "FJ",
      "DE",
      "NL",
      "NO",
      "SE",
      "AE"
    ],
    "name": {
      "en": "Klarna"
    },
    "description": {
      "en": "Klarna allows shoppers to buy now and pay later. And Merchants to increase their conversion rate with optimised user experience for m-commerce as well as state of the art payment options."
    }
  },
  {
    "code": "sencillito",
    "vendor": "sencillito",
    "category": "cash_payment",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Sencillito"
    }
  },
  {
    "code": "billpay",
    "vendor": "billpay",
    "category": "invoice_payment",
    "countries": [
      "AU",
      "DE",
      "NL",
      "CH"
    ],
    "name": {
      "en": "BIllpay"
    },
    "description": {
      "en": "Billpay is a payment solution that enables shoppers to buy now and pay later. Billpay is available to customers and merchants with operations in Germany, Austria, Switzerland and the Netherlands.                  "
    }
  },
  {
    "code": "kwixo",
    "vendor": "kwixo",
    "category": "digital_wallet",
    "countries": [
      "FR"
    ],
    "name": {
      "en": "Kwixo"
    },
    "description": {
      "en": "Kwixo is a digital wallet enabling French consumers to pay online by using their electronic purse. The Kwixo e-Wallet allows consumers to transfer money from their bank account by accessing it via login (email address or phone number) and password."
    }
  },
  {
    "code": "mpayaisthailand",
    "vendor": "mpayaisthailand",
    "category": "digital_wallet",
    "name": {
      "en": "mPAY"
    },
    "description": {
      "en": "mPAY is a mobile wallet solution in Thailand that allows its wallet users to pay with their digitally stored MasterCard credit card."
    }
  },
  {
    "code": "smartmoney",
    "vendor": "smartmoney",
    "category": "digital_wallet",
    "countries": [
      "PH"
    ],
    "name": {
      "en": "Smart Money"
    },
    "description": {
      "en": "SMART Money is an electronic wallet allowing to pay for bills and money transfers using a SMART Mobile phone."
    }
  },
  {
    "code": "justpayewallet",
    "vendor": "justpayewallet",
    "category": "digital_wallet",
    "countries": [
      "TH"
    ],
    "name": {
      "en": "TOT Just Pay"
    },
    "description": {
      "en": "TOT Just Pay is an e-wallet that can be used for bill and e-commerce payments."
    }
  },
  {
    "code": "zimpler",
    "vendor": "zimpler",
    "category": "digital_wallet",
    "countries": [
      "FJ",
      "SE"
    ],
    "name": {
      "en": "Zimpler"
    },
    "description": {
      "en": "Zimpler is a Swedish fintech company focused on simplifying mobile payments. "
    }
  },
  {
    "code": "dwolla",
    "vendor": "dwolla",
    "category": "digital_wallet",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "Dwolla"
    },
    "description": {
      "en": "Dwolla was inspired by and created for the web. It is dedicated to providing anyone in the U.S. with an internet connection the ability to safely send money to friends or businesses. The network removes the traditional threat of identity fraud, sensitive financial data, and third-party processors."
    }
  },
  {
    "code": "bancnetdirectdebits",
    "vendor": "bancnetdirectdebits",
    "category": "direct_debit",
    "countries": [
      "PH"
    ],
    "name": {
      "en": "BancNet"
    },
    "description": {
      "en": "BancNet cardholders can make online payment with their ATM Card. "
    }
  },
  {
    "code": "primabanka",
    "vendor": "primabanka",
    "category": "internet_banking",
    "countries": [
      "SK"
    ],
    "name": {
      "en": "Prima Banka",
      "ru": "Прима Банк",
      "uk": "Пріма Банк"
    },
    "description": {
      "en": "Prima Banka enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "pagorapido",
    "vendor": "pagorapido",
    "category": "internet_banking",
    "name": {
      "en": "PagoRapido"
    },
    "description": {
      "en": "PagoRapido is a popular Italian online payment method enabling Italian consumers to make online payments directly from their bank account. PagoRapido payments are guaranteed to merchants."
    }
  },
  {
    "code": "przelewy24",
    "vendor": "przelewy24",
    "category": "internet_banking",
    "name": {
      "en": "Przelewy24"
    },
    "description": {
      "en": "Przelewy24 is a secure and fast online bank transfer service linked to all the major banks in Poland. To start using Przelewy24 you must have access t"
    }
  },
  {
    "code": "mybank2",
    "vendor": "mybank2",
    "category": "internet_banking",
    "countries": [
      "IT"
    ],
    "name": {
      "en": "MyBank"
    },
    "description": {
      "en": "MyBank is the pan-European e-payments solution that enables shoppers to pay using their trusted home banking environment or give merchants permission to debit their bank account."
    }
  },
  {
    "code": "banrisulbanricompras",
    "vendor": "banrisulbanricompras",
    "category": "internet_banking",
    "name": {
      "en": "Banrisul Banricompras"
    },
    "description": {
      "en": "Banrisul Banricompras is the online bank transfer payment solution of Banrisul, one of the leading banks in Brazil. "
    }
  },
  {
    "code": "eps",
    "vendor": "eps",
    "category": "internet_banking",
    "name": {
      "en": "eps e-payment"
    },
    "description": {
      "en": "The eps e-payment standard is the interface into online payment systems of Austrian Banks for irrevocable payments, adopted by Internet-Shops as well"
    }
  },
  {
    "code": "bangkokbanknetbanking",
    "vendor": "bangkokbanknetbanking",
    "category": "internet_banking",
    "countries": [
      "MM",
      "PH",
      "TH"
    ],
    "name": {
      "en": "Bangkok Bank netbanking"
    },
    "description": {
      "en": "Bangkok Bank netbanking allows its banking customers to use its internet banking application for online purchases."
    }
  },
  {
    "code": "skandiabanken",
    "vendor": "skandiabanken",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Skandiabanken"
    },
    "description": {
      "en": "Skandiabanken enables its banking customers to use online bank transfers for their online purchases. Merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "cimbclicksinternetbanking",
    "vendor": "cimbclicksinternetbanking",
    "category": "internet_banking",
    "countries": [
      "ID",
      "MY",
      "SG",
      "TH"
    ],
    "name": {
      "en": "CIMBClicks"
    },
    "description": {
      "en": "CIMB Clicks is an internet banking service allowing shoppers to pay online through their home banking application. "
    }
  },
  {
    "code": "unitedoverseasbankuobnetbanking",
    "vendor": "unitedoverseasbankuobnetbanking",
    "category": "internet_banking",
    "countries": [
      "MY",
      "TH"
    ],
    "name": {
      "en": "UOB netbanking"
    },
    "description": {
      "en": "United Overseas Bank netbanking allows its banking customers to use its internet banking application for online purchases."
    }
  },
  {
    "code": "creditagricole",
    "vendor": "creditagricole",
    "category": "internet_banking",
    "countries": [
      "AX"
    ],
    "name": {
      "en": "Crédit Agricole"
    },
    "description": {
      "en": "Crédit Agricole enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "forexbank",
    "vendor": "forexbank",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Forex Bank"
    },
    "description": {
      "en": "Forex Bank in Sweden supports online bank transfers as payment method for ecommerce purchases. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "bbva",
    "vendor": "bbva",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "BBVA"
    },
    "description": {
      "en": "BBVA, second biggest Bank in Spain, enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "oppohjola",
    "vendor": "oppohjola",
    "category": "internet_banking",
    "countries": [
      "FJ"
    ],
    "name": {
      "en": "OP-Pohjola"
    },
    "description": {
      "en": "OP-Pohjola enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "danskebank",
    "vendor": "danskebank",
    "category": "internet_banking",
    "countries": [
      "DK",
      "EE",
      "FJ",
      "SE"
    ],
    "name": {
      "en": "Danske Bank"
    },
    "description": {
      "en": "Danske Bank enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "bdo",
    "vendor": "bdo",
    "category": "internet_banking",
    "countries": [
      "PH"
    ],
    "name": {
      "en": "BDO Over-The-Counter"
    }
  },
  {
    "code": "bankofchinanetbanking",
    "vendor": "bankofchinanetbanking",
    "category": "internet_banking",
    "countries": [
      "CL",
      "MO"
    ],
    "name": {
      "en": "Bank of China netbanking"
    },
    "description": {
      "en": "Bank of China netbanking allows its banking customers to use its internet banking application for online purchases."
    }
  },
  {
    "code": "sofortbanking",
    "vendor": "sofortbanking",
    "category": "internet_banking",
    "countries": [
      "AX",
      "AU",
      "BE",
      "DE",
      "IT",
      "NL",
      "ES",
      "CH",
      "AE"
    ],
    "name": {
      "en": "SOFORT, a Klarna Group Company"
    },
    "description": {
      "en": "SOFORT, a Klarna Group Company, is a Pan-European direct online payment method. Customers simply pay using their familiar online banking details with a maximum level of security. Thanks to the real-time transaction notification it is possible to dispatch the order immediately."
    }
  },
  {
    "code": "thaimilitarybanktmbnetbanking",
    "vendor": "thaimilitarybanktmbnetbanking",
    "category": "internet_banking",
    "countries": [
      "TH"
    ],
    "name": {
      "en": "Thai Military Bank"
    },
    "description": {
      "en": "Thai Military Bank netbanking allows its banking customers to use its home banking application for online purchases."
    }
  },
  {
    "code": "bankzachodniwbk",
    "vendor": "bankzachodniwbk",
    "category": "internet_banking",
    "countries": [
      "AX"
    ],
    "name": {
      "en": "Bank Zochadni WBK"
    },
    "description": {
      "en": "Bank Zochadni in Poland enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "swedbank",
    "vendor": "swedbank",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Swedbank"
    },
    "description": {
      "en": "Swedbank (Sweden) enables its banking customers to use online bank transfers for their online purchases. Merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "swift",
    "vendor": "swift",
    "category": "bank_transfer",
    "countries": [
      "AO",
      "BF",
      "BI",
      "BJ",
      "BW",
      "CD",
      "CF",
      "CG",
      "CI",
      "CM",
      "CV",
      "DJ",
      "DZ",
      "EG",
      "EH",
      "ER",
      "ET",
      "GA",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GW",
      "IO",
      "KE",
      "KM",
      "LR",
      "LS",
      "LY",
      "MA",
      "MG",
      "ML",
      "MR",
      "MU",
      "MW",
      "MZ",
      "NA",
      "NE",
      "NG",
      "RE",
      "RW",
      "SC",
      "SD",
      "SH",
      "SL",
      "SN",
      "SO",
      "SS",
      "ST",
      "SZ",
      "TD",
      "TF",
      "TG",
      "TN",
      "TZ",
      "UG",
      "YT",
      "ZA",
      "ZM",
      "ZW",
      "AE",
      "AF",
      "AM",
      "AZ",
      "BD",
      "BH",
      "BN",
      "BT",
      "CN",
      "GE",
      "HK",
      "ID",
      "IL",
      "IN",
      "IQ",
      "IR",
      "JO",
      "JP",
      "KG",
      "KH",
      "KP",
      "KR",
      "KW",
      "KZ",
      "LA",
      "LB",
      "LK",
      "MM",
      "MN",
      "MO",
      "MV",
      "MY",
      "NP",
      "OM",
      "PH",
      "PK",
      "PS",
      "QA",
      "SA",
      "SG",
      "SY",
      "TH",
      "TJ",
      "TL",
      "TM",
      "TR",
      "TW",
      "UZ",
      "VN",
      "YE",
      "AG",
      "AI",
      "AW",
      "BB",
      "BL",
      "BQ",
      "BS",
      "CU",
      "CW",
      "DM",
      "DO",
      "GD",
      "GP",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "PR",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG",
      "VI",
      "BM",
      "CA",
      "GL",
      "PM",
      "UM",
      "US",
      "AR",
      "BO",
      "BR",
      "CL",
      "CO",
      "EC",
      "FK",
      "GF",
      "GS",
      "GY",
      "PE",
      "PY",
      "SR",
      "UY",
      "VE",
      "BZ",
      "CR",
      "GT",
      "HN",
      "MX",
      "NI",
      "PA",
      "SV",
      "AS",
      "AS",
      "AU",
      "AU",
      "CC",
      "CC",
      "CK",
      "CK",
      "CX",
      "CX",
      "FJ",
      "FJ",
      "FM",
      "FM",
      "GU",
      "GU",
      "KI",
      "KI",
      "MH",
      "MH",
      "MP",
      "MP",
      "NC",
      "NC",
      "NF",
      "NF",
      "NR",
      "NR",
      "NU",
      "NU",
      "NZ",
      "NZ",
      "PF",
      "PF",
      "PG",
      "PG",
      "PN",
      "PN",
      "PW",
      "PW",
      "SB",
      "SB",
      "TK",
      "TK",
      "TO",
      "TO",
      "TV",
      "TV",
      "VU",
      "VU",
      "WF",
      "WF",
      "WS",
      "AD",
      "AL",
      "AT",
      "AX",
      "BA",
      "BE",
      "BG",
      "BY",
      "CH",
      "CY",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "FI",
      "FO",
      "FR",
      "GB",
      "GG",
      "GI",
      "GR",
      "HR",
      "HU",
      "IE",
      "IM",
      "IS",
      "IT",
      "JE",
      "LI",
      "LT",
      "LU",
      "LV",
      "MC",
      "MD",
      "ME",
      "MK",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "RS",
      "RU",
      "SE",
      "SI",
      "SJ",
      "SK",
      "SM",
      "UA",
      "VA",
      "XK",
      "AQ",
      "BV",
      "HM"
    ],
    "name": {
      "en": "SWIFT"
    },
    "description": {
      "en": "International bank trasfer"
    }
  },
  {
    "code": "tapiola",
    "vendor": "tapiola",
    "category": "internet_banking",
    "countries": [
      "FJ"
    ],
    "name": {
      "en": "Tapiola"
    },
    "description": {
      "en": "Tapiola bank enables their customers to use online banking to complete their internet purchases. Consumers are redirected to their trusted bank environment to initiate an online bank transfer."
    }
  },
  {
    "code": "multibank",
    "vendor": "multibank",
    "category": "internet_banking",
    "countries": [
      "AX"
    ],
    "name": {
      "en": "MultiTransfer"
    },
    "description": {
      "en": "MultiTransfer is the name for the online bank transfer service of MultiBank in Poland. MultiTransfer allows online shoppers to pay for online goods and services using their trusted home banking environment."
    }
  },
  {
    "code": "bancopopular",
    "vendor": "bancopopular",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "Banco Popular"
    },
    "description": {
      "en": "Banco Popular in Spain enables its customers to pay for goods and services bought over the internet using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "maybanknetbankingphillipines",
    "vendor": "maybanknetbankingphillipines",
    "category": "internet_banking",
    "countries": [
      "PH"
    ],
    "name": {
      "en": "Maybank netbanking"
    },
    "description": {
      "en": "Maybank netbanking allows its banking customers to use its internet banking application for online purchases."
    }
  },
  {
    "code": "redcompra",
    "vendor": "redcompra",
    "category": "internet_banking",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Red Compra"
    }
  },
  {
    "code": "nordea",
    "vendor": "nordea",
    "category": "internet_banking",
    "countries": [
      "AX",
      "DK",
      "EE",
      "FJ",
      "HU",
      "LV",
      "NO",
      "SE"
    ],
    "name": {
      "en": "Nordea"
    },
    "description": {
      "en": "Nordea enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "raiffeisenbank",
    "vendor": "raiffeisenbank",
    "category": "internet_banking",
    "countries": [
      "BA",
      "BG",
      "CZ",
      "HU"
    ],
    "name": {
      "en": "Raiffeisen Bank",
      "ru": "Райфайзен Банк",
      "uk": "Райфайзен Банк"
    },
    "description": {
      "en": "Raiffeisen Bank enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "postpay",
    "vendor": "postpay",
    "category": "internet_banking",
    "countries": [
      "AU"
    ],
    "name": {
      "en": "PostPay"
    },
    "description": {
      "en": "PostPay is a secure eCommerce solution that links your customer's payment to the delivery of their parcel, giving them the confidence to buy online from you."
    }
  },
  {
    "code": "polipayonline",
    "vendor": "polipayonline",
    "category": "internet_banking",
    "countries": [
      "AU",
      "NZ"
    ],
    "name": {
      "en": "POLi Payments"
    },
    "description": {
      "en": "Internet Banking payments from your Australian & NZ customers"
    }
  },
  {
    "code": "usemyservices",
    "vendor": "usemyservices",
    "category": "internet_banking",
    "name": {
      "en": "UseMyServices"
    },
    "description": {
      "en": "UseMyServices makes it easier for consumers to pay for goods and services online by enabling payments directly from their trusted bank account. Worldwide."
    }
  },
  {
    "code": "ciberpay",
    "vendor": "ciberpay",
    "category": "internet_banking",
    "name": {
      "en": "Ciber Pay"
    },
    "description": {
      "en": "Ciber Pay (Russia) allows online shoppers to pay offline with cash at designated Ciber Pay payment terminals."
    }
  },
  {
    "code": "milleniumbank",
    "vendor": "milleniumbank",
    "category": "internet_banking",
    "countries": [
      "AX"
    ],
    "name": {
      "en": "Millenium Bank"
    },
    "description": {
      "en": "Millennium Bank in Poland enables its banking clients to shop online using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "bankia",
    "vendor": "bankia",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "Bankia"
    },
    "description": {
      "en": "Bankia in Spain enables its online shoppers to pay for goods and services using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "rixty",
    "vendor": "rixty",
    "category": "prepaid_card",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "Rixty"
    },
    "description": {
      "en": "Rixty, a MOL Company, is the global leading cash-based alternative payment platform for online games, virtual goods, and digital content."
    }
  },
  {
    "code": "peela",
    "vendor": "peela",
    "category": "prepaid_card",
    "name": {
      "en": "Peela"
    },
    "description": {
      "en": "Peela is a Brazilian gift card solution that allows consumers to shop and pay online without the need for credit cards or online banking for online purchases."
    }
  },
  {
    "code": "teleingreso",
    "vendor": "teleingreso",
    "category": "prepaid_card",
    "name": {
      "en": "Teleingreso"
    },
    "description": {
      "en": "Teleingreso is a payment method that enables Spanish customers to pay for goods and services online using a variety of offline payment methods including ATM's, post offices and retail outlets."
    }
  },
  {
    "code": "neosurf",
    "vendor": "neosurf",
    "category": "prepaid_card",
    "countries": [
      "DZ",
      "AD",
      "AR",
      "BE",
      "BJ",
      "BR",
      "BG",
      "BF",
      "CM",
      "CA",
      "CF",
      "CL",
      "CO",
      "CG",
      "CY",
      "CZ",
      "FR",
      "PF",
      "GA",
      "DE",
      "GR",
      "GP",
      "IN",
      "IL",
      "IT",
      "LV",
      "LT",
      "MY",
      "MW",
      "ML",
      "MQ",
      "PK",
      "AX",
      "PT",
      "RO",
      "SA",
      "SN",
      "ES",
      "TG",
      "TN",
      "RW",
      "UA",
      "AE"
    ],
    "name": {
      "en": "Neosurf"
    },
    "description": {
      "en": "NEOSURF is a prepaid card (voucher) for online payments"
    }
  },
  {
    "code": "ticketpremium",
    "vendor": "ticketpremium",
    "category": "prepaid_card",
    "countries": [
      "FR"
    ],
    "name": {
      "en": "Ticket Premium"
    },
    "description": {
      "en": "Ticket Premium is a prepaid code that allows customers to make online payments simply and securely on all of TSI's partner sites: e-commerce, poker, sports and horse racing betting, coupled with gaming sites."
    }
  },
  {
    "code": "papaya",
    "vendor": "papaya",
    "category": "prepaid_card",
    "name": {
      "en": "Papaya"
    },
    "description": {
      "en": "The Papaya eWallet is an electronic purse or digital wallet allowing consumers to pay online. Consumers are able to pay with their Papaya wallet if money has been preloaded ('stored value')."
    }
  },
  {
    "code": "postepay",
    "vendor": "postepay",
    "category": "prepaid_card",
    "name": {
      "en": "Postepay"
    },
    "description": {
      "en": "Postepay Cards are electronic prepaid cards which are specifically designed to help Italian online shoppers to securely shop and pay online. They are co-branded with Visa or MasterCard."
    }
  },
  {
    "code": "serve",
    "vendor": "serve",
    "category": "prepaid_card",
    "name": {
      "en": "Serve"
    },
    "description": {
      "en": "Serve is the prepaid debit card by American Express that can also be used for online purchases. The card can be used at any ecommerce shop that accepts American Express."
    }
  },
  {
    "code": "flexepinemoneyvouchers",
    "vendor": "flexepinemoneyvouchers",
    "category": "prepaid_card",
    "countries": [
      "AU",
      "CA"
    ],
    "name": {
      "en": "Flexepin"
    },
    "description": {
      "en": "Flexepin is an online payment option that lets consumers use cash to safely and securely top-up your accounts and pay online."
    }
  },
  {
    "code": "cashu",
    "vendor": "cashu",
    "category": "prepaid_card",
    "countries": [
      "BH",
      "CL",
      "EG",
      "IR",
      "JO",
      "KW",
      "LB",
      "MA",
      "SA",
      "TN",
      "TR",
      "UA",
      "YE"
    ],
    "name": {
      "en": "CASHU"
    },
    "description": {
      "en": "CASHU is the first and largest online payment method in the MENA region, serving nearly 2.3 million consumers with accessible and easy solutions to pay online."
    }
  },
  {
    "code": "paysafecard",
    "vendor": "optimalpayments",
    "category": "prepaid_card",
    "countries": [
      "AR",
      "AU",
      "BE",
      "BG",
      "CA",
      "HR",
      "CY",
      "CZ",
      "DK",
      "FJ",
      "FR",
      "DE",
      "GI",
      "GR",
      "HU",
      "IS",
      "IT",
      "KW",
      "LV",
      "LI",
      "LT",
      "LU",
      "ML",
      "MX",
      "NL",
      "NZ",
      "NO",
      "PE",
      "AX",
      "PT",
      "RO",
      "SK",
      "ES",
      "SE",
      "CH",
      "TR",
      "AE",
      "UM"
    ],
    "name": {
      "en": "Paysafecard"
    },
    "description": {
      "en": "paysafecard is a card that can be purchased in physical outlets. The online shopper receives a card\/voucher - representing the value paid for - with a 16-digit PIN. At a merchant that accepts paysafecard payments, the consumer enters the PIN and the online purchase is completed."
    }
  },
  {
    "code": "ukash",
    "vendor": "ukash",
    "category": "prepaid_card",
    "countries": [
      "AU",
      "CZ",
      "DK",
      "EE",
      "FJ",
      "FR",
      "DE",
      "HU",
      "IS",
      "IT",
      "LV",
      "NO",
      "AX",
      "PT",
      "SK",
      "ZA",
      "ES",
      "SE",
      "TR",
      "AE"
    ],
    "name": {
      "en": "Ukash"
    },
    "description": {
      "en": "Ukash is a popular alternative payment brand, designed to help people use cash in the online world - bringing web retailers and cash consumers together in 57 countries on 6 continents. "
    }
  },
  {
    "code": "dinersclub",
    "vendor": "dinersclub",
    "category": "payment_card",
    "name": {
      "en": "Diners Club International"
    },
    "description": {
      "en": "Diners Club International, founded as Diners Club, is a charge card company formed in 1950."
    }
  },
  {
    "code": "chinaunionpay",
    "vendor": "chinaunionpay",
    "category": "payment_card",
    "countries": [
      "AU",
      "CL"
    ],
    "name": {
      "en": "China UnionPay"
    },
    "description": {
      "en": "UnionPay International (“UPI”) is a wholly owned subsidiary of China UnionPay , established in Nov 2012. "
    }
  },
  {
    "code": "presto",
    "vendor": "presto",
    "category": "payment_card",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Presto"
    },
    "description": {
      "en": "Presto is one of the major local credit cards in Chile that can be used for purchases in store and online. Approximately over 1.5 million active Presto cards are issued in Chile."
    }
  },
  {
    "code": "banamex",
    "vendor": "banamex",
    "category": "payment_card",
    "countries": [
      "MX"
    ],
    "name": {
      "en": "Banamex"
    }
  },
  {
    "code": "tarjetaripley",
    "vendor": "tarjetaripley",
    "category": "payment_card",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Ripley"
    },
    "description": {
      "en": "Tarjeta Ripley is one of the local credit cards in Chile and can be used for in store and online purchases. Ripley cards are issued by Banco Ripley."
    }
  },
  {
    "code": "americanexpress",
    "vendor": "americanexpress",
    "category": "payment_card",
    "name": {
      "en": "American Express"
    },
    "description": {
      "en": "American Express is a credit or charge card that can be used for online payments. American Express is amongst the major credit card brands in the world.  "
    }
  },
  {
    "code": "cartasi",
    "vendor": "cartasi",
    "category": "payment_card",
    "countries": [
      "IT"
    ],
    "name": {
      "en": "CartaSi"
    },
    "description": {
      "en": "CartaSi is a MasterCard or Visa co-branded credit card issued in Italy and can be used for internet purchases. CartaSi online payments can be processed using the Visa or MasterCard processing rails."
    }
  },
  {
    "code": "uatp",
    "vendor": "uatp",
    "category": "payment_card",
    "name": {
      "en": "UATP"
    },
    "description": {
      "en": "UATP cards are credit cards specifically issued and accepted by Airlines and Travel Businesses and aimed at corporate business travel. UATP has a global reach and is accepted by more than 260 airlines."
    }
  },
  {
    "code": "elo",
    "vendor": "elo",
    "category": "payment_card",
    "countries": [
      "BR"
    ],
    "name": {
      "en": "Elo"
    },
    "description": {
      "en": "Elo is one of the major domestic debit and credit card brands of Brazil that can be used for online purchases. More than 50 million Elo cards have been issued."
    }
  },
  {
    "code": "aura",
    "vendor": "aura",
    "category": "payment_card",
    "countries": [
      "BR",
      "FR"
    ],
    "name": {
      "en": "Aura"
    },
    "description": {
      "en": "Aura is one of the local credit card schemes in Brazil and next to HiperCard and Elo, one of the popular national online payment methods. Aura enables Brazilian shoppers to pay online by using their Aura credit card."
    }
  },
  {
    "code": "hipercard",
    "vendor": "hipercard",
    "category": "payment_card",
    "countries": [
      "BR"
    ],
    "name": {
      "en": "Hipercard"
    },
    "description": {
      "en": "Hipercard is a Brazilian credit card brand owned by Itau. Hipercard is next to MasterCard and Visa one of the popular credit cards used for online purchases in Brazil. "
    }
  },
  {
    "code": "mastercard",
    "vendor": "mastercard",
    "category": "payment_card",
    "name": {
      "en": "MasterCard"
    },
    "description": {
      "en": "MasterCard is one of world's best known online payment methods and dominant credit card brands. MasterCard is truly a global payment brand, supporting 150 currencies with over 35 million acceptance locations (point-of-sale and online) in over 210 countries."
    }
  },
  {
    "code": "visa2",
    "vendor": "visa2",
    "category": "payment_card",
    "name": {
      "en": "Visa"
    },
    "description": {
      "en": "Visa is one of world's best known online payment methods and largest credit card brand. Visa truly is a global payment brand with acceptance at point-of-sale and online in over 170 countries."
    }
  },
  {
    "code": "jcb",
    "vendor": "jcb",
    "category": "payment_card",
    "name": {
      "en": "JCB"
    },
    "description": {
      "en": "JCB is the Japanese credit card, which can also be used for online purchases. Around 85 million JCB credit cards are issued worldwide, 15 million cards outside of Japan."
    }
  },
  {
    "code": "discover",
    "vendor": "discover",
    "category": "payment_card",
    "name": {
      "en": "Discover"
    },
    "description": {
      "en": "Discover is one of the major global credit card brands in the World. Discover (+Diners) has around 110 million cardholders worldwide, 55 million in the US. Discover cards can also be used for online purchases and act similar as MasterCard and Visa."
    }
  },
  {
    "code": "magna",
    "vendor": "magna",
    "category": "payment_card",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Magna"
    }
  },
  {
    "code": "webpayplus",
    "vendor": "webpayplus",
    "category": "payment_card",
    "countries": [
      "CL"
    ],
    "name": {
      "en": "Webpay plus"
    }
  },
  {
    "code": "tarjetanaranjacreditcard",
    "vendor": "tarjetanaranjacreditcard",
    "category": "payment_card",
    "countries": [
      "AR"
    ],
    "name": {
      "en": "tarjeta naranja"
    },
    "description": {
      "en": "Tarjeta Naranja is a local credit card issued in Argentina which can be used for purchases over the internet."
    }
  },
  {
    "code": "vpay",
    "vendor": "vpay",
    "category": "payment_card",
    "countries": [
      "FR",
      "IT",
      "LU"
    ],
    "name": {
      "en": "V PAY"
    },
    "description": {
      "en": "V PAY is the CHIP & PIN debit card brand for Europe's main land by Visa Europe. V PAY for ecommerce is currently supported by a couple of French and Italian banks. V PAY requires Verified by Visa implementation on the merchant side."
    }
  },
  {
    "code": "cabal",
    "vendor": "cabal",
    "category": "payment_card",
    "countries": [
      "AR"
    ],
    "name": {
      "en": "Cabal"
    },
    "description": {
      "en": "Cabal is a local debit\/credit card brand in Argentina, Brazil, Uruguay and Paraguay. The Cabal card can be used for online purchases."
    }
  },
  {
    "code": "visaelectron",
    "vendor": "visaelectron",
    "category": "payment_card",
    "name": {
      "en": "Visa Electron"
    },
    "description": {
      "en": "Visa Electron is a debit card available across most of the world, with the exception of Canada, Australia, Ireland and the United States. The card was introduced by Visa in the 1985 and is a sister card to the Visa Debit card"
    }
  },
  {
    "code": "mastercarddebit",
    "vendor": "mastercarddebit",
    "category": "payment_card",
    "name": {
      "en": "MasterCard Debit"
    },
    "description": {
      "en": "The Debit MasterCard is a debit card. It uses the same systems as the standard MasterCard credit card and does not use a line of credit to the custome"
    }
  },
  {
    "code": "maestro",
    "vendor": "maestro",
    "category": "payment_card",
    "countries": [
      "AU",
      "BE",
      "IT",
      "ES",
      "AE"
    ],
    "name": {
      "en": "Maestro"
    },
    "description": {
      "en": "Maestro is a multi-national debit card service owned by MasterCard that was founded in 1990. Maestro cards are obtained from associate banks and can b"
    }
  },
  {
    "code": "cartebancaires",
    "vendor": "cartebancaires",
    "category": "payment_card",
    "name": {
      "en": "Carte Bancaires"
    },
    "description": {
      "en": "Carte Bancaires (CB) is a well-known debit and credit card payment scheme in France. Carte Bancaires cards are most often co-branded with MasterCard and Visa."
    }
  },
  {
    "code": "rupaypaysecure",
    "vendor": "rupaypaysecure",
    "category": "payment_card",
    "countries": [
      "IN"
    ],
    "name": {
      "en": "RuPay PaySecure"
    },
    "description": {
      "en": "Rupay is a growing online card payment method in India. Anyone having RuPay cards can make domestic online debit payments for reservations, booking, ticketing and shopping using Rupay PaySecure."
    }
  },
  {
    "code": "dankort",
    "vendor": "dankort",
    "category": "payment_card",
    "countries": [
      "DK"
    ],
    "name": {
      "en": "Dankort"
    },
    "description": {
      "en": "Dankort is often a co-branded card that allows Danish online shoppers to pay online with Dankort for domestic debit purchases and Visa Credit for international, cross-border purchases."
    }
  },
  {
    "code": "debitobradesco",
    "vendor": "debitobradesco",
    "category": "payment_card",
    "countries": [
      "BR"
    ],
    "name": {
      "en": "Debito Bradesco"
    },
    "description": {
      "en": "Debito Bradesco is a \"real time bank transfer\" payment option available for Bradesco Bank users in Brazil."
    }
  },
  {
    "code": "cartebleue",
    "vendor": "cartebleue",
    "category": "payment_card",
    "countries": [
      "FR"
    ],
    "name": {
      "en": "Carte Bleue"
    },
    "description": {
      "en": "Carte Bleue is a major debit card payment system operating in France. Unlike Visa Electron or Maestro debit cards, Carte Bleue allows transactions wit"
    }
  },
  {
    "code": "girocard",
    "vendor": "girocard",
    "category": "payment_card",
    "countries": [
      "DE"
    ],
    "name": {
      "en": "girocard"
    },
    "description": {
      "en": "Girocard is a well-known debit card in Germany for payments in store. Soon it will be available for online use."
    }
  },
  {
    "code": "visadebit",
    "vendor": "visadebit",
    "category": "payment_card",
    "name": {
      "en": "Visa Debit"
    },
    "description": {
      "en": "Visa Debit is a major brand of debit card issued by Visa in many countries around the world. "
    }
  },
  {
    "code": "postfinancecard",
    "vendor": "postfinancecard",
    "category": "payment_card",
    "countries": [
      "CH"
    ],
    "name": {
      "en": "PostFinance Card"
    },
    "description": {
      "en": "PostFinance payment methods. Secure and economical"
    }
  },
  {
    "code": "electroniccheckach",
    "vendor": "electroniccheckach",
    "category": "check",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "eCheck (ACH)"
    },
    "description": {
      "en": "A form of payment made via the internet that is designed to perform the same function as a conventional paper check."
    }
  },
  {
    "code": "papercheck",
    "vendor": "papercheck",
    "category": "check",
    "name": {
      "en": "Paper Check"
    },
    "description": {
      "en": "A cheque (or check in American English) is a document that orders a payment of money from a bank account. "
    }
  },
  {
    "code": "zipmark",
    "vendor": "zipmark",
    "category": "check",
    "countries": [
      "UM"
    ],
    "name": {
      "en": "Zipmark"
    },
    "description": {
      "en": "Zipmark is a state of the art payment platform that brings the Fed Reserve’s bank-agnostic and inexpensive check processing infrastructure to billers and consumer accepting secure payments from any bank."
    }
  },
  {
    "code": "smsbilling",
    "vendor": "smsbilling",
    "category": "mobile_payment",
    "name": {
      "en": "SMS Billing"
    },
    "description": {
      "en": "Reverse SMS billing or premium SMS service means that the user of the recipient phone rather than the message sender is charged for the cost of the SM"
    }
  },
  {
    "code": "carrierbilling",
    "vendor": "carrierbilling",
    "category": "mobile_payment",
    "name": {
      "en": "Carrier Billing"
    },
    "description": {
      "en": "Carrier billing lets wireless subscribers place the cost of a purchase for a digital good on their monthly phone bill. It's facilitated by providers w"
    }
  },
  {
    "code": "ivrbilling",
    "vendor": "ivrbilling",
    "category": "mobile_payment",
    "name": {
      "en": "IVR Billing"
    },
    "description": {
      "en": "IVR Billing is a payment solution where customers or end users call a local phone number and be billed on a per-minute or drop-call basis. "
    }
  },
  {
    "code": "pingping",
    "vendor": "pingping",
    "category": "mobile_payment",
    "countries": [
      "BE"
    ],
    "name": {
      "en": "ping.ping"
    },
    "description": {
      "en": "ping.ping is an electronic micropayment system available in Belgium which allows users to make purchases via mobile telephone."
    }
  },
  {
    "code": "pagofacil",
    "vendor": "pagofacil",
    "category": "cash_payment",
    "countries": [
      "AR"
    ],
    "name": {
      "en": "Pagofacil"
    },
    "description": {
      "en": "Pagofacil is a payment service in Argentina that allows its users to send money, top up their cell phone and payments. Pagofacil can be used for online purchases and for offline payment."
    }
  },
  {
    "code": "moneytopay",
    "vendor": "moneytopay",
    "category": "prepaid_card",
    "name": {
      "en": "MoneyToPay"
    }
  },
  {
    "code": "argencard",
    "vendor": "argencard",
    "category": "cash_payment",
    "countries": [
      "AR"
    ],
    "name": {
      "en": "Argencard"
    },
    "description": {
      "en": "Argencard is a debit or credit card used in Argentina and Uruguay. It allows online shoppers to pay offline for their online purchases at over 150,000 physical outlets."
    }
  },
  {
    "code": "barpay",
    "vendor": "barpay",
    "category": "invoice_payment",
    "countries": [
      "DE"
    ],
    "name": {
      "en": "BarPay"
    },
    "description": {
      "en": "BarPay is a payment solution created by EZV Gesellschaft fur Zahlungssysteme mbH, a young and innovative company headquarted in Berlin, Germany."
    }
  },
  {
    "code": "onlinenaira",
    "vendor": "onlinenaira",
    "category": "digital_wallet",
    "name": {
      "en": "OnlineNaira"
    },
    "description": {
      "en": "OnlineNaira is a service provided by Adesiyan.Com and was launched so that anyone especially Africans with an email account can send or\/and receive mo"
    }
  },
  {
    "code": "bkmexpress",
    "vendor": "bkmexpress",
    "category": "digital_wallet",
    "countries": [
      "TR"
    ],
    "name": {
      "en": "BKM Express"
    },
    "description": {
      "en": "BKM Express is a well-known digital wallet in Turkey that allows its users to link their credit and debit cards to their virtual wallet. BKM Express can be used for online and mobile purchases."
    }
  },
  {
    "code": "postfinanceefinance",
    "vendor": "postfinanceefinance",
    "category": "internet_banking",
    "countries": [
      "CH"
    ],
    "name": {
      "en": "PostFinance E-Finance"
    },
    "description": {
      "en": "PostFinance payment methods. Secure and economical"
    }
  },
  {
    "code": "bankaxess",
    "vendor": "bankaxess",
    "category": "internet_banking",
    "countries": [
      "NO"
    ],
    "name": {
      "en": "Bankaxess"
    },
    "description": {
      "en": "Bankaxess in Norway enables online shoppers to use online banking to complete their internet purchases. Consumers are redirected to their trusted bank environment to initiate an online bank transfer. 18 Norwegian banks support Bankaxess."
    }
  },
  {
    "code": "icabanken",
    "vendor": "icabanken",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "ICA-Banken"
    },
    "description": {
      "en": "ICA-Banken in Sweden enables its customers to use online bank transfers as payment method for ecommerce purchases. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "lansforsakringar",
    "vendor": "lansforsakringar",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Länsförsäkringar"
    },
    "description": {
      "en": "Länsförsäkringar in Sweden enables its banking customers to use online bank transfers as payment method for ecommerce purchases. Consumers use their trusted home banking environment, merchants benefit from payment guarantee and swift settlement."
    }
  },
  {
    "code": "saastopankki",
    "vendor": "saastopankki",
    "category": "internet_banking",
    "countries": [
      "FJ"
    ],
    "name": {
      "en": "Säästöpankki"
    },
    "description": {
      "en": "Säästopankki - a Finnish bank - enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "bancsabadell",
    "vendor": "bancsabadell",
    "category": "internet_banking",
    "countries": [
      "ES"
    ],
    "name": {
      "en": "Banc Sabadell"
    },
    "description": {
      "en": "Banc Sabadell in Spain enables its customers to pay for goods and services bought over the internet using online bank transfers as payment method. Merchants benefit from payment guarantee and swift settlement. "
    }
  },
  {
    "code": "aktia",
    "vendor": "aktia",
    "category": "internet_banking",
    "countries": [
      "FJ"
    ],
    "name": {
      "en": "Aktia"
    },
    "description": {
      "en": "Aktia enables their customers to use online banking to complete online purchases. Consumers are redirected to their trusted bank environment to initiate a bank transfer."
    }
  },
  {
    "code": "multibanconet",
    "vendor": "multibanconet",
    "category": "payment_card",
    "countries": [
      "PT"
    ],
    "name": {
      "en": "MultiBanco NET"
    },
    "description": {
      "en": "MultiBanco NET is the brand name for the Portugese online payment method which relies on the creation of virtual credit cards used for internet payments. The virtual credit card is issued by an American Express, MasterCard or Visa issuer and depends on the consumer's bank relationship."
    }
  },
  {
    "code": "bancontactmistercash",
    "vendor": "bancontactmistercash",
    "category": "payment_card",
    "countries": [
      "BE"
    ],
    "name": {
      "en": "Bancontact\/Mister Cash"
    },
    "description": {
      "en": "Bancontact\/Mister Cash offers you an effective, online, real-time product, which is suitable for all forms of card payments. "
    }
  },
  {
    "code": "geopaynet",
    "category": "alternative",
    "name": {
      "en": "GEO Pay"
    }
  },
  {
    "code": "china_citic_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Citic Bank",
      "zh": "中信银行"
    }
  },
  {
    "code": "industrial_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Industrial Bank",
      "zh": "兴业银行"
    }
  },
  {
    "code": "china_guangfa_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Guangfa Bank",
      "zh": "广发银行"
    }
  },
  {
    "code": "china_merchants_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Merchants Bank",
      "zh": "招商银行"
    }
  },
  {
    "code": "china_postal_savings_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Postal Savings Bank",
      "zh": "中国邮政储蓄银行"
    }
  },
  {
    "code": "bank_of_china",
    "category": "bank_transfer",
    "name": {
      "en": "Bank of China",
      "zh": "中国银行"
    }
  },
  {
    "code": "agricultural_bank_of_china",
    "category": "bank_transfer",
    "name": {
      "en": "Agricultural Bank of China",
      "zh": "中国农业银行"
    }
  },
  {
    "code": "china_everbright_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Everbright Bank",
      "zh": "中国光大银行"
    }
  },
  {
    "code": "china_construction_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Construction Bank",
      "zh": "中国建设银行"
    }
  },
  {
    "code": "ping_an_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Ping An Bank",
      "zh": "平安银行"
    }
  },
  {
    "code": "bank_of_communication",
    "category": "bank_transfer",
    "name": {
      "en": "Bank of Communication",
      "zh": "交通银行"
    }
  },
  {
    "code": "industrial_and_commercial_bank_of_china",
    "category": "bank_transfer",
    "name": {
      "en": "Industrial and Commercial Bank of China",
      "zh": "中国工商银行"
    }
  },
  {
    "code": "shanghai_pudong_development_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Shanghai Pudong Development Bank",
      "zh": "浦发银行"
    }
  },
  {
    "code": "china_minsheng_bank",
    "category": "bank_transfer",
    "name": {
      "en": "China Minsheng Bank",
      "zh": "中国民生银行"
    }
  },
  {
    "code": "china_union_pay",
    "category": "bank_transfer",
    "name": {
      "en": "China Union Pay",
      "zh": "中国银联"
    }
  },
  {
    "code": "siam_commercial_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Siam Commercial Bank"
    }
  },
  {
    "code": "krung_thai_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Krung Thai Bank"
    }
  },
  {
    "code": "krungsri",
    "category": "bank_transfer",
    "name": {
      "en": "Krungsri (Bank of Ayudhya Public Company Limited)"
    }
  },
  {
    "code": "uobt",
    "category": "bank_transfer",
    "name": {
      "en": "UOBT"
    }
  },
  {
    "code": "kasikorn_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Kasikorn Bank"
    }
  },
  {
    "code": "bangko_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Bangkok Bank"
    }
  },
  {
    "code": "cimb_clicks_bank",
    "category": "bank_transfer",
    "name": {
      "en": "CIMB Clicks Bank"
    }
  },
  {
    "code": "public_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Public Bank"
    }
  },
  {
    "code": "rhb_bank",
    "category": "bank_transfer",
    "name": {
      "en": "RHB Bank"
    }
  },
  {
    "code": "hong_leong_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Hong Leong Bank"
    }
  },
  {
    "code": "may_bank",
    "category": "bank_transfer",
    "name": {
      "en": "May Bank"
    }
  },
  {
    "code": "australia_and_new_zealand_banking_group",
    "category": "bank_transfer",
    "name": {
      "en": "Australia and New Zealand Banking Group"
    }
  },
  {
    "code": "westpac",
    "category": "bank_transfer",
    "name": {
      "en": "Westpac"
    }
  },
  {
    "code": "national_australia_bank",
    "category": "bank_transfer",
    "name": {
      "en": "National Australia Bank"
    }
  },
  {
    "code": "commonwealth_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Commonwealth Bank"
    }
  },
  {
    "code": "axis_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Axis Bank"
    }
  },
  {
    "code": "indian_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Indian Bank"
    }
  },
  {
    "code": "state_bank_of_india",
    "category": "bank_transfer",
    "name": {
      "en": "State Bank of India"
    }
  },
  {
    "code": "kotak_mahindra_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Kotak Mahindra Bank"
    }
  },
  {
    "code": "canara_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Canara Bank"
    }
  },
  {
    "code": "icici_bank",
    "category": "bank_transfer",
    "name": {
      "en": "ICICI Bank"
    }
  },
  {
    "code": "punjab_national_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Punjab National Bank"
    }
  },
  {
    "code": "bank_of_india",
    "category": "bank_transfer",
    "name": {
      "en": "Bank of India"
    }
  },
  {
    "code": "idbi_bank",
    "category": "bank_transfer",
    "name": {
      "en": "IDBI Bank"
    }
  },
  {
    "code": "standard_charter_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Standard Charter Bank"
    }
  },
  {
    "code": "karnataka_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Karnataka Bank"
    }
  },
  {
    "code": "hdfc_bank",
    "category": "bank_transfer",
    "name": {
      "en": "HDFC Bank"
    }
  },
  {
    "code": "yes_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Yes Bank"
    }
  },
  {
    "code": "central_bank_of_india",
    "category": "bank_transfer",
    "name": {
      "en": "Central Bank of India"
    }
  },
  {
    "code": "union_bank_of_india",
    "category": "bank_transfer",
    "name": {
      "en": "Union Bank of India"
    }
  },
  {
    "code": "bank_of_baroda",
    "category": "bank_transfer",
    "name": {
      "en": "Bank of Baroda"
    }
  },
  {
    "code": "mandiri_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Mandiri Bank"
    }
  },
  {
    "code": "bank_negara_indonesia",
    "category": "bank_transfer",
    "name": {
      "en": "Bank Negara Indonesia"
    }
  },
  {
    "code": "bank_central_asia",
    "category": "bank_transfer",
    "name": {
      "en": "Bank Central Asia"
    }
  },
  {
    "code": "bank_rakyat_indonesia",
    "category": "bank_transfer",
    "name": {
      "en": "Bank Rakyat Indonesia"
    }
  },
  {
    "code": "permata_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Permata Bank"
    }
  },
  {
    "code": "cimb_clicks_indonesia",
    "category": "bank_transfer",
    "name": {
      "en": "CIMB Clicks Indonesia"
    }
  },
  {
    "code": "danamon_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Danamon Bank"
    }
  },
  {
    "code": "btn_bank",
    "category": "bank_transfer",
    "name": {
      "en": "BTN Bank"
    }
  },
  {
    "code": "acb_bank",
    "category": "bank_transfer",
    "name": {
      "en": "ACB Bank"
    }
  },
  {
    "code": "vietcom_bank",
    "category": "bank_transfer",
    "name": {
      "en": "VIETCOM Bank"
    }
  },
  {
    "code": "vietin_bank",
    "category": "bank_transfer",
    "name": {
      "en": "VIETIN Bank"
    }
  },
  {
    "code": "sacom_bank",
    "category": "bank_transfer",
    "name": {
      "en": "SACOM Bank"
    }
  },
  {
    "code": "bidv_bank",
    "category": "bank_transfer",
    "name": {
      "en": "BIDV Bank"
    }
  },
  {
    "code": "techom_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Techom Bank"
    }
  },
  {
    "code": "dong_a_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Dong A Bank"
    }
  },
  {
    "code": "exim_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Exim Bank"
    }
  },
  {
    "code": "permata_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Permata Bank"
    }
  },
  {
    "code": "bri_bank",
    "category": "bank_transfer",
    "name": {
      "en": "BRI Bank"
    }
  },
  {
    "code": "busan_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Busan Bank"
    }
  },
  {
    "code": "citibank_korea",
    "category": "bank_transfer",
    "name": {
      "en": "Citibank Korea"
    }
  },
  {
    "code": "daegu_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Daegu Bank"
    }
  },
  {
    "code": "everrich_postal_savings_and_insurance_bank",
    "category": "bank_transfer",
    "name": {
      "en": "EVERRICH Postal Savings and Insurance Bank"
    }
  },
  {
    "code": "hana_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Hana Bank"
    }
  },
  {
    "code": "industrial_bank_of_korea",
    "category": "bank_transfer",
    "name": {
      "en": "Industrial Bank of Korea"
    }
  },
  {
    "code": "kookmin_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Kookmin Bank"
    }
  },
  {
    "code": "korea_development_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Korea Development Bank"
    }
  },
  {
    "code": "kwangju_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Kwangju Bank"
    }
  },
  {
    "code": "mg_bank_saemmul",
    "category": "bank_transfer",
    "name": {
      "en": "MG Bank (Saemmul)"
    }
  },
  {
    "code": "nonghyup_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Nonghyup Bank"
    }
  },
  {
    "code": "shinhan_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Shinhan Bank"
    }
  },
  {
    "code": "standard_chartered_bank_korea",
    "category": "bank_transfer",
    "name": {
      "en": "Standard Chartered Bank Korea"
    }
  },
  {
    "code": "suhyup_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Suhyup Bank"
    }
  },
  {
    "code": "woori_bank",
    "category": "bank_transfer",
    "name": {
      "en": "Woori Bank"
    }
  },
  {
    "code": "crypto",
    "category": "bank_transfer",
    "name": {
      "en": "CRYPTO"
    }
  },
  {
    "code": "wechat",
    "category": "payment_card",
    "name": {
      "en": "Wechat"
    }
  },
  {
    "code": "qqpay",
    "category": "payment_card",
    "name": {
      "en": "QQPay"
    }
  },
  {
    "code": "alipay",
    "category": "payment_card",
    "name": {
      "en": "Alipay"
    }
  },
  {
    "code": "unionpay_qr",
    "category": "payment_card",
    "name": {
      "en": "Unionpay_QR"
    }
  },
  {
    "code": "visa",
    "vendor": "visa",
    "category": "payment_card",
    "name": {
      "en": "Visa"
    },
    "description": {
      "en": "Pay with Visa card"
    }
  },
  {
    "code": "mir",
    "vendor": "kartamir",
    "category": "payment_card",
    "name": {
      "ru": "Мир"
    },
    "description": {
      "ru": "Оплата картой банка Мир."
    }
  },
  {
    "code": "paysafecash",
    "vendor": "optimalpayments",
    "category": "internet_banking",
    "countries": [
      "AT",
      "HR",
      "HU",
      "IT",
      "MT",
      "PT",
      "RO",
      "SI",
      "ES"
    ],
    "name": {
      "en": "Paysafecash"
    }
  },
  {
    "code": "resursbank",
    "vendor": "resursbank",
    "category": "internet_banking",
    "countries": [
      "SE",
      "NO",
      "FI",
      "DK"
    ],
    "name": {
      "en": "Resurs bank"
    }
  },
  {
    "code": "rapidtransfer",
    "vendor": "skrill",
    "category": "internet_banking",
    "countries": [
      "AT",
      "DK",
      "FI",
      "FR",
      "DE",
      "HU",
      "IT",
      "NO",
      "PL",
      "PT",
      "ES",
      "SE",
      "GB"
    ],
    "name": {
      "en": "Rapid Transfer"
    }
  },
  {
    "code": "nordeasolo",
    "vendor": "nordeasolo",
    "category": "internet_banking",
    "countries": [
      "SE"
    ],
    "name": {
      "en": "Nordea Solo"
    }
  },
  {
    "code": "epaybg",
    "vendor": "epaybg",
    "category": "internet_banking",
    "countries": [
      "BG"
    ],
    "name": {
      "en": "ePay.bg"
    }
  },
  {
    "code": "astropaydirect",
    "vendor": "astropay",
    "category": "internet_banking",
    "countries": [
      "AR",
      "BR"
    ],
    "name": {
      "en": "Astropay - Direct Bank Transfer"
    }
  },
  {
    "code": "astropaymanual",
    "vendor": "astropay",
    "category": "internet_banking",
    "countries": [
      "BR",
      "CL",
      "CN",
      "CO"
    ],
    "name": {
      "en": "Astropay - Manual Bank Transfer"
    }
  },
  {
    "code": "astropaycash",
    "vendor": "astropay",
    "category": "internet_banking",
    "countries": [
      "AR",
      "BR",
      "CL",
      "CN",
      "CO",
      "MX",
      "PE",
      "UY"
    ],
    "name": {
      "en": "Astropay - Cash / Invoice"
    }
  },
  {
    "code": "astropayunion",
    "vendor": "astropay",
    "category": "internet_banking",
    "countries": [
      "CN"
    ],
    "name": {
      "en": "Astropay - Unionpay"
    }
  },
  {
    "code": "tranzzo",
    "vendor": "tranzzo",
    "category": "online_banking",
    "name": {
      "en": "Tranzzo"
    }
  },
  {
    "code": "mercuryo",
    "vendor": "mercuryo",
    "category": "digital_wallet",
    "name": {
      "en": "Mercuryo",
      "ru": "Mercuryo",
      "uk": "Mercuryo"
    }
  },
  {
    "code": "ecopayz",
    "vendor": "ecopayz",
    "category": "digital_wallet",
    "name": {
      "en": "Ecopayz",
      "ru": "Ecopayz",
      "uk": "Ecopayz"
    }
  },
  {
    "code": "ecopayz_voucher",
    "vendor": "ecopayz",
    "category": "prepaid_card",
    "name": {
      "en": "Ecopayz voucher",
      "ru": "Ecopayz voucher",
      "uk": "Ecopayz voucher"
    }
  },
  {
    "code": "paymentwall",
    "vendor": "paymentwall",
    "category": "payment_card",
    "name": {
      "en": "PaymentWall",
      "ru": "PaymentWall",
      "uk": "PaymentWall"
    }
  },
  {
    "code": "wlandpay",
    "vendor": "wlandpay",
    "category": "payment_card",
    "name": {
      "en": "Wlandpay",
      "ru": "Wlandpay",
      "uk": "Wlandpay"
    }
  },
  {
    "code": "exactly",
    "vendor": "exactly",
    "category": "payment_card",
    "name": {
      "en": "Exactly",
      "ru": "Exactly",
      "uk": "Exactly"
    }
  },
  {
    "code": "xpate",
    "vendor": "xpate",
    "category": "payment_card",
    "name": {
      "en": "Xpate",
      "ru": "Xpate",
      "uk": "Xpate"
    }
  },
  {
    "code": "cypix",
    "vendor": "cypix",
    "category": "payment_card",
    "name": {
      "en": "Cypix",
      "ru": "Cypix",
      "uk": "Cypix"
    }
  },
  {
    "code": "muchbetter",
    "vendor": "muchbetter",
    "category": "digital_wallet",
    "name": {
      "en": "MuchBetter",
      "ru": "MuchBetter",
      "uk": "MuchBetter"
    }
  },
  {
    "code": "ecobanq",
    "vendor": "ecobanq",
    "category": "digital_wallet",
    "name": {
      "en": "Ecobanq",
      "ru": "Ecobanq",
      "uk": "Ecobanq"
    }
  }
  ] as OftMethod[];
