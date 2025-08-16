import { Atom } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom';

const SignIn = () => {
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
              <Link to="/signup" className="underline ml-2">Haven'y account yet?</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm text-white">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white bg-[#0D1423] dark:bg-sidebar focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-sm text-white">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white bg-[#0D1423] dark:bg-sidebar focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                className="bg-[#E2E8F0] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignIn