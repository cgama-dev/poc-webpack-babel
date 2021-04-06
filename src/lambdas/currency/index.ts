import { CurrencyRepository } from '../../shared/repository'

const currencyRepository = new CurrencyRepository()

export const handler = (event, context) => {
  console.log(event, context)
  const response = currencyRepository.getById(1)
  console.log(response)
}
handler({}, {})
