export type CurrencyProps = {
  code: string
  value: number
  base?: string
  symbol?: string
}

export type CurrenciesProps = {
  currencies: any
  latest: any
  base: string | ''
  handleLatestList?: (code: string) => void | Function
}

export type SelectProps = {
  value: string
  label?: string
}

export type CurrencySelectProps = {
  options: SelectProps[]
  selected: string
  id: string
  handleChange: (event: any) => void
}
