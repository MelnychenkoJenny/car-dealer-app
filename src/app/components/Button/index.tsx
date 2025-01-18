import { FC } from 'react'

import Link from 'next/link'

import { ButtonPropsType } from './types'

const Button: FC<ButtonPropsType> = ({ isDisabled, link, label }) => (
  <Link href={link}>
    <button
      disabled={isDisabled}
      className={`mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition' ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  </Link>
)

export default Button
