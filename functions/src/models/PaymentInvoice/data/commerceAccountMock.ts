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
    // TOKEN
    {
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
    // REDIRECT
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
          key: 'shipping_address.line1',
          type: 'string',
          required: true,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'shipping_address.line2',
          type: 'string',
          required: true,
          label: {
            en: 'line2',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'customer.email',
          type: 'string',
          required: true,
          label: {
            en: 'email',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'customer.phone',
          type: 'string',
          required: true,
          label: {
            en: 'phone',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'billing_address.line1',
          type: 'string',
          required: true,
          label: {
            en: 'line1',
          },
          hint: {
            en: 'line1 hint',
          },
          regexp: '',
          position: 0,
        },
        {
          key: 'billing_address.line2',
          type: 'string',
          required: true,
          label: {
            en: 'line2',
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
    // INVOICE
    {
      code: 'muchbetter_usd_invoice',
      currency: 'USD',
      fields: [
        {
          key: 'phone',
          type: 'string',
          label: {
            en: 'Phone number',
            ru: 'Номер телефона',
            uk: 'Номер телефону',
          },
          hint: {
            en: 'Enter phone number',
            ru: 'Введите номер телефона MuchBetter кошелька',
            uk: 'Введіть номер телефону MuchBetter гаманця',
          },
          regexp: '/^\\+\\d{1,15}$/',
          required: true,
          position: 1,
        },
      ],
      flow: 'invoice',
      method: 'muchbetter',
      amount_min: 0.01,
      amount_max: 999999,
      total_amount: 105.5,
      context_fields: [],
    },
    {
      code: 'muchbetter_eur_invoice',
      currency: 'EUR',
      total_amount: 105.5,
      context_fields: [],
      fields: [
        {
          key: 'phone',
          type: 'string',
          label: {
            en: 'Phone number',
            ru: 'Номер телефона',
            uk: 'Номер телефону',
          },
          hint: {
            en: 'Enter phone number',
            ru: 'Введите номер телефона MuchBetter кошелька',
            uk: 'Введіть номер телефону MuchBetter гаманця',
          },
          regexp: '/^\\+\\d{1,15}$/',
          required: true,
          position: 1,
        },
      ],
      flow: 'invoice',
      method: 'muchbetter',
      amount_min: 0.01,
      amount_max: 999999,
    },
    {
      code: 'muchbetter_gbp_invoice',
      currency: 'GBP',
      total_amount: 105.5,
      context_fields: [],
      fields: [
        {
          key: 'phone',
          type: 'string',
          label: {
            en: 'Phone number',
            ru: 'Номер телефона',
            uk: 'Номер телефону',
          },
          hint: {
            en: 'Enter phone number',
            ru: 'Введите номер телефона MuchBetter кошелька',
            uk: 'Введіть номер телефону MuchBetter гаманця',
          },
          regexp: '/^\\+\\d{1,15}$/',
          required: true,
          position: 1,
        },
      ],
      flow: 'invoice',
      method: 'muchbetter',
      amount_min: 0.01,
      amount_max: 999999,
    },
    {
      code: 'airtel_money_tzs_invoice',
      currency: 'TZS',
      total_amount: 105.5,
      context_fields: [],
      fields: [
        {
          key: 'phone',
          type: 'string',
          label: {
            en: 'Phone number',
            ru: 'Номер телефона',
            uk: 'Номер телефону',
          },
          hint: {
            en: 'Enter phone number',
            ru: 'Введите номер телефона',
            uk: 'Введіть номер телефону',
          },
          regexp: '/^\\+\\d{10,14}$/',
          required: true,
          position: 1,
        },
      ],
      flow: 'invoice',
      method: 'airtel_money',
      amount_min: 100,
      amount_max: 999999,
    },
    {
      code: 'uax_uah_invoice',
      currency: 'UAH',
      flow: 'invoice',
      method: 'uax',
      amount_min: 0.01,
      amount_max: 100000,
      total_amount: 105.5,
      fields: [],
      context_fields: [],
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
      code: 'muchbetter',
      category: 'digital_wallet',
      name: {
        en: 'MuchBetter',
        ru: 'MuchBetter',
        uk: 'MuchBetter',
      },
      description: {
        en: 'MuchBetter',
        ru: 'MuchBetter',
        uk: 'MuchBetter',
      },
      logo:
        'https://static.openfintech.io/payment_methods/muchbetter/logo.svg?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/muchbetter/icon.svg?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'uax',
      category: 'alternative',
      name: {
        en: 'UAX',
        ru: 'UAX',
        uk: 'UAX',
      },
      description: {
        en: 'UAX',
        ru: 'UAX',
        uk: 'UAX',
      },
      logo: 'https://static.openfintech.io/payment_methods/uax/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/uax/icon.svg?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
    {
      code: 'airtel_money',
      category: 'mobile_payment',
      name: {
        en: 'Airtel money',
        ru: 'Airtel money',
        uk: 'Airtel money',
      },
      description: {
        en: 'Airtel money',
        ru: 'Airtel money',
        uk: 'Airtel money',
      },
      logo:
        'https://static.openfintech.io/payment_methods/airtel_money/logo.png?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/airtel_money/icon.png?w=278&c=v0.59.26#w100',
      metadata: {},
      position: 0,
      hide: false,
    },
  ],
};
