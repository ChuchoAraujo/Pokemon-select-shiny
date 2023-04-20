import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext";
import { useParams } from 'react-router'
import { AiFillHeart } from 'react-icons/ai';


export const Home = () => {
	const { store, actions } = useContext(Context);

	const [pokemon, setPokemon] = useState([]) // all pokemon
	const [pokemonSelected, setPokemonSelected] = useState(null) // one pokemon
	const [isShiny, setIsShiny] = useState(false) // hacerlo shiny

	useEffect(() => {
		const getAllPokemon = async () => {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
			const data = await response.json()
			setPokemon(data.results)
		}
		getAllPokemon()
	}, [])

	const handlePokemonChange = async (event) => {
		const pokemonName = event.target.value // tomar el valor del select en una variable
		console.log(pokemonName)
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // asignamos el valor del select a la url
		const data = await response.json()
		setPokemonSelected(data)
	}

	const handleShiny = () => {
		setIsShiny(!isShiny)
	
	}



	return (
		<div className='container text-center'>
			<h1 className='m-5'>Gotta catch em all</h1>
			<select className='form-select' onChange={handlePokemonChange}>
				<option>Select a pokemon</option>
				{pokemon.map((pokemon, index) => (
					<option key={index} value={pokemon.name}>{pokemon.name}</option>
				))}
			</select>

			{pokemonSelected && (
				<div>
					<h1 className='mt-4'>{pokemonSelected.name}</h1>
					<img
						src={isShiny ? pokemonSelected.sprites.front_shiny : pokemonSelected.sprites.front_default}
						alt={pokemonSelected.name}
						width={200}

					/>
					<br />
					<button
					className='btn btn-dark'
						onClick={handleShiny}>{isShiny ? 'Make it normal' : 'Give me color!'}</button>
				</div>
			)}
		</div>
	)
}


