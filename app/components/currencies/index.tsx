'use client'

import { useState } from 'react'
import { CurrenciesProps } from '@/app/types'
import { CurrenciesContext } from '@/app/context'
import CurrenciesRates from './CurrenciesRates'
import CurrenciesConverter from './CurrenciesConverter'

export function CurrenciesContainer({
  currencies,
  latest,
  base,
}: CurrenciesProps) {
  const [baseCurrency, setBaseCurrency] = useState(base)
  const [convertList, setConvertList] = useState(latest[base])

  const rateList = Object.keys(convertList)
  const newListOptions = rateList.map((item: any) => ({
    code: item,
    value: convertList[item].value,
    symbol: currencies[item].symbol,
  }))

  const handleBaseList = (code: string) => {
    setBaseCurrency(code)
    setConvertList(latest[code])
  }

  return (
    <CurrenciesContext.Provider
      value={{
        currencies,
        latest: convertList,
        base: baseCurrency,
        handleLatestList: handleBaseList,
      }}
    >
      <div className="p-6 border rounded-lg bg-slate-600/50">
        <p className="mb-4 text-2xl font-bold font-mono">
          Currencies rates (base: {baseCurrency})
        </p>
        <CurrenciesRates currencies={newListOptions} base={baseCurrency} />
      </div>

      <div className="py-8 px-4 sm:px-6 border rounded-lg bg-slate-600/50 xl:basis-1/2">
        <h2 className="mb-4 text-2xl font-bold font-mono">
          Currency converter
        </h2>
        <CurrenciesConverter />
      </div>
    </CurrenciesContext.Provider>
  )
}
