import CurrencyItem from './CurrencyItem'

export default function CurrenciesRates({ currencies, base }: any) {
  return (
    <>
      {currencies.map((item: any) => (
        <CurrencyItem key={item.code} currency={{ ...item, base }} />
      ))}
    </>
  )
}
