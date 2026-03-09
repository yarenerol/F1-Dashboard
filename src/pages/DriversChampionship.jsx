import { useState, useEffect } from "react"
import Layout from "../components/Layout";
import DriverStandingsTable from "../components/DriverStandingsTable.jsx";

const DriversChampionship = ()=>{

    const [loading, setLoading] = useState(false);
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const fetchDriverStandings = async ()=>{
            try {
                setLoading(true);
                const res = await fetch('https://api.openf1.org/v1/championship_drivers?session_key=latest');
                const data = await res.json();
                const sorted = data.sort((a, b) => b.points_current - a.points_current);
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
                    <h1 className="font-extrabold mt-15 text-transparent text-4xl bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text"><span className="block sm:inline">2026</span> Pilotlar Şampiyonası</h1>
                    <p className="m-4 text-gray-400 text-xl">Pilotlar Şampiyonası'nda pilotların durumunu gör.</p>
                </div>
            
            {loading ? (
                    <div>Yükleniyor...</div>
                    ) : results ? (
                    <>
                        <DriverStandingsTable results={results} />
                    </>
                    ) : (
                    <div className="text-center text-white mt-20">Yükleniyor</div>
                    )}
            </div>
        </Layout>
        </>
    )
}
export default DriversChampionship