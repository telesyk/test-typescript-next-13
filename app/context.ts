import { createContext } from 'react'
import { CurrenciesProps } from './types'

export const CurrenciesContext = createContext<CurrenciesProps>({
  latest: {},
  currencies: {},
  base: '',
  handleLatestList: Function,
})
