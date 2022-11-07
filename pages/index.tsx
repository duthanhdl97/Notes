import { useEffect } from 'react'
import queryUserPage from '../src/schema/queries/userPage'

export default function Home() {
  useEffect(() => {
    (async () => {
      const userPage = await queryUserPage()
      console.log('--------------', userPage)
    })()
  }, [])
  return (
    <div>aaaaaaaaa</div>
  )
}
