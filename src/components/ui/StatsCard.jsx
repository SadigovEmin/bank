function StatsCard({title, amount, change, positive}){
    return (
        <div className="bg-white p-5 rounded-xl shadow w-full hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 transform  ">
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="text-2xl font-bold mt-2">{amount}</h2>
            <p className={`mt-2 text-sm ${positive ? "text-green-500" :"text-red-500"}`}>{change}</p>
        </div>
    )
}

export default StatsCard