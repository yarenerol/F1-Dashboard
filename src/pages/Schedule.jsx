import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import MeetingCard from "../components/MeetingCard"
import { Link } from "react-router-dom";

const Schedule = ()=>{

    const [loading, setLoading] = useState(false);
    const [meetings, setMeetings] = useState([]);

    useEffect(()=>{
        const fetchMeetings = async ()=>{
            try {
                setLoading(true)
                const res = await fetch('https://api.openf1.org/v1/meetings?year=2026');
                const data = await res.json();
                setMeetings(data);
            } catch (error) {
                console.log("çekemedi")
            } finally {
                setLoading(false);
            }
        }
        fetchMeetings();
    }, [])

    return(
        <>
            <Layout>
                <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col items-center">
                    <div className="text-center">
                        <h1 className="font-extrabold mt-15 text-white text-5xl">2026 Yarış Takvimi</h1>
                        <p className="m-4 text-white text-xl">Sezonun tüm yarışlarını buradan takip et.</p>
                    </div>
                    
                    {loading ? (
                        <div className="text-center text-white mt-20 text-xl">Yükleniyor...</div>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 max-w-7xl ">{
                        meetings.map((meeting)=>(
                            <Link to={`/schedule/${meeting.meeting_key}`} key={meeting.meeting_key}>
                                <MeetingCard key={meeting.circuit_key} {...meeting}/>
                            </Link>
                        ))}
                    </div>)}
                </div>
            </Layout>
        </>
    )
}

export default Schedule