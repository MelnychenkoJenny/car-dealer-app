import { baseUrlMakeIdYear, baseUrlVehicle } from '../constants'

export async function fetchMakes() {
  try {
    const res = await fetch(`${baseUrlVehicle}/car?format=json`)

    if (!res.ok) {
      throw new Error(`Error fetching makes: ${res.statusText}`)
    }

    const data = await res.json()
    return data.Results
  } catch (error) {
    console.error('Error fetching makes:', error)

    return []
  }
}

export async function fetchModels(makeId: string, year: string) {
  try {
    const res = await fetch(
      `${baseUrlMakeIdYear}/makeId/${makeId}/modelyear/${year}?format=json`,
    )

    if (!res.ok) {
      throw new Error(
        `Error: makeId ${makeId} and year ${year}: ${res.statusText}`,
      )
    }

    const data = await res.json()
    return data.Results
  } catch (error) {
    console.error('Error fetching models:', error)

    return []
  }
}
