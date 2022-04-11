import { useState,useReducer } from "react";
import { reducer,initialState } from "./reducerFavorites";

const CharacterData=({info})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const [favorite, setFavorite] = useState(false)
    
    const handleFavorites=()=>{
        setFavorite(lastEvent=>setFavorite(!lastEvent));
        dispatch({type:'ADD', payload:info})
        console.log(initialState)
    };
    
    return(
        <div>
            <h2>{info.name}</h2>
            <button disabled={favorite} onClick={handleFavorites}>AGREGAR A FAVORITOS</button>
            <img src={info.image}/>
            
        </div>
    );
};

export {CharacterData}