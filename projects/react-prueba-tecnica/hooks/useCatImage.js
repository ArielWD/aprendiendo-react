import { useEffect, useState } from 'react'
import { getImageUrl } from '../service/image'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    getImageUrl(fact).then(setImageUrl)
  }, [fact])

  return { imageUrl }
}
