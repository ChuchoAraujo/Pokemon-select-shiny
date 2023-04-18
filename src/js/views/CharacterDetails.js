import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export const CharacterDetails = () => {

    const { id } = useParams()

    const [oneCharacter, setOneCharacter] = useState(null)

    useEffect(() => {
        const getOneCharacter = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setOneCharacter(data)
        }
        getOneCharacter()
    }, [id])

    return (
        <div className='container-single'>
            {oneCharacter && (
                <div className='card-body-single'>
                    <img src={oneCharacter.image} />
                    <div className='card-texto'>
                        <p><strong>{oneCharacter.name}</strong></p>
                        <p>Species:  {oneCharacter.species}</p>
                        <p>Gender:  {oneCharacter.gender}</p>
                        <p>Location:  {oneCharacter.location.name}</p>                      
                        <p>Origin: {oneCharacter.origin.name}</p>
                        <p>Status:  {oneCharacter.status}</p>
                        <button className="btn btn-warning">Favoritos</button>
                    </div>

                </div>
            )}
        </div>
    )
}
