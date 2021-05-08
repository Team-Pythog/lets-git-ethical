import Head from 'next/head'

export default function Friends() {
return (
<div className="">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="w-screen">
            
        <header className="w-5/6 m-auto">
            <nav className="w-full border border-black">
                <ul className="flex flex-row p-3 bg-red-50">
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">Home</a></li>
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">Dilemmas</a></li>
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">New Dilemma</a></li>
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">Messages</a></li>
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">Friends</a></li>
                    <li className="w-1/6 p-3 text-center border border-black"><a href="">About Us</a></li>
                </ul>
            </nav>
        </header>

        <main className="w-5/6 m-auto my-4">

            <section className="border border-black">
                <h1>Comments</h1>
                <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>

            </section>
        </main>




    

        <footer className="">

        </footer>

    </body>
</div>
)
}
