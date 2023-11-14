'use client'

import CurrencyItem from './CurrencyItem'
import { CurrenciesProps, CurrencyProps } from '@/app/types'

export const CurrenciesContainer = ({ data }: CurrenciesProps) => {
  const { currencies = [], base = '' } = data ?? {}
  const extendedCurrencies = currencies.map(item => ({
    ...item,
    base,
  }))

  console.log(extendedCurrencies)

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 border rounded-lg bg-slate-500/40">
      <p className="text-2xl">Base currency {base}</p>
      {extendedCurrencies.map((curr: CurrencyProps) => (
        <CurrencyItem key={curr.code} currency={curr} />
      ))}
    </div>
  )
}
