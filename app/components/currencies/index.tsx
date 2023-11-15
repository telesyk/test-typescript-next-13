'use client'

import CurrencyItem from './CurrencyItem'
import { CurrenciesProps, CurrencyProps } from '@/app/types'

export function CurrenciesContainer({ data }: CurrenciesProps) {
  const { currencies = [], base = '' } = data ?? {}
  const extendedCurrencies = currencies.map(item => ({
    ...item,
    base,
  }))

  return (
    <>
      {extendedCurrencies.map((curr: CurrencyProps) => (
        <CurrencyItem key={curr.code} currency={curr} />
      ))}
    </>
  )
}

export function CurrenciesExchange() {
  return (
    <div className="flex flex-wrap gap-2 justify-between sm:flex-nowrap">
      <div className="basis-full sm:basis-2/5">
        <div className="w-full my-2 text-gray-900">
          <select name="selectBaseCurrency" id="selectBaseCurrency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
        <label className="text-gray-900">
          <input
            className="py-1 px-3 rounded-lg border"
            type="number"
            id="currencyBase"
            name="currencyBase"
            placeholder="USD"
          />
        </label>
      </div>
      <div className="basis-full sm:basis-2/5">
        <div className="w-full my-2 text-gray-900">
          <select
            defaultValue="EUR"
            name="selectChangeCurrency"
            id="selectChangeCurrency"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
        <label className="text-gray-900">
          <input
            className="py-1 px-3 rounded-lg border"
            type="number"
            id="currencyChange"
            name="currencyChange"
            placeholder="EUR"
          />
        </label>
      </div>
      <div className="basis-full self-end sm:basis-1/5 py-1 font-bold text-right">
        12.34 $
      </div>
    </div>
  )
}
