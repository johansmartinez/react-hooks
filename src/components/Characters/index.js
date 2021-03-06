import { useEffect, useState } from 'react';
import {CharacterData} from './CharacterData';
import { initialState } from './reducerFavorites';

const Characters =()=>{
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response=>{return response.json()})
        .then(({results})=>setCharacters(results))
        .catch(error=>alert(error))
        .finally(()=>{console.log(characters)})
    }, [])
    
    
    return (
        <div>
            <p> Favoritos: {initialState.favorites.length}</p>
            {characters.map((element,i)=>(
                <CharacterData key={`character${i}`} info={element}/>
            ))}
        </div>
    );
};

export {Characters};