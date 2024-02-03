import Chai from "./chai"




function App() {
 const username = "chai aur code"

  return (
    <>
    {/*<h1>chai aur react with vite | HC {username}</h1>
    /*under{..} we will treat it as a variable*/}
    <Chai/>
    <h1>chai aur react {username}</h1>
    {/*username : evaluated expression*/}
    <p>test para</p>
    </>
  )
}

export default App
