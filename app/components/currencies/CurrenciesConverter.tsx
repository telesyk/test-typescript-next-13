import { useState } from 'react'
import { CurrenciesExchangeProps } from '@/app/types'
import CurrencySelect from './CurrencySelect'

export default function CurrenciesConverter({
  latest = {},
  currencies = {},
}: CurrenciesExchangeProps) {
  const latestList = Object.keys(latest)
  const baseOptions = latestList.map(item => ({
    value: item,
    label: `${currencies[item].symbol} ${currencies[item].name}`,
  }))

  const exchangeList = Object.keys(currencies)
  const exchangeOptions = exchangeList.map(item => ({
    value: item,
    label: `${currencies[item].symbol} ${currencies[item].name}`,
  }))

  const [convertData, setConvertData] = useState({
    base: latestList[0],
    change: latestList[1],
    changeRate: latest[latestList[1]].value || 0,
    changeSymbol: currencies[latestList[1]].symbol,
    inputValue: 0,
    result: latest[latestList[1]].value || 0,
  })

  const handleBaseSelect = (event: { target: { value: string } }) => {
    const currencyCode = event.target.value
    setConvertData(prevData => ({
      ...prevData,
      base: currencyCode,
      changeRate: latest[prevData.change].value,
      changeSymbol: currencies[prevData.change].symbol || prevData.change,
      result: 0,
      inputValue: 0,
    }))
  }

  const handleExchangeSelect = (event: { target: { value: string } }) => {
    const currencyCode = event.target.value
    setConvertData(prevData => ({
      ...prevData,
      change: currencyCode,
      changeRate: latest[currencyCode].value,
      changeSymbol: currencies[currencyCode].symbol || currencyCode,
      result: 0,
      inputValue: 0,
    }))
  }

  const handleCurrencyInput = (event: any) => {
    const inputValue = Number(event.target.value)
    setConvertData(prevState => ({
      ...prevState,
      result: inputValue * prevState.changeRate,
      inputValue: inputValue,
    }))
  }

  return (
    <div className="flex flex-wrap gap-2 justify-between sm:flex-nowrap">
      <div className="basis-full sm:basis-1/2">
        <div className="w-full my-2 text-gray-900">
          <CurrencySelect
            id="selectBaseCurrency"
            selected={convertData.base}
            options={baseOptions}
            handleChange={handleBaseSelect}
          />
        </div>
        <label className="text-gray-900">
          <input
            className="py-1 px-3 rounded-lg border"
            type="number"
            id="currencyBase"
            name="currencyBase"
            placeholder="0"
            value={convertData.inputValue}
            onChange={handleCurrencyInput}
          />
        </label>
      </div>
      <div className="basis-full sm:basis-1/2">
        <div className="w-full my-2 text-gray-900">
          <CurrencySelect
            id="selectChangeCurrency"
            selected={convertData.change}
            options={exchangeOptions}
            handleChange={handleExchangeSelect}
          />
        </div>
        <div className="py-1 font-bold">
          {convertData.changeSymbol} {convertData.result.toFixed(2)}
        </div>
      </div>
    </div>
  )
}
