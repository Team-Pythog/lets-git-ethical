import Head from 'next/head'
import Nav from './nav'

export default function Homepage() {
return (
<div className="">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="w-screen">
            
        <Nav />

        <main className="w-5/6 m-auto my-4">
            <div className="w-full border border-black">
                <div className="w-1/6 mx-8 my-8 border border-black">
                    <img className="" src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                    <h1 className="text-center border border-black ">Ewok</h1>
                    <button className="w-full border border-black">Edit</button>
                </div>
            </div>
            <section className="p-3 my-4 border border-black">
                <div className="w-11/12 m-auto my-3 border border-black">
                    <article className="border border-black">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    </article>
                    <p className="border border-black">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    </p>
                    <ul className="flex flex-row border border-black">
                        <li>Facebook</li>
                        <li>Insta</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </section>
            <section className="">
                <div className="flex flex-row w-full border border-black">
                    <ul className="flex flex-row">
                        <li className="w-1/6 mx-2 border border-black">
                            <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                            <p className="text-center">% Match</p>
                        </li>
                        <li className="w-1/6 mx-2">
                            <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                        </li>
                        <li className="w-1/6 mx-2">
                            <img src="https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true"></img>
                        </li>
                        <botton className="w-1/6 p-10 mx-2 text-center border border-black flex-end ">View All</botton>
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
