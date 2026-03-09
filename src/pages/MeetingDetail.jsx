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
                    ) : meeting ? (
                    <>
                        <div className="bg-[#151E31] w-full h-100 flex flex-col justify-center items-center text-center">
                            <img src={meeting.country_flag} alt="flag" className="w-32 h-20 rounded mb-4" />
                            <h1 className="font-extrabold text-5xl text-white m-4">{meeting.meeting_name}</h1>
                            <p className="text-gray-400 text-xl">{meeting.location}</p>
                            
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 m-5 min-h-90 my-15">
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Pist Adı</p>
                                <h2 className="text-2xl sm:text-4xl text-white font-bold">{meeting.circuit_short_name}</h2>
                            </div>
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Pist Tipi</p>
                                <h2 className="text-2xl sm:text-4xl text-yellow-400 font-bold">{meeting.circuit_type}</h2>
                            </div>
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Ülke</p>
                                <h2 className="text-2xl sm:text-4xl text-white font-bold">{meeting.country_name}</h2>
                            </div>
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Konumı</p>
                                <h2 className="text-2xl sm:text-4xl text-white font-bold">{meeting.location}</h2>
                            </div>
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Time Zone</p>
                                <h2 className="text-2xl sm:text-4xl text-white font-bold">UTC {meeting.gmt_offset}</h2>
                            </div>
                            <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl text-center flex flex-col justify-center p-5">
                                <p className="text-lg sm-text-2xl text-gray-400">Sezon</p>
                                <h2 className="text-2xl sm:text-4xl text-yellow-400 font-bold">{meeting.year}</h2>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] border-2 border-red-500/20 rounded-2xl flex justify-center mx-10 sm:mx-50 ">
                            
                            <img src={meeting.circuit_image} alt=""  className="s:w-full s:max-w-2xl h-80 object-contain" />
                        </div>
                            </>
                    ) : (
                    <div className="text-center text-white mt-20">Yükleniyor</div>
                    )}
            </div>


        </Layout>
        </>
    )
}
export default MeetingDetail