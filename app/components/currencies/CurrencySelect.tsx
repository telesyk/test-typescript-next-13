import { SelectProps, CurrencySelectProps } from '@/app/types'

export default function CurrencySelect({
  options,
  selected,
  id,
  handleChange,
}: CurrencySelectProps) {
  return (
    <select defaultValue={selected} name={id} id={id} onChange={handleChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label || value}
        </option>
      ))}
    </select>
  )
}
