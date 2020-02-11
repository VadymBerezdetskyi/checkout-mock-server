export default {
  "services": [
    {
      "code": "card",
      "method": "card",
      "currency": "XXX",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "card",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": true
        }
      ]
    },
    {
      "code": "alipay",
      "method": "alipay",
      "currency": "UAH",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "alipay",
      "method": "alipay",
      "currency": "USD",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "alipay",
      "method": "alipay",
      "currency": "EUR",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "neteller",
      "method": "neteller",
      "currency": "EUR",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": true
        }
      ]
    },
    {
      "code": "vvvgiftcard",
      "method": "vvvgiftcard",
      "currency": "EUR",
      "totalAmount": 105.50,
      "amountMin": 0.01,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": true
        }
      ]
    },
    {
      "code": "vvvgiftcard",
      "method": "vvvgiftcard",
      "currency": "USD",
      "totalAmount": 105.50,
      "amountMin": 100,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "qiwi",
      "method": "qiwi",
      "currency": "USD",
      "totalAmount": 105.50,
      "amountMin": 1,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "qiwi",
      "method": "qiwi",
      "currency": "UAH",
      "totalAmount": 105.50,
      "amountMin": 10,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": false
        }
      ]
    },
    {
      "code": "qiwi",
      "method": "qiwi",
      "currency": "EUR",
      "totalAmount": 105.50,
      "amountMin": 1,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": true
        }
      ]
    },
    {
      "code": "sepacredittransfer",
      "method": "sepacredittransfer",
      "currency": "EUR",
      "totalAmount": 105.50,
      "amountMin": 1000,
      "amountMax": 100000,
      "flow": "hpp",
      "fields": [
        {
          "key":"email",
          "type": "email",
          "required": false
        }
      ],
      "context_fields": [
        {
          "key": "line1",
          "type": "string",
          "required": true
        }
      ]
    },
  ],
  "methods": [
    {
      "code": "alipay",
      "category": "digital_wallet",
      "description": {
        "en": "Alipay is China's leading third-party online payment solution, providing an easy, safe and secure way for millions of individuals and businesses to ma"
      },
      "name": {
        "en": "Alipay.com"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 0,
      "hide": false,
    },
    {
      "code": "neteller",
      "category": "digital_wallet",
      "description": {
        "en": "NETELLER is a digital wallet or electronic purse that allows consumers to pay online using a pre-loaded value securely stored in a virtual wallet. Consumers can preload their NETELLER wallet by using a credit or debit card or other alternative payment method."
      },
      "name": {
        "en": "NETELLER"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 0,
      "hide": false,
    },
    {
      "code": "vvvgiftcard",
      "category": "prepaid_voucher",
      "description": {
        "en": "VVV Giftcard, the online gift card for the Dutch E-commerce market"
      },
      "name": {
        "en": "VVV Giftcard"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 0,
      "hide": false,
    },
    {
      "code": "rapipago",
      "category": "cash_payment",
      "description": {
        "en": "Rapipago from Argentina is an offline payment method used for online purchases. Shoppers buy their goods and services online and pay offline at one the 6,000+ Rapipago payment locations."
      },
      "name": {
        "en": "Rapipago"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 0,
      "hide": false,
    },
    {
      "code": "qiwi",
      "category": "digital_wallet",
      "description": {
        "en": "Qiwi Wallet is an electronic wallet system co-branded with Visa."
      },
      "name": {
        "en": "VISA QIWI Wallet",
        "ru": "VISA QIWI Кошелек",
        "uk": "VISA QIWI Гаманець"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 1,
      "hide": false,
    },
    {
      "code": "sepacredittransfer",
      "category": "digital_wallet",
      "description": {
        "en": "Qiwi Wallet is an electronic wallet system co-branded with Visa."
      },
      "name": {
        "en": "VISA QIWI Wallet",
        "ru": "VISA QIWI Кошелек",
        "uk": "VISA QIWI Гаманець"
      },
      "logo": "",
      "icon": "",
      "metadata": "",
      "position": 2,
      "hide": false,
    },
  ]
}