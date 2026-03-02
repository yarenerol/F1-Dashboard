import { Link } from "react-router-dom"

const Navbar = ()=>{
    return (
        <>
        <div className="flex justify-between w-screen fixed top-0 navbar py-7 px-4 items-center bg-[#0A0E27]">
            <div className="title flex items-center">
                <i className="text-3xl fa-solid fa-bolt ml-8 font-bold text-red-500"></i>
                <h2 className="px-5 text-3xl font-bold bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">F1 DASHBOARD</h2>
            </div>
            <nav className="nav-items">
                <Link to="" className="relative mx-8 pb-1 nav-item font-normal text-zinc-300 hover:text-red-500 duration-300 group">Schedule<span class="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span></Link>
                <Link to="" className="relative mx-8 pb-1 nav-item font-normal text-zinc-300 hover:text-red-500 duration-300 group">Standings<span class="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span></Link>
                <Link to="" className="relative mx-8 pb-1 nav-item font-normal text-zinc-300 hover:text-red-500 duration-300 group">Features<span class="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span></Link>
            </nav>
        </div>
        </>
    )
}
export default Navbar