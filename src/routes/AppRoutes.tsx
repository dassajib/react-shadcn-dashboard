import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Skeleton } from "@/components/ui/skeleton"

const SignUp = lazy(() => import("@/pages/SignUp"))
const SignIn = lazy(() => import("@/pages/SignIn"))
const Dashboard = lazy(() => import("@/pages/Dashboard"))
const Uom = lazy(() => import("@/pages/Uom"))
const Categories = lazy(() => import("@/pages/Categories"))
const Items = lazy(() => import("@/pages/Items"))
const Customers = lazy(() => import("@/pages/Customers"))
const Vendor = lazy(() => import("@/pages/Vendor"))
const AppLayout = lazy(() => import("@/layout/AppLayout"))

const AppRoutes = () => {
    return (
        <Suspense fallback={<Skeleton />}>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                {/* Layout wrapper */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="uom" element={<Uom />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="items" element={<Items />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="vendors" element={<Vendor />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes