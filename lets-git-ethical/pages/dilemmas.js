import Head from 'next/head'

export default function Home() {
return (
<div className="">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="w-screen">
            
        <header className="w-5/6 m-auto my-4">
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

        <main className="w-5/6 m-auto border border-black">
            <div className="w-1/6 border border-black h-1/6">
                <botton className="">Back to List</botton>
            </div>

            <section className="w-full my-4">
                <div className="mx-4">
                    <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                </div>
                <p className="mx-4 my-4 border border-black">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
                <div className="flex flex-col">
                    <botton className="mx-4 my-2 border border-black">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typese</botton>
                    <botton className="mx-4 my-2 border border-black ">B</botton>
                    <botton className="mx-4 my-2 border border-black ">C</botton>
                    <botton className="mx-4 my-2 border border-black ">D</botton>
                </div>
                <div className="grid grid-flow-col grid-cols-4 gap-4 m-auto my-4">
                    <botton className="col-span-1 mx-4 text-center border border-black">Previous</botton>
                    <botton className="col-span-1 col-end-5 mx-4 text-center border border-black ">Next</botton>
                </div>
            </section>
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