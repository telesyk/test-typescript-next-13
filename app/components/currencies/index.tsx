'use client'

type CurrencyProps = {
  code: string
  value: number
}

type CurrenciesProps = {
  data: {
    currencies: CurrencyProps[]
    base: string
  } | null
}

export const CurrenciesContainer = ({ data }: CurrenciesProps) => {
  const { currencies = [], base } = data ?? {}

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 border rounded-lg bg-slate-500/40">
      <p className="text-2xl">Base currency {base}</p>
      {currencies.map((curr: CurrencyProps) => (
        <div key={curr.code} className="flex gap-4 justify-between">
          <div className="font-bold">{curr.code}</div>
          <div className="text-right">{curr.value}</div>
        </div>
      ))}
    </div>
  )
}
