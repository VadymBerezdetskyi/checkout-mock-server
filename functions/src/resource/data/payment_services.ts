interface OftService {
  code: string,
  flow: string,
  method: string,
  currency?: string,
  fields?: any[]
  amount_min?: number,
  amount_max?: number,
}

export default [
  {
    "code": "qiwi_rub_hpp",
    "flow": "hpp",
    "method": "qiwi",
    "currency": "RUB",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона",
          "uk": "Введіть номер телефону"
        },
        "regexp": "\/^\\+\\d{10,14}$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ingbankpl_pln_hpp",
    "flow": "hpp",
    "method": "ingpl",
    "currency": "PLN",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^[a-zA-Zа-яА-Я]{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^[a-zA-Zа-яА-Я]{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "email",
        "type": "string",
        "label": {
          "en": "Email",
          "ru": "Email",
          "uk": "Email"
        },
        "hint": {
          "en": "Enter email",
          "ru": "Введите email",
          "uk": "Введіть email"
        },
        "regexp": "\/^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$$\/",
        "required": true,
        "position": 3
      }
    ],
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "privat24_usd_hpp",
    "flow": "hpp",
    "method": "privat24",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "promsvyazbank_rub_hpp",
    "flow": "hpp",
    "method": "promsvyazbank",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "liqpay_usd_hpp",
    "flow": "hpp",
    "method": "liqpay",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "test_xts_test",
    "flow": "test",
    "method": "test",
    "currency": "XTS",
    "fields": [
      {
        "key": "status",
        "type": "string",
        "label": {
          "en": "Status",
          "ru": "Статус",
          "uk": "Статус"
        },
        "hint": {
          "en": "Enter Status",
          "ru": "Введите статус",
          "uk": "Введіть статус"
        },
        "regexp": "\/^[a-zA-Z_]*$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "test_uah_test",
    "flow": "test",
    "method": "test",
    "currency": "UAH",
    "fields": [
      {
        "key": "status",
        "type": "string",
        "label": {
          "en": "Status",
          "ru": "Статус",
          "uk": "Статус"
        },
        "hint": {
          "en": "Enter Status",
          "ru": "Введите статус",
          "uk": "Введіть статус"
        },
        "regexp": "\/^[a-zA-Z_]*$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "test_usd_test",
    "flow": "test",
    "method": "test",
    "currency": "USD",
    "fields": [
      {
        "key": "status",
        "type": "string",
        "label": {
          "en": "Status",
          "ru": "Статус",
          "uk": "Статус"
        },
        "hint": {
          "en": "Enter Status",
          "ru": "Введите статус",
          "uk": "Введіть статус"
        },
        "regexp": "\/^[a-zA-Z_]*$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "test_eur_test",
    "flow": "test",
    "method": "test",
    "currency": "EUR",
    "fields": [
      {
        "key": "status",
        "type": "string",
        "label": {
          "en": "Status",
          "ru": "Статус",
          "uk": "Статус"
        },
        "hint": {
          "en": "Enter Status",
          "ru": "Введите статус",
          "uk": "Введіть статус"
        },
        "regexp": "\/^[a-zA-Z_]*$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "privat24_eur_hpp",
    "flow": "hpp",
    "method": "privat24",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_wallet_eur_hpp",
    "flow": "hpp",
    "method": "liqpay_wallet",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "privat24_uah_hpp",
    "flow": "hpp",
    "method": "privat24",
    "currency": "UAH",
    "amount_min": 1,
    "amount_max": 100000
  },
  {
    "code": "liqpay_rub_hpp",
    "flow": "hpp",
    "method": "liqpay",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_rub_hpp",
    "flow": "hpp",
    "method": "bank_card",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_rub_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 1000000
  },
  {
    "code": "payment_card_ngn_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "NGN",
    "amount_min": 1,
    "amount_max": 1000000000
  },
  {
    "code": "payment_card_tzs_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "TZS",
    "amount_min": 0.01,
    "amount_max": 1000000
  },
  {
    "code": "payment_card_cny_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "CNY",
    "amount_min": 1,
    "amount_max": 100000000
  },
  {
    "code": "payment_card_token_rub_hpp",
    "flow": "hpp",
    "method": "payment_card_token",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 1000000,
    "fields": [
      {
        "key": "token",
        "type": "string",
        "label": {
          "en": "Token",
          "ru": "Токен",
          "uk": "Токен"
        },
        "hint": {
          "en": "Enter token",
          "ru": "Введите токен",
          "uk": "Введіть токен"
        },
        "regexp": "\/^[a-zA-Z_0-9]{32,128}$\/",
        "required": true,
        "position": 1
      }
    ]
  },
  {
    "code": "privat24_rub_hpp",
    "flow": "hpp",
    "method": "privat24",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_uah_hpp",
    "flow": "hpp",
    "method": "liqpay",
    "currency": "UAH",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_wallet_uah_hpp",
    "flow": "hpp",
    "method": "liqpay_wallet",
    "currency": "UAH",
    "amount_min": 1,
    "amount_max": 100000
  },
  {
    "code": "masterpass_usd_hpp",
    "flow": "hpp",
    "method": "masterpass",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_uah_hpp",
    "flow": "hpp",
    "method": "bank_card",
    "currency": "UAH",
    "amount_min": 1,
    "amount_max": 100000
  },
  {
    "code": "payment_card_uah_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "UAH",
    "amount_min": 0.01,
    "amount_max": 1000000
  },
  {
    "code": "payment_card_token_uah_hpp",
    "flow": "hpp",
    "method": "payment_card_token",
    "currency": "UAH",
    "amount_min": 0.01,
    "amount_max": 1000000,
    "fields": [
      {
        "key": "token",
        "type": "string",
        "label": {
          "en": "Token",
          "ru": "Токен",
          "uk": "Токен"
        },
        "hint": {
          "en": "Enter token",
          "ru": "Введите токен",
          "uk": "Введіть токен"
        },
        "regexp": "\/^[a-zA-Z_0-9]{32,128}$\/",
        "required": true,
        "position": 1
      }
    ]
  },
  {
    "code": "coingate_usd_hpp",
    "flow": "hpp",
    "method": "coingate",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "coingate_eur_hpp",
    "flow": "hpp",
    "method": "coingate",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "usdt_usd_hpp",
    "flow": "hpp",
    "method": "usdt",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "masterpass_eur_hpp",
    "flow": "hpp",
    "method": "masterpass",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_btc_hpp",
    "flow": "hpp",
    "method": "bitcoin",
    "currency": "BTC",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_bch_hpp",
    "flow": "hpp",
    "method": "bitcoin",
    "currency": "BCH",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_eth_hpp",
    "flow": "hpp",
    "method": "bitcoin",
    "currency": "ETH",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_ltc_hpp",
    "flow": "hpp",
    "method": "bitcoin",
    "currency": "LTC",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_bch_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "BCH",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_btc_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "BTC",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_eth_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "ETH",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_ltc_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "LTC",
    "amount_min": 0.00001,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_usd_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_cash_eur_hpp",
    "flow": "hpp",
    "method": "bitcoin_cash",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "masterpass_rub_hpp",
    "flow": "hpp",
    "method": "masterpass",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_usd_hpp",
    "flow": "hpp",
    "method": "bank_card",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_usd_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_token_usd_hpp",
    "flow": "hpp",
    "method": "payment_card_token",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000,
    "fields": [
      {
        "key": "token",
        "type": "string",
        "label": {
          "en": "Token",
          "ru": "Токен",
          "uk": "Токен"
        },
        "hint": {
          "en": "Enter token",
          "ru": "Введите токен",
          "uk": "Введіть токен"
        },
        "regexp": "\/^[a-zA-Z_0-9]{32,128}$\/",
        "required": true,
        "position": 1
      }
    ]
  },
  {
    "code": "ethereum_eth_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "ETH",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "ethereum_btc_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "BTC",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "ethereum_bch_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "BCH",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "ethereum_ltc_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "LTC",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "ethereum_usd_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ethereum_eur_hpp",
    "flow": "hpp",
    "method": "ethereum",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "privatbank_ssk_uah_hpp",
    "flow": "hpp",
    "method": "privatbank_ssk",
    "currency": "UAH",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "privatbank_ssk_usd_hpp",
    "flow": "hpp",
    "method": "privatbank_ssk",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "litecoin_ltc_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "LTC",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "litecoin_btc_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "BTC",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "litecoin_bch_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "BCH",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "litecoin_eth_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "ETH",
    "amount_min": 0.00001,
    "amount_max": 1000
  },
  {
    "code": "litecoin_usd_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "litecoin_eur_hpp",
    "flow": "hpp",
    "method": "litecoin",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "privatbank_ssk_rub_hpp",
    "flow": "hpp",
    "method": "privatbank_ssk",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_wallet_usd_hpp",
    "flow": "hpp",
    "method": "liqpay_wallet",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_eur_hpp",
    "flow": "hpp",
    "method": "liqpay",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "liqpay_wallet_rub_hpp",
    "flow": "hpp",
    "method": "liqpay_wallet",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_eur_hpp",
    "flow": "hpp",
    "method": "bank_card",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_eur_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_token_eur_hpp",
    "flow": "hpp",
    "method": "payment_card_token",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000,
    "fields": [
      {
        "key": "token",
        "type": "string",
        "label": {
          "en": "Token",
          "ru": "Токен",
          "uk": "Токен"
        },
        "hint": {
          "en": "Enter token",
          "ru": "Введите токен",
          "uk": "Введіть токен"
        },
        "regexp": "\/^[a-zA-Z_0-9]{32,128}$\/",
        "required": true,
        "position": 1
      }
    ]
  },
  {
    "code": "privatbank_ssk_eur_hpp",
    "flow": "hpp",
    "method": "privatbank_ssk",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "masterpass_uah_hpp",
    "flow": "hpp",
    "method": "masterpass",
    "currency": "UAH",
    "amount_min": 1,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wme_hpp",
    "currency": "WME",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmz_hpp",
    "currency": "WMZ",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmr_hpp",
    "currency": "WMR",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmu_hpp",
    "currency": "WMU",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmb_hpp",
    "currency": "WMB",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmk_hpp",
    "currency": "WMK",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_wmx_hpp",
    "currency": "WMX",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "webmoneytransfer_rub_hpp",
    "currency": "RUB",
    "method": "webmoneytransfer",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "beeline_rub_hpp",
    "currency": "RUB",
    "method": "beeline",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "megafon_rub_hpp",
    "currency": "RUB",
    "method": "megafon",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "mts_rub_hpp",
    "currency": "RUB",
    "method": "mts",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "advcash_wallet_rub_hpp",
    "currency": "RUB",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "advcash_wallet_usd_hpp",
    "currency": "USD",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.10,
    "amount_max": 999999.00
  },
  {
    "code": "advcash_wallet_eur_hpp",
    "currency": "EUR",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.10,
    "amount_max": 999999.00
  },
  {
    "code": "advcash_wallet_uah_hpp",
    "currency": "UAH",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "advcash_wallet_gbp_hpp",
    "currency": "GBP",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "advcash_wallet_kzt_hpp",
    "currency": "KZT",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "advcash_wallet_brl_hpp",
    "currency": "BRL",
    "method": "advcash_wallet",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "yandexmoney_rub_hpp",
    "currency": "RUB",
    "method": "yandexmoney",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "exmo_rub_hpp",
    "currency": "RUB",
    "method": "exmo",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "exmo_usd_hpp",
    "currency": "USD",
    "method": "exmo",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "exmo_eur_hpp",
    "currency": "EUR",
    "method": "exmo",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "tele2ru_rub_hpp",
    "currency": "RUB",
    "method": "tele2ru",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "euroset_rub_hpp",
    "currency": "RUB",
    "method": "euroset",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "svyaznoy_rub_hpp",
    "currency": "RUB",
    "method": "svyaznoy",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_usd_hpp",
    "currency": "USD",
    "method": "perfectmoney",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_eur_hpp",
    "currency": "EUR",
    "method": "perfectmoney",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "qiwi_eur_hpp",
    "currency": "EUR",
    "method": "qiwi",
    "flow": "hpp",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона",
          "uk": "Введіть номер телефону"
        },
        "regexp": "\/^\\+\\d{10,14}$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "qiwi_usd_hpp",
    "currency": "USD",
    "method": "qiwi",
    "flow": "hpp",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона",
          "uk": "Введіть номер телефону"
        },
        "regexp": "\/^\\+\\d{10,14}$\/",
        "required": true,
        "position": 1
      }
    ],
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cash_rub_hpp",
    "currency": "RUB",
    "method": "cash",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cash_eur_hpp",
    "currency": "EUR",
    "method": "cash",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cash_usd_hpp",
    "currency": "USD",
    "method": "cash",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cash_uah_hpp",
    "currency": "UAH",
    "method": "cash",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_rub_hpp",
    "currency": "RUB",
    "method": "bitcoin",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_eur_hpp",
    "currency": "EUR",
    "method": "bitcoin",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bitcoin_usd_hpp",
    "currency": "USD",
    "method": "bitcoin",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "exmo_uah_hpp",
    "currency": "UAH",
    "method": "exmo",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "mminvoicing_gel_hpp",
    "currency": "GEL",
    "method": "mminvoicing",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "gemoney_gel_hpp",
    "currency": "GEL",
    "method": "gemoney",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "easypay_uah_hpp",
    "currency": "UAH",
    "method": "easypay",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_gel_hpp",
    "currency": "GEL",
    "method": "bank_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_gel_hpp",
    "currency": "GEL",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 500000
  },
  {
    "code": "psbretail_rub_hpp",
    "currency": "RUB",
    "method": "psbretail",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "alfaclick_rub_hpp",
    "currency": "RUB",
    "method": "alfaclick",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "alfaclick_eur_hpp",
    "currency": "EUR",
    "method": "alfaclick",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 50000
  },
  {
    "code": "alfaclick_kzt_hpp",
    "currency": "KZT",
    "method": "alfaclick",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 1000000
  },
  {
    "code": "alfaclick_usd_hpp",
    "currency": "USD",
    "method": "alfaclick",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 50000
  },
  {
    "code": "rbkmoney_rub_hpp",
    "currency": "RUB",
    "method": "rbkmoney",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "visacheckout_uah_hpp",
    "currency": "UAH",
    "method": "visacheckout",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_gbp_hpp",
    "currency": "GBP",
    "method": "bank_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_gbp_hpp",
    "currency": "GBP",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "bank_card_try_hpp",
    "currency": "TRY",
    "method": "bank_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_try_hpp",
    "currency": "TRY",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 500000
  },
  {
    "code": "payment_card_cad_hpp",
    "currency": "CAD",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_aud_hpp",
    "currency": "AUD",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payment_card_czk_hpp",
    "currency": "CZK",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 500000
  },
  {
    "code": "payment_card_pln_hpp",
    "currency": "PLN",
    "method": "payment_card",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 500000
  },
  {
    "code": "interkassa_uah_hpp",
    "currency": "UAH",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_usd_hpp",
    "currency": "USD",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_eur_hpp",
    "currency": "EUR",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_rub_hpp",
    "currency": "RUB",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_wmz_hpp",
    "currency": "WMZ",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_wme_hpp",
    "currency": "WME",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_wmr_hpp",
    "currency": "WMR",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "interkassa_wmu_hpp",
    "currency": "WMU",
    "method": "interkassa",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "geopaynet_grn_hpp",
    "currency": "GRN",
    "flow": "hpp",
    "method": "geopaynet",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "geopaynet_uah_hpp",
    "currency": "UAH",
    "flow": "hpp",
    "method": "geopaynet",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "paypal_usd_hpp",
    "currency": "USD",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "paypal_eur_hpp",
    "currency": "EUR",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "paypal_huf_hpp",
    "currency": "HUF",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "paypal_gbp_hpp",
    "currency": "GBP",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_citic_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_citic_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "industrial_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "industrial_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_guangfa_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_guangfa_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_merchants_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_merchants_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_postal_savings_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_postal_savings_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_of_china_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "bank_of_china",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "agricultural_bank_of_china_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "agricultural_bank_of_china",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_everbright_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_everbright_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_construction_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_construction_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "ping_an_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "ping_an_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_of_communication_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "bank_of_communication",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "industrial_and_commercial_bank_of_china_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "industrial_and_commercial_bank_of_china",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "shanghai_pudong_development_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "shanghai_pudong_development_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_minsheng_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_minsheng_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "china_union_pay_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "china_union_pay",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "siam_commercial_bank_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "siam_commercial_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "krung_thai_bank_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "krung_thai_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "krungsri_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "krungsri",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "uobt_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "uobt",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "kasikorn_bank_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "kasikorn_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bangko_bank_thb_hpp",
    "currency": "THB",
    "flow": "hpp",
    "method": "bangko_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "cimb_clicks_bank_myr_hpp",
    "currency": "MYR",
    "flow": "hpp",
    "method": "cimb_clicks_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "public_bank_myr_hpp",
    "currency": "MYR",
    "flow": "hpp",
    "method": "public_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "rhb_bank_myr_hpp",
    "currency": "MYR",
    "flow": "hpp",
    "method": "rhb_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "hong_leong_bank_myr_hpp",
    "currency": "MYR",
    "flow": "hpp",
    "method": "hong_leong_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "may_bank_myr_hpp",
    "currency": "MYR",
    "flow": "hpp",
    "method": "may_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "australia_and_new_zealand_banking_group_aud_hpp",
    "currency": "AUD",
    "flow": "hpp",
    "method": "australia_and_new_zealand_banking_group",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "westpac_aud_hpp",
    "currency": "AUD",
    "flow": "hpp",
    "method": "westpac",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "national_australia_bank_aud_hpp",
    "currency": "AUD",
    "flow": "hpp",
    "method": "national_australia_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "commonwealth_bank_aud_hpp",
    "currency": "AUD",
    "flow": "hpp",
    "method": "commonwealth_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "axis_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "axis_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "indian_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "indian_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "state_bank_of_india_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "state_bank_of_india",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "kotak_mahindra_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "kotak_mahindra_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "canara_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "canara_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "icici_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "icici_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "punjab_national_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "punjab_national_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_of_india_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "bank_of_india",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "idbi_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "idbi_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "standard_charter_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "standard_charter_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "karnataka_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "karnataka_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "hdfc_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "hdfc_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "yes_bank_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "yes_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "central_bank_of_india_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "central_bank_of_india",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "union_bank_of_india_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "union_bank_of_india",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_of_baroda_inr_hpp",
    "currency": "INR",
    "flow": "hpp",
    "method": "bank_of_baroda",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "mandiri_bank_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "mandiri_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_negara_indonesia_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "bank_negara_indonesia",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_central_asia_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "bank_central_asia",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bank_rakyat_indonesia_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "bank_rakyat_indonesia",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "permata_bank_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "permata_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "cimb_clicks_indonesia_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "cimb_clicks_indonesia",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "danamon_bank_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "danamon_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "btn_bank_idr_hpp",
    "currency": "IDR",
    "flow": "hpp",
    "method": "btn_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "acb_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "acb_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "vietcom_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "vietcom_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "vietin_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "vietin_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "sacom_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "sacom_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bidv_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "bidv_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "techom_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "techom_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "dong_a_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "dong_a_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "exim_bank_vnd_hpp",
    "currency": "VND",
    "flow": "hpp",
    "method": "exim_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "may_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "may_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "permata_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "permata_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "bri_bank_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "bri_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "busan_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "busan_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "citibank_korea_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "citibank_korea",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "daegu_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "daegu_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "everrich_postal_savings_and_insurance_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "everrich_postal_savings_and_insurance_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "hana_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "hana_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "industrial_bank_of_korea_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "industrial_bank_of_korea",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "kookmin_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "kookmin_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "korea_development_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "korea_development_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "kwangju_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "kwangju_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "mg_bank_saemmul_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "mg_bank_saemmul",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "nonghyup_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "nonghyup_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "shinhan_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "shinhan_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "standard_chartered_bank_korea_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "standard_chartered_bank_korea",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "suhyup_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "suhyup_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "woori_bank_krw_hpp",
    "currency": "KRW",
    "flow": "hpp",
    "method": "woori_bank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "crypto_btc_hpp",
    "currency": "BTC",
    "flow": "hpp",
    "method": "crypto",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "wechat_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "wechat",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "qqpay_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "qqpay",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "alipay_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "alipay",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "unionpay_qr_cny_hpp",
    "currency": "CNY",
    "flow": "hpp",
    "method": "unionpay_qr",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "perfectmoney_account_usd_hpp",
    "currency": "USD",
    "method": "perfectmoney_account",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_account_eur_hpp",
    "currency": "EUR",
    "method": "perfectmoney_account",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_account_btc_hpp",
    "currency": "BTC",
    "method": "perfectmoney_account",
    "flow": "hpp",
    "amount_min": 0.001,
    "amount_max": 1000
  },
  {
    "code": "perfectmoney_voucher_usd_hpp",
    "currency": "USD",
    "method": "perfectmoney_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_voucher_eur_hpp",
    "currency": "EUR",
    "method": "perfectmoney_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "perfectmoney_voucher_btc_hpp",
    "currency": "BTC",
    "method": "perfectmoney_voucher",
    "flow": "hpp",
    "amount_min": 0.001,
    "amount_max": 1000
  },
  {
    "code": "payment_card_email_eur_hpp",
    "currency": "EUR",
    "method": "payment_card_email",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000.00,
    "fields": [
      {
        "key": "email",
        "type": "string",
        "label": {
          "en": "Email",
          "ru": "Email",
          "uk": "Email"
        },
        "hint": {
          "en": "Enter email",
          "ru": "Введите email",
          "uk": "Введіть email"
        },
        "regexp": "\/^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$$\/",
        "required": true,
        "position": 1
      }
    ]
  },
  {
    "code": "payeer_rub_hpp",
    "flow": "hpp",
    "method": "payeer",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payeer_usd_hpp",
    "flow": "hpp",
    "method": "payeer",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "payeer_eur_hpp",
    "flow": "hpp",
    "method": "payeer",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "visa_rub_hpp",
    "flow": "hpp",
    "method": "visa",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "mastercard_rub_hpp",
    "flow": "hpp",
    "method": "mastercard",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "maestro_rub_hpp",
    "flow": "hpp",
    "method": "maestro",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "mir_rub_hpp",
    "flow": "hpp",
    "method": "mir",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "skrill_eur_hpp",
    "flow": "hpp",
    "method": "skrill",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "neteller_eur_hpp",
    "flow": "hpp",
    "method": "neteller",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "neteller_usd_hpp",
    "flow": "hpp",
    "method": "neteller",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_usd_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_eur_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_gbp_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "GBP",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_chf_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "CHF",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_bgn_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "BGN",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_czk_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "CZK",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_dkk_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "DKK",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_hrk_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "HRK",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_huf_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "HUF",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_nok_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "NOK",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_pln_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "PLN",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_ron_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "RON",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecard_sek_hpp",
    "flow": "hpp",
    "method": "paysafecard",
    "currency": "SEK",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paysafecash_eur_hpp",
    "flow": "hpp",
    "method": "paysafecash",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "resursbank_eur_hpp",
    "flow": "hpp",
    "method": "resursbank",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "visa_eur_hpp",
    "flow": "hpp",
    "method": "visa",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "mastercard_eur_hpp",
    "flow": "hpp",
    "method": "mastercard",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "visaelectron_eur_hpp",
    "flow": "hpp",
    "method": "visaelectron",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "maestro_eur_hpp",
    "flow": "hpp",
    "method": "maestro",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "americanexpress_eur_hpp",
    "flow": "hpp",
    "method": "americanexpress",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "dinersclub_eur_hpp",
    "flow": "hpp",
    "method": "dinersclub",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "jcb_eur_hpp",
    "flow": "hpp",
    "method": "jcb",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cartebleue_eur_hpp",
    "flow": "hpp",
    "method": "cartebleue",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "dankort_eur_hpp",
    "flow": "hpp",
    "method": "dankort",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "postepay_eur_hpp",
    "flow": "hpp",
    "method": "postepay",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "cartasi_eur_hpp",
    "flow": "hpp",
    "method": "cartasi",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "rapidtransfer_eur_hpp",
    "flow": "hpp",
    "method": "rapidtransfer",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "giropay_eur_hpp",
    "flow": "hpp",
    "method": "giropay",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "directdebit_eur_hpp",
    "flow": "hpp",
    "method": "directdebit",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "klarna_eur_hpp",
    "flow": "hpp",
    "method": "klarna",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "nordeasolo_eur_hpp",
    "flow": "hpp",
    "method": "nordeasolo",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ideal_eur_hpp",
    "flow": "hpp",
    "method": "ideal",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "eps_eur_hpp",
    "flow": "hpp",
    "method": "eps",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "polipayonline_aud_hpp",
    "flow": "hpp",
    "method": "polipayonline",
    "currency": "AUD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "przelewy24_eur_hpp",
    "flow": "hpp",
    "method": "przelewy24",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "piastrix_eur_hpp",
    "flow": "hpp",
    "method": "piastrix",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "piastrix_usd_hpp",
    "flow": "hpp",
    "method": "piastrix",
    "currency": "USD",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "piastrix_rub_hpp",
    "flow": "hpp",
    "method": "piastrix",
    "currency": "RUB",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "epaybg_eur_hpp",
    "flow": "hpp",
    "method": "epaybg",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "trustly_eur_hpp",
    "flow": "hpp",
    "method": "trustly",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "alipay_eur_hpp",
    "flow": "hpp",
    "method": "alipay",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "astropaydirect_eur_hpp",
    "flow": "hpp",
    "method": "astropaydirect",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "astropaymanual_eur_hpp",
    "flow": "hpp",
    "method": "astropaymanual",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "astropaycash_eur_hpp",
    "flow": "hpp",
    "method": "astropaycash",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "astropayunion_eur_hpp",
    "flow": "hpp",
    "method": "astropayunion",
    "currency": "EUR",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "paypal_cad_hpp",
    "currency": "CAD",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "paypal_aud_hpp",
    "currency": "AUD",
    "flow": "hpp",
    "method": "paypal",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "applepay_uah_hpp",
    "currency": "UAH",
    "flow": "hpp",
    "method": "applepay",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "swift_usd_invoice",
    "currency": "USD",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "swift_eur_invoice",
    "currency": "EUR",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "sberbank_rub_hpp",
    "currency": "RUB",
    "flow": "hpp",
    "method": "sberbank",
    "amount_min": 0.01,
    "amount_max": 9999999
  },
  {
    "code": "swift_gbp_invoice",
    "currency": "GBP",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "swift_cny_invoice",
    "currency": "CNY",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "swift_jpy_invoice",
    "currency": "JPY",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "swift_rub_invoice",
    "currency": "RUB",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "swift_kzt_invoice",
    "currency": "KZT",
    "flow": "invoice",
    "method": "swift",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "smsbilling_rub_hpp",
    "currency": "RUB",
    "flow": "hpp",
    "method": "smsbilling",
    "amount_min": 10,
    "amount_max": 25000
  },
  {
    "code": "mercuryo_btc_hpp",
    "currency": "BTC",
    "flow": "hpp",
    "method": "mercuryo",
    "amount_min": 0.002,
    "amount_max": 999999
  },
  {
    "code": "payment_card_kzt_hpp",
    "flow": "hpp",
    "method": "payment_card",
    "currency": "KZT",
    "amount_min": 0.01,
    "amount_max": 1000000
  },
  {
    "code": "ecopayz_usd_hpp",
    "currency": "USD",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_eur_hpp",
    "currency": "EUR",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_uah_hpp",
    "currency": "UAH",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_rub_hpp",
    "currency": "RUB",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_gbp_hpp",
    "currency": "GBP",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_aud_hpp",
    "currency": "AUD",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_cad_hpp",
    "currency": "CAD",
    "fields": [
      {
        "key": "first_name",
        "type": "string",
        "label": {
          "en": "First name",
          "ru": "Имя",
          "uk": "Ім`я"
        },
        "hint": {
          "en": "Enter first name",
          "ru": "Введите имя",
          "uk": "Введіть ім`я"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "last_name",
        "type": "string",
        "label": {
          "en": "Last name",
          "ru": "Фамилия",
          "uk": "Прізвище"
        },
        "hint": {
          "en": "Enter last name",
          "ru": "Введите фамилию",
          "uk": "Введіть прізвище"
        },
        "regexp": "\/^.{0,255}$\/",
        "required": true,
        "position": 2
      },
      {
        "key": "date_of_birth",
        "type": "string",
        "label": {
          "en": "Date of birth",
          "ru": "Дата рождения",
          "uk": "Дата народження"
        },
        "hint": {
          "en": "Enter date of birth",
          "ru": "Введите дату рождения",
          "uk": "Введіть дату народження"
        },
        "regexp": "\/^\\d{4}-\\d{2}-\\d{2}$\/",
        "required": true,
        "position": 3
      }
    ],
    "flow": "hpp",
    "method": "ecopayz",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecopayz_voucher_usd_hpp",
    "currency": "USD",
    "method": "ecopayz_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ecopayz_voucher_eur_hpp",
    "currency": "EUR",
    "method": "ecopayz_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ecopayz_voucher_gbp_hpp",
    "currency": "GBP",
    "method": "ecopayz_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "ecopayz_voucher_cad_hpp",
    "currency": "CAD",
    "method": "ecopayz_voucher",
    "flow": "hpp",
    "amount_min": 0.01,
    "amount_max": 100000
  },
  {
    "code": "muchbetter_usd_invoice",
    "currency": "USD",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона MuchBetter кошелька",
          "uk": "Введіть номер телефону MuchBetter гаманця"
        },
        "example": "+447624222721",
        "regexp": "\/^\\+\\d{1,15}$\/",
        "required": true,
        "position": 1
      }
    ],
    "flow": "invoice",
    "method": "muchbetter",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "muchbetter_eur_invoice",
    "currency": "EUR",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона MuchBetter кошелька",
          "uk": "Введіть номер телефону MuchBetter гаманця"
        },
        "example": "+447624222721",
        "regexp": "\/^\\+\\d{1,15}$\/",
        "required": true,
        "position": 1
      }
    ],
    "flow": "invoice",
    "method": "muchbetter",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "muchbetter_gbp_invoice",
    "currency": "GBP",
    "fields": [
      {
        "key": "phone",
        "type": "string",
        "label": {
          "en": "Phone number",
          "ru": "Номер телефона",
          "uk": "Номер телефону"
        },
        "hint": {
          "en": "Enter phone number",
          "ru": "Введите номер телефона MuchBetter кошелька",
          "uk": "Введіть номер телефону MuchBetter гаманця"
        },
        "example": "+447624222721",
        "regexp": "\/^\\+\\d{1,15}$\/",
        "required": true,
        "position": 1
      }
    ],
    "flow": "invoice",
    "method": "muchbetter",
    "amount_min": 0.01,
    "amount_max": 999999
  },
  {
    "code": "ecobanq_inr_transfer",
    "currency": "INR",
    "fields": [
      {
        "key": "user_id",
        "type": "string",
        "label": {
          "en": "user ID",
          "ru": "user ID",
          "uk": "user ID"
        },
        "hint": {
          "en": "Enter user ID",
          "ru": "Введите user ID",
          "uk": "Введіть user ID"
        },
        "example": "Q123456",
        "regexp": "\/^[Q]\\d{6}$\/",
        "required": true,
        "position": 1
      },
      {
        "key": "password",
        "type": "string",
        "label": {
          "en": "Password",
          "ru": "Password",
          "uk": "Password"
        },
        "hint": {
          "en": "Enter password",
          "ru": "Введите пароль",
          "uk": "Введіть пароль"
        },
        "example": "password",
        "regexp": "\/^.{1,255}$\/",
        "required": true,
        "position": 2
      }
    ],
    "flow": "transfer",
    "method": "ecobanq",
    "amount_min": 0.01,
    "amount_max": 999999
  }
] as OftService[];