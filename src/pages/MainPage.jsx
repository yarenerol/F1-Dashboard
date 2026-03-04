import Layout from "../components/Layout"
import Hero from "../components/Hero"
import FeatureSection from "../components/FeatureSection"

const MainPage = ()=>{
    return(
        <>
        <Layout>
            <Hero />
            <div id="features">
                <FeatureSection />
            </div>
        </Layout>
        </>
    )
}

export default MainPage