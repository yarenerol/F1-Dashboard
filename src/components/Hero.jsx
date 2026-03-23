import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Hero = ()=>{
    const {t, i18n} = useTranslation();

    return(
        <>
    <div className="bg-[#171A2D] w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold m-4 text-white text-6xl sm:text-6xl md:text-7xl text-center">
            <span className="font-extrabold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent block">F1 DASHBOARD</span> 
            <span className="block sm:inline">{t('hero.welcome')}</span>
          </h1>
            <p className="m-4 text-white text-xl text-center">{t('hero.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link to="/schedule"><button className="py-2 px-4 shadow-lg shadow-red-500/40 text-white text-lg m-4 bg-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">{t('hero.calendarButton')}</button></Link>
                <Link to="/#features"><button className="m-4 py-2 px-4 text-white text-lg border-2 border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1" onClick={() => {document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}}>{t('hero.moreInfo')}</button></Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default Hero