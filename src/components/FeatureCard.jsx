import { Link } from "react-router-dom"
const FeatureCard = ({ icon, title, description, link})=>{
    return(
        <>
        <Link to={link}><div className="bg-[#141C31] border-2 border-red-500/20 rounded-xl p-9 shadow-md shadow-red-500/20 mt-10 hover:shadow-red-500/30 hover:-translate-y-1 hover:border-4 transition-all duration-300 gradient-border" >
            <div className="w-20 h-20 justify-center flex items-center bg-linear-to-r from-red-500 to-yellow-500 text-4xl rounded-lg">{icon}</div>
            <h1 className="text-3xl text-white my-5 font-bold">{title}</h1>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
        </Link>
        </>
    )
}

export default FeatureCard