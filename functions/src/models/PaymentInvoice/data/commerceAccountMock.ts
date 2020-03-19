export const commerceAccountMock = {
  name: 'PayCore.io',
  logo:
    'https://confluence.paymaxi.com/download/attachments/2392663/PC?version=9&modificationDate=1523488947000&api=v2',
  website: 'https://google.com',
  services: [
    {
      code: 'googlepay',
      flow: 'google_pay',
      method: 'googlepay',
      currency: 'UAH',
      fields: [],
      context_fields: [],
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
    },
    {
      code: 'applepay',
      flow: 'apple_pay',
      method: 'applepay',
      currency: 'UAH',
      fields: [],
      context_fields: [],
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
    },
    {
      code: 'card',
      method: 'bank_card',
      currency: 'XXX',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'card',
      fields: [],
      context_fields: [],
    },
    {
      // service for accounts with type 'card'
      code: 'checkout_card_token',
      method: 'bank_card',
      currency: 'XXX',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'card',
      fields: [
        {
          key: 'checkout_token',
          type: 'text',
          required: true,
          label: {
            en: '',
          },
          hint: {
            en: '',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'cvv',
          type: 'text',
          required: true,
          label: {
            en: '',
          },
          hint: {
            en: '',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [],
    },
    {
      code: 'alipay_uah',
      method: 'alipay',
      currency: 'UAH',
      amount_min: 0.01,
      total_amount: 105.5,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'alipay_usd',
      method: 'alipay',
      currency: 'USD',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'alipay_eur',
      method: 'alipay',
      currency: 'EUR',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'neteller',
      method: 'neteller',
      currency: 'EUR',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'vvvgiftcard',
      method: 'vvvgiftcard',
      currency: 'EUR',
      total_amount: 105.5,
      amount_min: 0.01,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'vvvgiftcard',
      method: 'vvvgiftcard',
      currency: 'USD',
      total_amount: 105.5,
      amount_min: 100,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'USD',
      total_amount: 105.5,
      amount_min: 1,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'UAH',
      total_amount: 105.5,
      amount_min: 10,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'EUR',
      total_amount: 105.5,
      amount_min: 1,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
    {
      code: 'sepacredittransfer',
      method: 'sepacredittransfer',
      currency: 'EUR',
      total_amount: 105.5,
      amount_min: 1000,
      amount_max: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
          label: {
            en: 'email',
          },
          hint: {
            en: 'email hint',
          },
          regexp: '',
          position: 0,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
      ],
    },
  ],
  methods: [
    {
      code: 'googlepay',
      name: {
        en: 'Google Pay',
        ru: 'Google Pay',
        uk: 'Google Pay',
      },
      description: {
        en: 'Google Pay is a digital wallet and payment platform from Google.',
      },
      category: 'digital_wallet',
      logo:
        'https://static.openfintech.io/payment_methods/googlepay/logo.svg?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/googlepay/icon.svg?w=278&c=v0.59.26#w100',
      position: 0,
      metadata: [],
      hide: false,
    },
    {
      code: 'applepay',
      name: {
        en: 'Apple Pay',
        ru: 'Apple Pay',
        uk: 'Apple Pay',
      },
      description: {
        en:
          'Apple Pay is the new mobile payment system by Apple. Apple Pay uses NFC technology for contactless payments in store, and can be used for online and in-app purchases.\u00a0',
      },
      category: 'digital_wallet',
      logo: 'https://static.openfintech.io/payment_methods/applepay/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/applepay/icon.svg?w=278&c=v0.59.26#w100',
      position: 0,
      metadata: [],
      hide: false,
    },
    {
      code: 'bank_card',
      category: 'payment_card',
      name: {
        en: 'Card',
        ru: 'Card',
        uk: 'Card',
      },
      description: {
        en: 'Bank card',
      },
      metadata: {},
      position: 0,
      hide: false,
      logo:
        'https://static.openfintech.io/payment_methods/bank_card/logo.svg?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/bank_card/icon.svg?w=278&c=v0.59.26#w100',
    },
    {
      code: 'alipay',
      category: 'digital_wallet',
      description: {
        en:
          "Alipay is China's leading third-party online payment solution, providing an easy, safe and secure way for millions of individuals and businesses to ma",
      },
      name: { en: 'Alipay.com' },
      logo: 'https://static.openfintech.io/vendors/alipay/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/vendors/alipay/icon.svg?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'neteller',
      category: 'digital_wallet',
      description: {
        en:
          'NETELLER is a digital wallet or electronic purse that allows consumers to pay online using a pre-loaded value securely stored in a virtual wallet. Consumers can preload their NETELLER wallet by using a credit or debit card or other alternative payment method.',
      },
      name: { en: 'NETELLER' },

      logo: 'https://static.openfintech.io/payment_methods/neteller/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/neteller/icon.png?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'vvvgiftcard',
      category: 'prepaid_voucher',
      description: { en: 'VVV Giftcard, the online gift card for the Dutch E-commerce market' },

      name: { en: 'VVV Giftcard' },

      logo:
        'https://static.openfintech.io/payment_methods/vvvgiftcard/logo.png?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/vvvgiftcard/icon.png?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'rapipago',
      category: 'cash_payment',
      description: {
        en:
          'Rapipago from Argentina is an offline payment method used for online purchases. Shoppers buy their goods and services online and pay offline at one the 6,000+ Rapipago payment locations.',
      },
      name: { en: 'Rapipago' },

      logo: 'https://static.openfintech.io/payment_methods/rapipago/logo.png?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/rapipago/icon.png?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'qiwi',
      category: 'digital_wallet',
      description: { en: 'Qiwi Wallet is an electronic wallet system co-branded with Visa.' },

      name: { en: 'VISA QIWI Wallet' },

      logo: 'https://static.openfintech.io/payment_providers/qiwi/logo.svg?w=400&c=v0.59.26#w100',
      icon: 'https://static.openfintech.io/payment_providers/qiwi/icon.svg?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 1,
      hide: false,
    },
    {
      code: 'sepacredittransfer',
      category: 'digital_wallet',
      description: { en: 'Qiwi Wallet is an electronic wallet system co-branded with Visa.' },

      name: { en: 'VISA QIWI Wallet' },

      logo:
        'https://static.openfintech.io/payment_methods/sepacredittransfer/logo.svg?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/sepacredittransfer/icon.svg?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 2,
      hide: false,
    },
  ],
};
