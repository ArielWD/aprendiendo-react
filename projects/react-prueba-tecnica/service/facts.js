const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getRamdonFact = () => {
  return fetch(CAT_ENDPOINT_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
