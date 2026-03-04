const MeetingCard = ({ country_flag, meeting_name, country_name, meeting_official_name, date_start, date_end })=>{

    const startDate = new Date(date_start);
    const endDate = new Date(date_end);
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const month = startDate.toLocaleString('en-EN', {month: 'short'}).toUpperCase();

    return(
        <>
        <div className="bg-slate-800 border-2 border-red-500/20 rounded-xl p-9 shadow-md shadow-red-500/20 mt-10 hover:shadow-red-500/30 hover:-translate-y-1 hover:border-4 transition-all duration-300 gradient-border" >
            <div className="flex flex-row">
                <img src={country_flag} alt="" className="w-14 h-10 rounded " />
                <div className="mx-4">
                    <h1 className="text-white font-extrabold text-2xl">{meeting_name}</h1>
                    <p className="text-gray-400">{country_name}</p>
                </div>
            </div>
            <p className="text-yellow-400 my-2">{meeting_official_name}</p>

            <div className="flex flex-col w-full items-end">
                <h1 className="text-red-500 font-extrabold text-2xl">{startDay} - {endDay}</h1>
                <h2 className="text-gray-400 font-extrabold text-2xl">{month}</h2>
            </div>
        </div>
        </>
    )

}
export default MeetingCard