import { CurrencyProps } from '@/app/types'

export default function CurrencyItem({
  currency,
}: {
  currency: CurrencyProps
}) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="basis-1/5 font-bold">{currency.base}</div>
      <div className="basis-1/5 font-bold">{currency.code}</div>
      <div className="basis-3/5 text-right">
        {currency.value.toFixed(2)} {currency?.symbol}
      </div>
    </div>
  )
}
