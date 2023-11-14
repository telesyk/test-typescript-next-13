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
    'CNY',
    'EUR',
    'GBP',
    'HUF',
    'INR',
    'JPY',
    'PLN',
    'TRY',
    'UAH',
    'USD',
    'BTC',
    'ETH',
    'USDT',
  ],
}
const FAKE_ENDPOINT_LATEST = `${API.fakeUrl}/${API.endpoints[0]}`
const FAKE_ENDPOINT_CURRENCIES = `${API.fakeUrl}/${API.endpoints[1]}`

export const metadata = {
  title: 'Currencies | Tools',
}

const getDefaultData = async (url: string) => await getData(url)

export default async function Currencies() {
  const [data, error] = await getDefaultData(FAKE_ENDPOINT_LATEST)
  const [currenciesList, errorCurrencies] = await getDefaultData(
    FAKE_ENDPOINT_CURRENCIES,
  )

  const defaultData = {
    currencies: [
      {
        ...data['USD'][API.baseCurrencies[0]],
        symbol: currenciesList[API.baseCurrencies[0]].symbol,
      },
      {
        ...data['USD'][API.baseCurrencies[1]],
        symbol: currenciesList[API.baseCurrencies[1]].symbol,
      },
      {
        ...data['USD'][API.baseCurrencies[2]],
        symbol: currenciesList[API.baseCurrencies[2]].symbol,
      },
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
