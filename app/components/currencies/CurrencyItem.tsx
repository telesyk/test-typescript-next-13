import { CurrencyProps } from '@/app/types'

export default function CurrencyItem({
  currency,
}: {
  currency: CurrencyProps
}) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="basis-2/5 font-bold">
        {currency.base} / {currency.code}
      </div>
      <div className="basis-3/5 text-right flex flex-col">
        <div className="items-start">
          <span className="font-bold">{currency.value.toFixed(2)}</span>{' '}
          <span>{currency?.symbol}</span>
        </div>
        <div className="text-xs">{currency.value}</div>
      </div>
    </div>
  )
}
