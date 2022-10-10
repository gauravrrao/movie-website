import React,{useContext} from 'react'
import Search from './Search'
import './home.css'
import { appcreator } from './context'

const Home = () => {

   const {item} = useContext(appcreator)
    
    return (
        <>
            
            <Search />
            <div className="main-box">

                { !item ? (
                            <h2 className='error'>Loading</h2>
                        ) : (
                item.map((cur)=>{
                    return<div className='container'>
                    <h3 className='title'>{cur.Title}</h3>
                    <div className="image">
                    <img src={cur.Poster} className="image" alt="img not found" srcset="" />
                    </div>
                </div>
                
            })
                        )
                
                }
            </div>

        </>
    )
}

export default Home