import { getCurrentUser } from '~/services/session'

async function Home() {
  const session = await getCurrentUser()
  console.log(session)

  return (
    <>
      Home screen
    </>
  )
}

export default Home
