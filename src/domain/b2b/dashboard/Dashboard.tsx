import LineCard from "@/domain/graphs/LineCard"
import PieCard from "@/domain/graphs/PieCard"

function Dashboard() {

    const cardList1 : B2BDashboardCard[] = [
        {
            name : "Total Active Gym",
            value : 10,
            nature : 'inc'
        },
        {
            name : "New Web Gym Signups",
            value : 7,
            nature : 'dec'
        },
        {
            name : "Churn Rate",
            value : 7,
            nature : 'dec'
        }
    ]

    const cardList2 : Omit<B2BDashboardCard, 'nature'>[] = [
        {
            name : "Open",
            value : 7,
        },
        {
            name : "Resolved",
            value : 7,
        },
    ]

    return (
    <div className="flex-1">
        <h1 className="p-4 bg-secondary text-muted-foreground w-full font-semibold text-3xl">B2B Dashboard</h1>
        <div className="p-4 mt-2 w-full">
            <div className="w-full flex justify-end items-center">
                <select className="px-4 py-2 m-1 border-2 bg-muted border-[#A0A0A042] rounded-sm ">
                    <option>15 Dec 24 - 01 Feb 25</option>
                    <option>1 Feb 24 - 01 Mar 25</option>
                </select>
            </div>
            <div className="bg-primary px-8 py-12 mt-2 flex gap-x-16 justify-evenly">
                {cardList1.map((card) => (
                    <BaseCard key={card.name} card={card} />
                ))}
            </div>
            <div className="bg-primary px-8 pb-12 pt-8 mt-8">
                <h4 className="text-2xl font-bold w-full pb-8">Pending Support Tickets (Last 7 Days)</h4>
                <div className="flex gap-x-16 justify-around">
                    {cardList2.map((card) => (
                        <div key={card.name} className={`px-4 pt-8 pb-4 min-h-48 border-2 shadow bg-white border-[#A0A0A042] rounded-2xl flex-1 max-w-[40%] flex flex-col items-center justify-center gap-y-2`}>
                            <h2 className="text-2xl font-medium lg:max-w-[40%] text-center pb-4">{card.name}</h2>
                            <p className="text-2xl font-medium text-theme-green">{card.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-end items-center mt-8 mb-4">
                <select className="px-4 py-2 m-1 border-2 bg-muted border-[#A0A0A042] rounded-sm ">
                    {/* This is a temp data */}
                    <option>15 Dec 24 - 01 Feb 25</option>
                    <option>1 Feb 24 - 01 Mar 25</option>
                </select>
            </div>
            <div className="">
                {/* Graphs */}
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-primary p-10">
                        <LineCard
                            title="Total Revenue"
                            yLabel="No. of Revenue"
                            data={[
                                { name: "Jun", value: 0 },
                                { name: "Jul", value: 20 },
                                { name: "Aug", value: 12 },
                                { name: "Sep", value: 30 },
                                { name: "Oct", value: 25 },
                                { name: "Nov", value: 40 },
                            ]}
                        />
                    </div>
                    <div className="bg-primary p-10">
                        <LineCard
                            title="New Signups Over Time"
                            yLabel="No. of New Signups"
                            data={[
                                { name: "Jun", value: 5 },
                                { name: "Jul", value: 20 },
                                { name: "Aug", value: 14 },
                                { name: "Sep", value: 28 },
                                { name: "Oct", value: 26 },
                                { name: "Nov", value: 40 },
                            ]}
                        />
                    </div>
                </div>
                <div className=" mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-primary p-8">
                        <PieCard
                            title="Subscription Status"
                            data={[
                                { name: "Auto Renewal On", value: 60, color: "#28A745" },
                                { name: "Auto Renewal Off", value: 35, color: "#FFA726" },
                                { name: "Expired", value: 40, color: "#E53935" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;


const BaseCard = ({
    card
} : { card: { name: string; value: number; nature: 'inc' | 'dec' } } ) => {
    return (
    <div key={card.name} className={`px-4 pt-8 pb-4 border-2 shadow bg-white border-[#A0A0A042] rounded-2xl relative flex-1 flex flex-col items-center justify-between gap-y-2`}>
        <h2 className="text-2xl font-medium lg:max-w-[40%] text-center pb-4">{card.name}</h2>
        <p className="text-2xl font-medium text-theme-green">{card.value}</p>
        <span className="absolute right-4 bottom-2 ">
            {card.nature === 'inc' ?
                <span className="flex gap-1 text-lg text-muted-foreground font-medium items-center"><img src="/icons/inc.svg" alt="Increase" loading="lazy" /><span>{'5%'}</span></span>
            :
                <span className="flex gap-1 text-lg text-muted-foreground font-medium items-center"><img src="/icons/dec.svg" alt="Decrease" loading="lazy" /><span>{'7%'}</span></span>
            }
        </span>
    </div>
    )
}