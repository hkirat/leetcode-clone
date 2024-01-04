
import { Link } from 'react-router-dom';

export const Topbar = () => {
    return <div className="max-w-screen-lg w-full bg-black align-center px-5 pb-5 pt-8">
        {/* <img src="/logo.png" className="max-w-56" /> */}
        <div className="text-7xl text-white font-bold">
            Daily Code.
        </div>
        <NavBar />
    </div>
}

const topbarItems =[
    {
        title: "About",
        route: "/about"
    }, {
        title: "Acitivity",
        route: "/activity"
    }, {
        title: "Problems",
        route: "/problems"
    }, {
        title: "Leaderboard",
        route: "/leaderboar"
    }
]
function NavBar() {
    return <div className="flex mt-8 justify-between">
        <div className="flex">
            {topbarItems.map((item, idx) => <NavbarItem key={idx} route={item.route} title={item.title} />)}
        </div>
        <input className="bg-white rounded-md px-3 py-1 focus:shadow-[0_0_0_0.3rem_#6b7280] focus-visible:outline-none" placeholder="Search" />
    </div>
}

function NavbarItem({title, route}: {
    title: string;
    route: string;
}) {
    return <Link to={route}>
        <div className="mr-10 text-slate-500 text-lg cursor-pointer hover:text-white text-base font-light">
            {title}
        </div>
    </Link>
}