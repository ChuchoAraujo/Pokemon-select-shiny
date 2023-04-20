import React from "react";
import { Link } from "react-router-dom";
import { GiAbstract069 } from 'react-icons/gi';

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 p-4 navColor">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><strong><GiAbstract069 />{" "}Pokemón </strong></span>
			</Link>
			<div className="ml-auto">
				<Link to="/favoritesList">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
