const CharacterData=({info})=>{
    return(
        <div>
            <h2>{info.name}</h2>
            <img src={info.image}/>
        </div>
    );
};

export {CharacterData}