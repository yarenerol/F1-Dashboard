import { useState, useEffect } from "react"
import Layout from "../components/Layout";
import ConstructorStandingsTable from "../components/ConstructorStandingsTable";
import { useTranslation } from "react-i18next";
const ConstructorsChampionship = ()=>{

    const [loading, setLoading] = useState(false);
    const [results,setResults] = useState([]);
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        const fetchConstructorStandings = async ()=>{
            try {
                setLoading(true);
                const resChampionship = await fetch('https://api.openf1.org/v1/championship_teams?session_key=latest');
                const championship = await resChampionship.json();

                const processed = championship.map((team)=>{
                    if (!team.team_name){
                        if (team.points_current === 43) return {...team, team_name: "Mercedes"};
                        if (team.points_current === 27) return {...team, team_name: "Ferrari"};
                        if (team.points_current === 0) return {...team, team_name: "Williams"};
                    }
                    return team;
                });

                const sorted = processed.sort((a, b) => b.points_current - a.points_current);
                setResults(sorted);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            } 
        }
        fetchConstructorStandings();
    }, []);

    return(
        <>
        <Layout>
            <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col items-center">
                <div className="text-center">
                    <h1 className="font-extrabold mt-15 text-transparent text-4xl bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text"><span className="block sm:inline">2026</span> {t('constChamp.title')}</h1>
                    <p className="m-4 text-gray-400 text-xl">{t('constChamp.desc')}</p>
                </div>
            
            {loading ? (
                    <div>{t('common.loading')}</div>
                    ) : results ? (
                    <>
                        <ConstructorStandingsTable results={results} />
                    </>
                    ) : (
                    <div className="text-center text-white mt-20">{t('common.loading')}</div>
                    )}
            </div>
        </Layout>
        </>
    )

}

export default ConstructorsChampionship