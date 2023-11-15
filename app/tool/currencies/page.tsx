import getData from '@/app/utils/data'
import {
  CurrenciesContainer,
  CurrenciesExchange,
} from '@/app/components/currencies'

export const metadata = {
  title: 'Currencies | Tools',
}

const API = {
  fakeUrl:
    'https://my-json-server.typicode.com/telesyk/test-typescript-next-13/blob/main',
  original: 'https://api.currencyapi.com/v3',
  key: 'cur_live_JX03xdO4e4AlSpj7YrkgGrC2CUCX67S1uNuumjUC',
  endpoints: ['latest', 'currencies'],
  baseCurrencies: ['BTC', 'EUR', 'UAH', 'USD'],
  exchangeCurrencies: [
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

const getDefaultData = async (url: string) => await getData(url)

export default async function Currencies() {
  const [currenciesBase, errorCurrenciesBase] = await getDefaultData(
    FAKE_ENDPOINT_LATEST,
  )
  const [currenciesToExchange, errorCurrenciesExchange] = await getDefaultData(
    FAKE_ENDPOINT_CURRENCIES,
  )

  const defaultData =
    errorCurrenciesBase || errorCurrenciesExchange
      ? { currencies: [], base: '' }
      : {
          currencies: [
            {
              ...currenciesBase['USD'][API.baseCurrencies[0]],
              symbol: currenciesToExchange[API.baseCurrencies[0]].symbol,
            },
            {
              ...currenciesBase['USD'][API.baseCurrencies[1]],
              symbol: currenciesToExchange[API.baseCurrencies[1]].symbol,
            },
            {
              ...currenciesBase['USD'][API.baseCurrencies[2]],
              symbol: currenciesToExchange[API.baseCurrencies[2]].symbol,
            },
          ],
          base: 'USD',
        }

  return (
    <>
      <h2 className="text-4xl text-center leading-10">Currencies page!</h2>
      <div className="max-w-2xl mx-auto my-8 p-8 rounded-lg bg-slate-100/40">
        {!errorCurrenciesBase && !!currenciesBase ? (
          <div className="my-8 p-8 border rounded-lg bg-slate-600/50">
            <p className="mb-4 text-2xl font-bold font-mono">
              Currencies rates (base: {defaultData.base})
            </p>
            <CurrenciesContainer data={defaultData} />
          </div>
        ) : (
          <div className="p-4 bg-rose-500/30 font-mono">
            <p>Some troubles here... Call the 404</p>
          </div>
        )}
        <div className="my-8 py-8 px-4 sm:px-6 border rounded-lg bg-slate-600/50">
          <h2 className="mb-4 text-2xl font-bold font-mono">
            Currency converter
          </h2>
          <CurrenciesExchange />
        </div>
      </div>
    </>
  )
}
