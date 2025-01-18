import { FC } from 'react'

import { ModelsListPropstype } from './types'

const ModelsList: FC<ModelsListPropstype> = ({ models }) => (
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
        <h2 className={'text-xl font-semibold text-gray-800'}>{Model_Name}</h2>
      </div>
    ))}
  </div>
)

export default ModelsList
