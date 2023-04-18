import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai';

export const CardCharacter = ({ characters, handleAddFavorites }) => {
    return (
        <>
            <div className='container-card'>
                {characters.map((character, index) => (
                    <Link to={`/character/${character.id}`}>
                        <div key={index} className='card-body'>
                            <img src={character.image} />
                            <div className='card-texto'>
                                <p><strong>{character.name}</strong></p>
                                <p>Species{character.species}</p>
                                <p>Origin: {character.origin.name}</p>
                            <button onClick={() => handleAddFavorites(character)} className='btn btn-warning'><AiFillHeart/></button>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <div className='container'>test</div>
        </>
    )
}
