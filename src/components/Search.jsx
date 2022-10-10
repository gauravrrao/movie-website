import React,{useContext} from 'react'
import './search.css'
import { appcreator } from './context'

const Search = () => {

    const {setsearch,search} = useContext(appcreator)

    let result=(e)=>{
        setsearch(e.target.value)
        // console.log(e.target.value)
    }

  return (
    <div className='search-bar'>
        <h2>Search</h2>
        <input type="text" placeholder='Search Movies'
        onChange={result} 
        value={search} />
    </div>
  )
}

export default Search