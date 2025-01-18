import { FC } from 'react'

import { DropdownPropsType } from './types'

const Dropdown: FC<DropdownPropsType> = ({
  label,
  onChange,
  options,
  placeholder = 'Select an option',
  value,
}) => (
  <div className={'mb-4 relative'}>
    <label className={'block mb-1 font-semibold text-gray-700'}>{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={
        'border rounded p-2 w-full bg-white text-gray-700 transition-all focus:ring-2 focus:ring-blue-400 hover:border-blue-500 hover:shadow-md focus:outline-none'
      }
    >
      <option value={''}>{placeholder}</option>
      {options.map((option, index) => (
        <option key={option.value + index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

export default Dropdown
