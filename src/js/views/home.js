import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacter } from "./CardCharacter";

export const Home = () => {

	const [characters, setCharacters] = useState([])
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		const getAllCharacters = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character")
			const data = await response.json()
			console.log(data.results)
			setCharacters(data.results)
		};

		getAllCharacters();
	}, [])

	const handleAddFavorites = (character) => {
		setFavorites([...favorites, character]);
	}




	return (
		<div className="text-center mt-5">
			<h1><strong>Chose your character</strong></h1>
			<div className="m-5">
				<CardCharacter characters={characters} handleAddFavorites={handleAddFavorites} />
				<div>
					<button className="button-pagination"></button>
					<button className="button-pagination"></button>
				</div>
			</div>
			
		</div>
	)

};
