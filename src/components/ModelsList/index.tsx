import { FC } from 'react'

import { fetchModels } from '@/utils/api'

import Button from '../Button'
import EmptyModelsList from '../EmptyMidelsList'

import { Models, Params } from '@/types'

const ModelsList: FC<Params> = async ({ makeId, year }) => {
  const models = (await fetchModels(makeId, year)) as Models[]

  return !!models.length ? (
    <div>
      <h1 className={'text-3xl font-semibold text-gray-800 mb-6'}>
        {'Models for Make: '}
        <span className={'text-blue-600'}>{models[0].Make_Name}</span>
        {' and Year: '}
        <span className={'text-blue-600'}>{year}</span>
      </h1>
      <div
        className={
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        }
      >
        {models.map(({ Model_ID, Model_Name }, index) => (
          <div
            key={Model_ID + index}
            className={
              'bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors'
            }
          >
            <h2 className={'text-xl font-semibold text-gray-800'}>
              {Model_Name}
            </h2>
          </div>
        ))}
      </div>
      <Button isDisabled={false} link={'/'} label={'Go HOME'} />
    </div>
  ) : (
    <EmptyModelsList />
  )
}

export default ModelsList
