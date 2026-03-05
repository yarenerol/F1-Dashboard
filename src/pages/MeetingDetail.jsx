import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
const MeetingDetail = ()=>{
    const { meeting_key } = useParams();
    const [meeting, setMeeting] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const fetchMeetings = async ()=>{
            try {
                setLoading(true)
                const res = await fetch('https://api.openf1.org/v1/meetings?year=2026');
                const data = await res.json();
                const selectedMeeting = data.find(m=>m.meeting_key === parseInt(meeting_key));
                setMeeting(selectedMeeting);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        fetchMeetings();
    }, [meeting_key])
    
    return(
        <>
        <Layout>
            <div className="bg-[#0A0E27] min-w-screen min-h-screen flex flex-col py-4">
                {loading ? (
                    <div>Yükleniyor...</div>
                    ) : meeting ? (  // ← EKLE: meeting var mı kontrol et
                    <div className="bg-[#151E31] w-full h-100 flex flex-col justify-center items-center text-center">
                        <img src={meeting.country_flag} alt="flag" className="w-32 h-20 rounded mb-4" />
                        <h1 className="font-extrabold text-5xl text-white m-4">{meeting.meeting_name}</h1>
                        <p className="text-gray-400 text-xl">{meeting.location}</p>
                    </div>
                    ) : (  // ← EKLE: meeting yoksa
                    <div className="text-center text-white mt-20">Yükleniyor</div>
                    )}
            </div>


        </Layout>
        </>
    )
}
export default MeetingDetail