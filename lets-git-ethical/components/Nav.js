
export default function Nav() {
return (

    <header className="w-5/6 m-auto">
        <nav className="w-full border border-black">
            <ul className="flex flex-row p-3 bg-red-50">
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Home</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="../dilemmas">Dilemmas</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Messages</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">Friends</a></li>
                <li className="w-1/5 p-3 text-center border border-black"><a href="">About Us</a></li>
            </ul>
        </nav>
    </header>

)
}
