import Image from 'next/image'
import { getUserId } from '~/services/helpers'
import { getCurrentUser } from '~/services/session'

import styles from './Home.module.css'

async function fetchUser(userId: string) {
  const res = await fetch(`https://api.github.com/user/${userId}`)
  if (!res.ok) {
    return null
  }
 
  return res.json()
}

async function fetchRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`)
  if (!res.ok) {
    return null
  }
 
  return res.json()
}

async function Home() {
  const session = await getCurrentUser()
  const { user } = session

  const userId = getUserId(user.image)
  if (!userId) return (
    <div className={styles.wrapper}>
      <div className="text-2xl">No user id</div>
    </div>
  )

  const githubUser = await fetchUser(userId)
  if (!githubUser) return (
    <div className={styles.wrapper}>
      <div className="text-2xl">Not found Github user (Git API Rate limit)</div>
    </div>
  )
  const repositories = await fetchRepos(githubUser.login)

  return (
    <div className={styles.wrapper}>
      <div className="flex items-center mb-12">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow">
          <Image src={user.image} alt={user.name} fill />
        </div>
        <div className="text-2xl ml-4">
          <span className='font-bold'>{user.name}</span> - Github repositories
        </div>
      </div>
      {repositories.map((repo: any) => (
        <div key={`my-repo-${repo.id}`} className="shadow-xl border border-gray-300 p-4 mb-6 rounded-3xl">
          <div className="mb-4 flex">
            <a className="font-bold text-2xl hover:underline text-blue-700" href={repo.html_url}>
              { repo.name }
            </a>
            <div
              className={
                `shadow rounded-xl p-2 text-sm ${repo.private ? 'bg-red-200' : 'bg-green-200'}`
              }
            >
              { repo.private ? 'Private' : 'Public'}
            </div>
          </div>
          <div className="text-xl">{ repo.description }</div>
        </div>
      ))}
    </div>
  )
}

export default Home
