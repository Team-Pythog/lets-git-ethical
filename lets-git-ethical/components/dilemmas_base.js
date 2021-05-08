import { useState, useEffect } from 'react'
import Dilemmas from '../pages/dilemmas'
import DilemmaDetail from './dilemma_detail';
import Nav from './nav'
import { fetchWithToken, apiURL } from '../services/data-fetcher'
import Head from 'next/head'
import useSWR from 'swr'





export default function DilemmaBase() {

    // const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);

    // const [dilemmaList, setDilemmaList] = useState([]);

    // useEffect(() => {
    //     if (!data) return;
    //     setDilemmaList(data);
    // }, [data])

    // if (error) return <h2>What a Dilemma!</h2>
    // if (!data) return <h2>Loading...</h2>

    var dummy_data = {
        id: 1,
        title: "blah",
        image:"https://github.com/Team-Pythog/lets-git-ethical/blob/dev/lets-git-ethical/images/ewok.jpg?raw=true",
        text: "words",
        response_0: "Yes",
        response_1: "No"
        }



    function clickHandler(e){
        e.preventDefault();
        console.log('The link was clicked!');
        console.log(dummy_data);
        <DilemmaDetail dilemma={dummy_data} />
    }

        return (
            <div>
                <Head>
                <title>Let's-Git-Ethical</title>
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="w-screen">
                    <Nav />
                    <main className="w-5/6 m-auto border border-black">
                        
                        {/* <ul>
                            {dilemmas.map((dilemma, i)=>{
                                return(
                                    // TODO: Add OnClick
                                    <li key={dilemma.id}>
                                        {/* TODO:Make link work */}
                                    {/* <h2 onClick={clickHandler(dilemma)} >{dilemma.title}</h2>
                                    </li>
                                )
                            })}
                        </ul> */} 
                        
                        <a href="#" onClick={clickHandler}>    
                            Click me
                        </a>

                        <div className="grid grid-flow-col grid-cols-4 gap-4 m-auto my-4">
                        <button className="col-span-1 mx-4 text-center border border-black">Previous</button>
                        <button className="col-span-1 col-end-5 mx-4 text-center border border-black ">Next</button>
                        </div>
                    </main>
                </body>
            </div>

)    
}