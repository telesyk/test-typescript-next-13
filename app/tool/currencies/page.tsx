import getData from '@/app/utils/data'
import {
  CurrenciesContainer,
  CurrenciesConverter,
} from '@/app/components/currencies'
import { BsCurrencyExchange } from 'react-icons/bs'

export const metadata = {
  title: 'Currencies | Tools',
}

const API = {
  fakeUrl:
    'https://my-json-server.typicode.com/telesyk/test-typescript-next-13/blob/main',
  original: 'https://api.currencyapi.com/v3',
  key: 'cur_live_JX03xdO4e4AlSpj7YrkgGrC2CUCX67S1uNuumjUC',
  endpoints: ['latest', 'currencies'],
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

  const defaultToChange = Object.keys(currenciesBase['USD'])
  const defaultData =
    errorCurrenciesBase || errorCurrenciesExchange
      ? { currencies: [], base: '' }
      : {
          currencies: defaultToChange.map(item => ({
            code: item,
            value: currenciesBase['USD'][item].value,
            symbol: currenciesToExchange[item].symbol,
          })),
          base: 'USD',
        }

  return (
    <>
      <h2 className="text-4xl leading-10 flex items-center justify-center gap-2 mb-8">
        <span>Currencies page</span>
        <BsCurrencyExchange />
      </h2>
      <div className="flex flex-col xl:flex-row gap-8 max-w-xl xl:max-w-5xl mx-auto p-8 rounded-lg bg-slate-100/40">
        {!errorCurrenciesBase && !!currenciesBase ? (
          <div className="p-6 border rounded-lg bg-slate-600/50">
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
        <div className="py-8 px-4 sm:px-6 border rounded-lg bg-slate-600/50 xl:basis-1/2">
          <h2 className="mb-4 text-2xl font-bold font-mono">
            Currency converter
          </h2>
          <CurrenciesConverter
            latest={currenciesBase}
            currencies={currenciesToExchange}
          />
        </div>
      </div>
    </>
  )
}
