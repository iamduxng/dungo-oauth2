import SignInForm from "~/components/Auth/SignInForm"

async function Login () {
  return (
    <div className="divine-y divine-gray-700 bg-white rounded-2xl p-16 w-full max-w-screen-sm">
      <div className="text-4xl font-bold text-center mb-8">Sign In</div>
      
      <SignInForm />
    </div>
  )
}

export default Login
