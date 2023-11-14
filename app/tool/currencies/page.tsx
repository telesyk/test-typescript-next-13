import getData from '@/app/utils/data'
import { CurrenciesContainer } from '@/app/components/currencies'

const API = {
  fakeUrl:
    'https://my-json-server.typicode.com/telesyk/test-typescript-next-13/blob/main',
  original: 'https://api.currencyapi.com/v3',
  key: 'cur_live_JX03xdO4e4AlSpj7YrkgGrC2CUCX67S1uNuumjUC',
  endpoints: ['latest', 'currencies'],
  baseCurrencies: ['BTC', 'EUR', 'UAH', 'USD'],
  availiable: [
    'AUD',
    'CNY',
    'EUR',
    'GBP',
    'GIP',
    'HUF',
    'ILS',
    'INR',
    'JPY',
    'MDL',
    'NPR',
    'PLN',
    'TRY',
    'UAH',
    'USD',
    'XAF',
    'XAG',
    'XAU',
    'XCD',
    'XOF',
    'ZAR',
    'XPT',
    'XPD',
    'BTC',
    'ETH',
    'BNB',
    'DOT',
    'MATIC',
    'USDT',
    'BUSD',
  ],
}

export const metadata = {
  title: 'Currencies | Tools',
}

const getDefaultData = async () =>
  await getData(`${API.fakeUrl}/${API.endpoints[0]}`)

export default async function Currencies() {
  const [data, error] = await getDefaultData()

  const defaultData = {
    currencies: [
      data['USD'][API.baseCurrencies[0]],
      data['USD'][API.baseCurrencies[1]],
      data['USD'][API.baseCurrencies[2]],
    ],
    base: 'USD',
  }

  return (
    <>
      <h1 className="text-4xl text-center leading-10">Currencies page!</h1>
      <div className="max-w-2xl mx-auto my-8 p-8 border rounded-lg bg-slate-100/40">
        {!error && !!data ? (
          <CurrenciesContainer data={defaultData} />
        ) : (
          <div className="p-4 bg-rose-500/30 font-mono">
            <p>Some troubles here... Check dev-console</p>
          </div>
        )}
      </div>
    </>
  )
}
