
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function Layout() {
    return (
        <div className="relative">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
