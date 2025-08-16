import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Atom, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-[#020618] container grid h-screen max-w-none items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        {/* shop name */}
        <div className="mb-4 flex items-center justify-center text-white">
          <Atom className="h-6 w-6" />
          <h1 className="text-xl font-medium">Your Shop</h1>
        </div>

        {/* auth card */}
        <Card className="bg-[#020919] gap-4 text-white">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Sign In</CardTitle>
            <CardDescription className="text-white">
              Enter your email and password below to <br />
              Sign into your account
              <Link to="/signup" className="underline ml-2">Haven't account yet?</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm text-white">Name</label>
                <input
                  id="name"
                  type="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm text-white">Phone</label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="Enter your phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="password" className="mb-1 text-sm text-white">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10"
                />

                {/* eye button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="bg-[#E2E8F0] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Sign In
              </button>

              {/* Terms of Service */}
              <p className="mt-2 text-sm text-gray-400 text-center">
                By clicking login, you agree to our {" "}
                <Link to="#" className="underline">Terms of Service</Link> and{" "}
                <Link to="#" className="underline">Privacy Policy</Link>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignIn