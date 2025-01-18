export type Make = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

export type Models = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

export interface Params {
  makeId: string
  year: string
}
