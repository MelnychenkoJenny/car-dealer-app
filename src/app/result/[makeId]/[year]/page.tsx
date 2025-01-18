import { Suspense } from 'react'

import Image from 'next/image'

import Button from '@/app/components/Button'
import Loader from '@/app/components/Loader'
import ModelsList from '@/app/components/ModelsList'
import { fetchMakes, fetchModels } from '@/app/utils/api'
import { getCurrentYear } from '@/app/utils/getCurrentYear'

import { Models, Params } from '@/app/types'

export async function generateStaticParams() {
  const makes = await fetchMakes()
  const years = getCurrentYear(2025)
  const paths = []

  for (const make of makes.slice(0, 10)) {
    for (const year of years) {
      paths.push({ makeId: make.MakeId.toString(), year: year.toString() })
    }
  }

  return paths
}

export default async function ResultPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { makeId, year } = await params
  const models = (await fetchModels(makeId, year)) as Models[]

  return (
    <main
      className={
        'min-h-screen bg-gradient-to-t from-blue-50 via-blue-100 to-blue-200 flex justify-center p-2'
      }
    >
      <Suspense fallback={<Loader />}>
        {models.length > 0 ? (
          <div>
            <h1 className={'text-3xl font-semibold text-gray-800 mb-6'}>
              {'Models for Make: '}
              <span className={'text-blue-600'}>{models[0].Make_Name}</span>
              {' and Year: '}
              <span className={'text-blue-600'}>{year}</span>
            </h1>
            <ModelsList models={models} />
          </div>
        ) : (
          <div className={'flex flex-col justify-evenly'}>
            <p className={'text-2xl font-extrabold text-blue-600 text-center'}>
              {'No models found for this combination.'}
            </p>
            <div className={'flex justify-center'}>
              <Image
                alt={'Sad Car Image'}
                className={'w-[400px] h-auto'}
                height={100}
                priority
                src={'/emptyCar.png'}
                width={400}
              />
            </div>
            <Button isDisabled={false} link={'/'} label={'Go HOME'} />
          </div>
        )}
      </Suspense>
    </main>
  )
}
