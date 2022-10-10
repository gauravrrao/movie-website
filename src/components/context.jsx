import React,{useEffect,useState} from 'react'
import { createContext } from 'react'

let appcreator=React.createContext()

const Context = ({children}) => {

    const [item, setitem] = useState()
    const [search, setsearch] = useState("avengers")

    useEffect(() => {
      let api=`http://www.omdbapi.com/?apikey=29d794c5&s=${search}`
      
      let getapi=async(a)=>{
        let data =await fetch(a)
        let response = await data.json()
        setitem(response.Search)
        console.log(response.Search)
      }
      getapi(api)
    }, [search])
    


  return (
    <>

<appcreator.Provider value ={{item,setsearch,search}}>
    {children}
</appcreator.Provider>

    </>
  )
}

export default Context
export {appcreator}