import * as api from '~/services/api'

import Menu from '~/components/Menu'
import Welcome from '~/components/Welcome'
import SayHi from '~/components/Memoji/SayHi'
import Categories from '~/components/Categories'
import About from '~/components/About'
import Contact from '~/components/Contact'

import styles from './Home.module.css'
import { getServerSession } from "next-auth/next"
import { authOptions } from "~/app/api/auth/[...nextauth]/route"

async function Home() {
  const session = await getServerSession(authOptions)
  return <pre>{JSON.stringify(session, null, 2)}</pre>

  return (
    <>
      Home screen
    </>
  )
}

export default Home
