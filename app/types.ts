export type CurrencyProps = {
  code: string
  value: number
  base: string
  symbol?: string
}

export type CurrenciesProps = {
  data: {
    currencies: CurrencyProps[]
    base: string
  } | null
}
