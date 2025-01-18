'use client'

import FilterSection from '@/components/FilterSection'

export default function FilterPage() {
  return (
    <main
      className={
        'h-screen bg-gradient-to-t from-blue-50 via-blue-100 to-blue-200 flex justify-center p-2'
      }
    >
      <FilterSection />
    </main>
  )
}
