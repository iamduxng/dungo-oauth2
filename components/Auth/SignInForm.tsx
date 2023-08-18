
'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

// import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import styles from './SignInForm.module.css'

function SignInForm () {
  // const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false)

  const signInWithOauth2 = async (provider: string) => {
    switch(provider) {
      // case 'google':
      //   setIsGoogleLoading(true)
      //   break;
      case 'github':
        setIsGitHubLoading(true)
        break;
      default:
        break;
    }

    await signIn(provider)
  }

  return (
    <div className="flex flex-col space-y-4">
      {/* <button
        className={styles.btnSignIn}
        disabled={isGoogleLoading}
        onClick={() => signInWithOauth2('google')}
      >
        <div className="mr-2"><FcGoogle size="1.5rem" /></div>
        Sign in with Google
      </button> */}
      <button
        className={`bg-black text-white ${styles.btnSignIn}`}
        disabled={isGitHubLoading}
        onClick={() => signInWithOauth2('github')}>
        <div className="mr-2"><FaGithub size="1.5rem" /></div>
        Sign in with Github
      </button>
    </div>
  )
}

export default SignInForm
