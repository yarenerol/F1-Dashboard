import { useState, useEffect } from "react"
import Layout from "../components/Layout";
import DriverStandingsTable from "../components/DriverStandingsTable.jsx";
import { useTranslation

 } from "react-i18next";
const DriversChampionship = ()=>{

    const [loading, setLoading] = useState(false);
    const [results,setResults] = useState([]);
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        const fetchDriverStandings = async ()=>{
            try {
                setLoading(true);
                const resChampionship = await fetch('https://api.openf1.org/v1/championship_drivers?session_key=latest');
                const championship = await resChampionship.json();
                
                const resDrivers = await fetch('https://api.openf1.org/v1/drivers?session_key=latest');
                const drivers = await resDrivers.json();

                const merged = championship.map(result => {
                    const driver = drivers.find(d => d.driver_number === result.driver_number);
                    return {...result, driver_name: driver?.full_name, driver_team: driver?.team_name, driver_country: driver?.country_code}
                })
                
                const sorted = merged.sort((a, b) => b.points_current - a.points_current);
                setResults(sorted);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            } 
        }
        fetchDriverStandings();
    }, []);

    return(
        <>
        <Layout>
            <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col items-center">
                <div className="text-center">
                    <h1 className="font-extrabold mt-15 text-transparent text-4xl bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text"><span className="block sm:inline">2026</span> {t('driversChamp.title')}</h1>
                    <p className="m-4 text-gray-400 text-xl">{t('driversChamp.desc')}</p>
                </div>
            
            {loading ? (
                    <div>{t('common.loading')}</div>
                    ) : results ? (
                    <>
                        <DriverStandingsTable results={results} />
                    </>
                    ) : (
                    <div className="text-center text-white mt-20">{t('common.loading')}</div>
                    )}
            </div>
        </Layout>
        </>
    )
}
export default DriversChampionship