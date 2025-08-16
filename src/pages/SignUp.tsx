import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Atom, Eye, EyeOff } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="bg-[#020618] min-h-screen w-full flex items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        {/* shop name */}
        <div className="mb-4 flex items-center justify-center text-white">
          <Atom className="h-6 w-6" />
          <h1 className="text-xl font-medium">Your Shop</h1>
        </div>

        {/* auth card */}
        <Card className="bg-[#020919] gap-4 text-white">
          <CardHeader>
            <CardTitle className="text-lg tracking-tight">Sign Up</CardTitle>
            <CardDescription className="text-white">
              Enter your email and password to create an account.
              Already have an account?
              <Link to="/signin" className="underline ml-2">Sign In</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm text-white">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm text-white">Phone</label>
                <input
                  id="phone"
                  type="tel"
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

              <div className="flex flex-col relative">
                <label htmlFor="confirmPassword" className="mb-1 text-sm text-white">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Retype your password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                {/* eye button */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                type="submit"
                className="bg-[#E2E8F0] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                <Link to="/create-shop">Sign Up</Link>
              </button>

              {/* Terms of Service */}
              <p className="mt-2 text-sm text-gray-400 text-center">
                By creating an account, you agree to our{" "}
                <Link to="#" className="underline">Terms of Service</Link> and{" "}
                <Link to="#" className="underline">Privacy Policy</Link>.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}

export default SignUp