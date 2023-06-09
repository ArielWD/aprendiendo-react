export const getImageUrl = (fact) => {
  const firstWord = fact.split(' ', 3).join(' ')
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  return fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return `${CAT_PREFIX_IMAGE_URL}${url}`
    })
}
