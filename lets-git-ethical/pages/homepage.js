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

        <main className="w-5/6 m-auto">
            <div className="border border-black w-full">
                <div>
                    <img className="w-3/12" src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                    <h1>Ewok</h1>
                    <button>Edit</button>
                </div>
            </div>
            <section className="border border-black p-3">
                <div className="border border-black w-9/12 m-auto">
                    <article>
                        About Me
                    </article>
                    <p>

                    </p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </section>
        </main>




    

        <footer className="">

        </footer>

    </body>
</div>
)
}
