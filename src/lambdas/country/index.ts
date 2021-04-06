import { CountryRepository } from '../../shared/repository'

const countryRepository = new CountryRepository()

export const handler = (event:any, context:any) => {
  console.log(event, context)
  const response = countryRepository.getAll()
  console.log(response)
}

handler({}, {})
