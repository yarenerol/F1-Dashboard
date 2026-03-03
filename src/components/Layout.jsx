import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children })=>{
    return(
        <>
        <div>
            <Navbar />
            <div className="pt-20">
                {children}
            </div>
            <Footer />
        </div>
        </>
    )

}

export default Layout