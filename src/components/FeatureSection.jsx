import FeatureCard from "./FeatureCard"

const FeatureSection = ()=>{

    const features = [
        {icon: "📅", title: "Takvim", description: "Sezonun tüm yarışlarını takvim halinde görüntüle. Tarih, saat, lokasyon bilgilerine eriş.", link: "/schedule"},
        {icon: "🏎", title: "Sürücüler Şampiyonası", description: "Pilotların sezondaki güncel sıralamasını görüntüle.", link: "/drivers-championship"},
    ]

    return (
        <>
            <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col items-center py-20 border-b border-red-500/20">
                <div className="text-center">
                    <h1 className="font-extrabold m-4 text-white text-5xl">Özellikler</h1>
                    <p className="m-4 text-white text-xl">Her geçen gün güncellenen özellikler listemiz</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 max-w-6xl">
                    {features.map((feature)=>(
                        <FeatureCard key={feature.title} {...feature}/>
                    ))

                    }
                </div>
            </div>
        </>
    )
}

export default FeatureSection