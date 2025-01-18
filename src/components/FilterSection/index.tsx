import { useEffect, useState } from 'react'

import Image from 'next/image'

import { fetchMakes } from '@/utils/api'
import { getCurrentYear } from '@/utils/getCurrentYear'

import Button from '../Button'
import Dropdown from '../Dropdown'

import { Make } from '@/types'

const FilterSection = () => {
  const [makes, setMakes] = useState<Make[]>([])
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [years] = useState(() => getCurrentYear(2025))

  useEffect(() => {
    async function loadMakes() {
      const makesData = await fetchMakes()
      setMakes(makesData)
    }
    loadMakes()
  }, [])

  const link =
    selectedMake && selectedYear
      ? `/result/${selectedMake}/${selectedYear}`
      : '#'

  const optionsYear = years.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }))

  const optionsMake = makes.map((make) => ({
    label: make.MakeName,
    value: make.MakeId.toString(),
  }))

  return (
    <div
      className={
        'bg-white shadow-lg rounded-lg p-4 w-full max-w-md flex flex-col justify-between h-fit'
      }
    >
      <div>
        <h1
          className={'text-2xl font-extrabold text-blue-600 mb-6 text-center'}
        >
          {'Car Dealer Application'}
        </h1>
        <Dropdown
          label={'Select Vehicle Make:'}
          options={optionsMake}
          value={selectedMake}
          onChange={setSelectedMake}
          placeholder={'Choose Make'}
        />
        <Dropdown
          label={'Select Model Year:'}
          options={optionsYear}
          value={selectedYear}
          onChange={setSelectedYear}
          placeholder={'Choose Year'}
        />
        <Button
          isDisabled={!selectedMake || !selectedYear}
          link={link}
          label={'Next'}
        />
      </div>
      <div className={'flex justify-center'}>
        <Image
          src={'/car.png'}
          alt={'Car Image'}
          width={500}
          height={200}
          priority
          className={'w-full h-auto'}
        />
      </div>
    </div>
  )
}

export default FilterSection
