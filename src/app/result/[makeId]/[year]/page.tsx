import { Suspense } from 'react'

import Loader from '@/components/Loader'
import ModelsList from '@/components/ModelsList'
import { fetchMakes } from '@/utils/api'
import { getCurrentYear } from '@/utils/getCurrentYear'

import { Params } from '@/types'

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

  return (
    <main
      className={
        'min-h-screen bg-gradient-to-t from-blue-50 via-blue-100 to-blue-200 flex justify-center p-2'
      }
    >
      <Suspense fallback={<Loader />}>
        <ModelsList makeId={makeId} year={year} />
      </Suspense>
    </main>
  )
}
