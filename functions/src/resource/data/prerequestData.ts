export default {
  services: [
    {
      code: 'card',
      method: 'card',
      currency: 'XXX',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'card',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      code: 'alipay_uah',
      method: 'alipay',
      currency: 'UAH',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'alipay_usd',
      method: 'alipay',
      currency: 'USD',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'alipay_eur',
      method: 'alipay',
      currency: 'EUR',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'neteller',
      method: 'neteller',
      currency: 'EUR',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      code: 'vvvgiftcard',
      method: 'vvvgiftcard',
      currency: 'EUR',
      totalAmount: 105.5,
      amountMin: 0.01,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      code: 'vvvgiftcard',
      method: 'vvvgiftcard',
      currency: 'USD',
      totalAmount: 105.5,
      amountMin: 100,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'USD',
      totalAmount: 105.5,
      amountMin: 1,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'UAH',
      totalAmount: 105.5,
      amountMin: 10,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: false,
        },
      ],
    },
    {
      code: 'qiwi',
      method: 'qiwi',
      currency: 'EUR',
      totalAmount: 105.5,
      amountMin: 1,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: true,
        },
      ],
    },
    {
      code: 'sepacredittransfer',
      method: 'sepacredittransfer',
      currency: 'EUR',
      totalAmount: 105.5,
      amountMin: 1000,
      amountMax: 100000,
      flow: 'hpp',
      fields: [
        {
          key: 'email',
          type: 'email',
          required: false,
        },
      ],
      context_fields: [
        {
          key: 'line1',
          type: 'string',
          required: true,
        },
      ],
    },
  ],
  methods: [
    {
      code: 'alipay',
      category: 'digital_wallet',
      description: {
        en:
          "Alipay is China's leading third-party online payment solution, providing an easy, safe and secure way for millions of individuals and businesses to ma",
      },
      name: {
        en: 'Alipay.com',
      },
      logo: 'https://static.openfintech.io/vendors/alipay/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/vendors/alipay/icon.svg?w=278&c=v0.59.26#w100',
      metadata: '',
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
      name: {
        en: 'NETELLER',
      },
      logo: 'https://static.openfintech.io/payment_methods/neteller/logo.svg?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/neteller/icon.png?w=278&c=v0.59.26#w100',
      metadata: '',
      position: 0,
      hide: false,
    },
    {
      code: 'vvvgiftcard',
      category: 'prepaid_voucher',
      description: {
        en: 'VVV Giftcard, the online gift card for the Dutch E-commerce market',
      },
      name: {
        en: 'VVV Giftcard',
      },
      logo:
        'https://static.openfintech.io/payment_methods/vvvgiftcard/logo.png?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/vvvgiftcard/icon.png?w=278&c=v0.59.26#w100',
      metadata: '',
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
      name: {
        en: 'Rapipago',
      },
      logo: 'https://static.openfintech.io/payment_methods/rapipago/logo.png?w=400&c=v0.59.26#w200',
      icon: 'https://static.openfintech.io/payment_methods/rapipago/icon.png?w=278&c=v0.59.26#w100',
      metadata: '',
      position: 0,
      hide: false,
    },
    {
      code: 'qiwi',
      category: 'digital_wallet',
      description: {
        en: 'Qiwi Wallet is an electronic wallet system co-branded with Visa.',
      },
      name: {
        en: 'VISA QIWI Wallet',
        ru: 'VISA QIWI Кошелек',
        uk: 'VISA QIWI Гаманець',
      },
      logo: 'https://static.openfintech.io/payment_providers/qiwi/logo.svg?w=400&c=v0.59.26#w100',
      icon: 'https://static.openfintech.io/payment_providers/qiwi/icon.svg?w=278&c=v0.59.26#w100',
      metadata: '',
      position: 1,
      hide: false,
    },
    {
      code: 'sepacredittransfer',
      category: 'digital_wallet',
      description: {
        en: 'Qiwi Wallet is an electronic wallet system co-branded with Visa.',
      },
      name: {
        en: 'VISA QIWI Wallet',
        ru: 'VISA QIWI Кошелек',
        uk: 'VISA QIWI Гаманець',
      },
      logo:
        'https://static.openfintech.io/payment_methods/sepacredittransfer/logo.svg?w=400&c=v0.59.26#w200',
      icon:
        'https://static.openfintech.io/payment_methods/sepacredittransfer/icon.svg?w=278&c=v0.59.26#w100',
      metadata: '',
      position: 2,
      hide: false,
    },
  ],
}