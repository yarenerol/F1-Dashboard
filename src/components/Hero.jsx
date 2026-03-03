const Hero = ()=>{

    return(
        <>
    <div className="bg-[#171A2D] min-w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold m-4 text-white"><span className="font-extrabold bg-linear-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">F1 DASHBOARD</span> Hoşgeldiniz!</h1>
            <p className="m-4 text-white text-xl">Takip et, karşılaştır, analiz et. Tüm F1 verisi gerçek zamanlı olarak tek bir platformda!</p>
            <div className="flex flex-row gap-4">
                <button className="shadow-lg shadow-red-500/40 text-white text-lg m-4 bg-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">Takvimi gör</button>
                <button className="m-4 text-white text-lg border-2 border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1">Daha fazla bilgi</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default Hero