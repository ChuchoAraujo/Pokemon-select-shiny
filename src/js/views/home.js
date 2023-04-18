import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacter } from "./CardCharacter";

export const Home = () => {

	const [characters, setCharacters] = useState([])

	useEffect(() => {
		const getAllCharacters = async () => {
			const response = await fetch("https://rickandmortyapi.com/api/character")
			const data = await response.json()
			console.log(data.results)
			setCharacters(data.results)
		};

		getAllCharacters();
	}, [])


	return (
		<div className="text-center mt-5">
			<h1>Rick y Morty</h1>
			<div className="m-5">
				<h2>--- Characters ---</h2>
				<CardCharacter characters={characters} />
				<div>
					<button className="button-pagination"></button>
					<button className="button-pagination"></button>
				</div>
			</div>
			
		</div>
	)

};
