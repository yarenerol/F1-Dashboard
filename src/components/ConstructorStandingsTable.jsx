const ConstructorStandingsTable = ({ results })=>{
    return(
        <>
            <div className="bg-[#1E293B] border border-red-500/20 rounded-lg overflow-hidden min-w-sm md:min-w-3xl lg:min-w-6xl m-10">
                <table className="w-full border-collapse">
                    <thead className="bg-[#332C3C] border-b-2 border-red-500/30">
                        <tr>
                            <th className="px-4 py-3 text-left text-yellow-400 font-bold uppercase text-sm ">POZ</th>
                            <th className="px-4 py-3 text-left text-yellow-400 font-bold uppercase text-sm">MARKA</th>
                            <th className="px-4 py-3 text-right text-yellow-400 font-bold uppercase text-sm">PUAN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((constructor) => (
                            <tr key={constructor.position_current} className="border-b border-red-500/10 hover:bg-red-500/5 transition">
                                <td className="px-4 py-3 text-yellow-400 font-bold">{constructor.position_current}</td>
                                <td className="px-4 py-3 text-white font-semibold">{constructor.team_name}</td>
                                <td className="px-4 py-3 text-right text-red-400 font-bold">{constructor.points_current ?? 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ConstructorStandingsTable