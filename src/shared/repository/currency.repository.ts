export class CurrencyRepository {
  getById (id: number) {
    const currencies = [{ id: 1, name: 'BRL' }, { id: 2, name: 'USD' }]
    return currencies.find((item) => item.id === id)
  }
}
