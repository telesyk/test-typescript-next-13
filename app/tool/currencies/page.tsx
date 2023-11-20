import getData from '@/app/utils/data'
import { CurrenciesContainer } from '@/app/components/currencies'
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
const INIT_BASE = 'USD'
const FAKE_ENDPOINT_LATEST = `${API.fakeUrl}/${API.endpoints[0]}`
const FAKE_ENDPOINT_CURRENCIES = `${API.fakeUrl}/${API.endpoints[1]}`

const getDefaultData = async (url: string) => await getData(url)

export default async function Currencies() {
  const [currenciesLatest, errorCurrenciesLatest] = await getDefaultData(
    FAKE_ENDPOINT_LATEST,
  )
  const [currenciesList, errorCurrenciesList] = await getDefaultData(
    FAKE_ENDPOINT_CURRENCIES,
  )

  const isData = currenciesLatest && currenciesList
  const isError = errorCurrenciesLatest && errorCurrenciesList

  return (
    <>
      <h2 className="text-4xl leading-10 flex items-center justify-center gap-2 mb-8">
        <span>Currencies page</span>
        <BsCurrencyExchange />
      </h2>
      <div className="flex flex-col xl:flex-row gap-8 max-w-xl xl:max-w-5xl mx-auto p-8 rounded-lg bg-slate-100/40">
        {!isError && isData ? (
          <CurrenciesContainer
            latest={currenciesLatest}
            currencies={currenciesList}
            base={INIT_BASE}
          />
        ) : (
          <div className="p-4 bg-rose-500/30 font-mono">
            <p>Some troubles here... Call the 404</p>
          </div>
        )}
      </div>
    </>
  )
}
