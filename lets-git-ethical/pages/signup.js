import Head from 'next/head'

export default function Home() {
return (
<div className="">
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <body className="items-center">
            
        <header className="w-5/6 m-auto">
  
        </header>

        <main className="w-5/6 m-auto my-4">
            <div className="w-2/3 p-4 border border-black ">
                <h1 className="text-center">Sign up!</h1>
                <form className="grid grid-cols-6 gap-2 p-4">
                    
                    <input placeholder="First Name" className="col-start-1 col-end-3 p-3 my-3 text-center border border-black"type="text" ></input>
                    <input placeholder="Last Name" className="col-span-2 col-end-7 p-3 my-3 text-center border border-black"type="text" ></input>
                    <input placeholder="Email" className="col-start-1 col-end-7 p-3 my-3 text-center border border-black"type="text" ></input>
                    <input placeholder="New Password" className="col-start-1 col-end-7 p-3 my-3 text-center border border-black "type="text" ></input>
                    
                    <input placeholder="Month" className="col-span-2 p-3 my-3 text-center border border-black "type="text" ></input>
                    <input placeholder="Day" className="col-span-2 p-3 my-3 text-center border border-black "type="text" ></input>
                    <input placeholder="Year" className="col-span-2 p-3 my-3 text-center border border-black "type="text" ></input>

                </form>
            </div>
        </main>




    

        <footer className="">

        </footer>

    </body>
</div>
)
}
