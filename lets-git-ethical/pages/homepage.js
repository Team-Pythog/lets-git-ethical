import Head from 'next/head'

export default function Home() {
return (
<div className="">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="w-screen">
            
        <header className="w-5/6 m-auto">
            <nav className="border border-black w-full">
                <ul className="flex flex-row p-3 bg-red-50">
                    <li className="my-auto border border-black p-3 w-1/6 text-center"><a href="">Dilemmas</a></li>
                    <li className="p-3 w-1/6 border border-black text-center"><a href="">Friends</a></li>
                    <li className="p-3 w-1/6 border border-black text-center"><a href="">Create Dilemma</a></li>
                    <li className="p-3 w-1/6 border border-black text-center"><a href="">Messages</a></li>
                    <li className="p-3 w-1/6 border border-black text-center"><a href="">About App</a></li>
                    <li className="p-3 w-1/6 border border-black text-center"><a href="">About Us</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <div>
                <div>
                    <img class="object-cover" src="cat_lady.png"></img>
                    <h1>Mrs. Ewok</h1>
                    <button></button>
                </div>
            </div>
        </main>




    

        <footer className="">

        </footer>

    </body>
</div>
)
}
