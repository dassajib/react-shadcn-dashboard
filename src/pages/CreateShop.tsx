import { Link } from 'react-router-dom'
import { Store } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const CreateShop = () => {
    return (
        <div className="bg-[#020618] min-h-screen w-full flex items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
                {/* title */}
                <div className="mb-4 flex items-center justify-center text-white">
                    <Store className="h-6 w-6" />
                    <h1 className="text-xl font-medium ml-2">Create Your Shop</h1>
                </div>

                {/* create shop card */}
                <Card className="bg-[#020919] gap-4 text-white">
                    <CardHeader>
                        <CardTitle className="text-lg tracking-tight">Create Shop</CardTitle>
                        <CardDescription className="text-white">
                            Enter your shop details below to get started.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="shopName" className="mb-1 text-sm text-white">Shop Name</label>
                                <input
                                    id="shopName"
                                    type="text"
                                    placeholder="Enter your shop name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-white bg-[#0D1423] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#E2E8F0] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                            >
                                <Link to="/">Create Shop</Link>
                            </button>

                            <p className="mt-2 text-sm text-gray-400 text-center">
                                You can always update your shop details later in settings.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CreateShop