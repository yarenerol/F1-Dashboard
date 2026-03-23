import FeatureCard from "./FeatureCard"
import { useTranslation } from "react-i18next"

const FeatureSection = ()=>{

    const {t, i18n} = useTranslation();

    const features = t('features', { returnObjects: true });

    return (
        <>
            <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col items-center py-20 border-b border-red-500/20">
                <div className="text-center">
                    <h1 className="font-extrabold m-4 text-white text-5xl">{t('featureSection.title')}</h1>
                    <p className="m-4 text-white text-xl">{t('featureSection.desc')}</p>
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