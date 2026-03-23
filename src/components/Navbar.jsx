import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {t, i18n} = useTranslation();

   useEffect(() => {
    console.log('i18n initialized:', i18n.language);
  }, [i18n]);


  
  return (
    <div className="flex justify-between w-screen fixed top-0 z-50 py-7 px-4 items-center bg-[#0A0E27] border-b border-red-500/20">
      {/* Logo */}
        <button onClick={() => {window.location.href = "/#hero"}} className="title flex items-center cursor-pointer">
            <div className="title flex items-center">
                <i className="text-3xl fa-solid fa-bolt sm:ml-8 font-bold text-red-500"></i>
                <h2 className="px-5 text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent hidden sm:block">
                F1 DASHBOARD
                </h2>
            </div>
        </button>
      {/* Desktop Links */}
      <nav className="hidden md:flex gap-8">
        <Link to="/schedule" className="relative pb-1 font-normal text-zinc-300 hover:text-red-500 duration-300 group">
          {t('navbar.schedule')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
        <Link to="/drivers-championship" className="relative pb-1 ml-8 font-normal text-zinc-300 hover:text-red-500 duration-300 group">
          {t('navbar.standings')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
        <Link to="/#features" className=" mx-8 relative pb-1 font-normal text-zinc-300 hover:text-red-500 duration-300 group">
          {t('navbar.features')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </Link>
        <LanguageSwitcher className="p-0"/>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-red-500 text-2xl"
      >
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#0A0E27] border-b border-red-500/20 flex flex-col gap-4 p-4 md:hidden">
          <Link to="/schedule" className="text-zinc-300 hover:text-red-500" onClick={() => setIsOpen(false)}>
            {t('navbar.schedule')}
          </Link>
          <Link to="/" className="text-zinc-300 hover:text-red-500" onClick={() => setIsOpen(false)}>
            {t('navbar.standings')}
          </Link>
          <Link to="/#features" className="text-zinc-300 hover:text-red-500" onClick={() => setIsOpen(false)}>
            {t('navbar.features')}
          </Link>
          <LanguageSwitcher />
        </div>
      )}
    </div>
  )
}

export default Navbar