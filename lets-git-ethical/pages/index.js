import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row text-center my-8 w-screen">
        <div className="w-5/12 flex flex-col border border-black mx-12 p-3">
          <p className="my-10">
            Lick the plastic bag proudly present butt to human yet skid on floor, crash into wall cuddle no cuddle cuddle love scratch scratch meow to be let out. Go into a room to decide you didn't want to be in there anyway stare out the window scratch at the door then walk away lick master's hand at first then bite because im moody i hate cucumber pls dont throw it at me. Pooping rainbow while flying in a toasted bread costume in space my left donut is missing, as is my right, and bird bird bird bird bird bird human why take bird out i could have eaten that yet drool and human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!. Lounge in doorway. Please let me outside pouty face yay!
          </p>
        </div>
        <div className="w-5/12 flex mx-12 flex-col border border-black">
          <form className="w-full flex flex-col m-auto my-10">

            <input placeholder="Input Email" className="my-3 p-4 w-2/3 text-center m-auto border border-black border-4"type="text" ></input>          
            <input placeholder="Password" className="my-3 p-4 w-2/3 text-center m-auto border border-black border-4"type="text" ></input>
            <button className="w-6/12 m-auto my-8 p-4 border border-black border-4">Login</button>
            <button className="w-5/12 p-7 m-auto border border-black border-4">Create Account</button>
          </form>
        </div>


      
      </main>

      <footer className="">
 
      </footer>
    </div>
  )
}
