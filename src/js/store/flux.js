const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			idCharacter: {},
			
		},
		actions: {
			selectId: (characterSelected) => {
				setStore({ idCharacter: characterSelected });
				console.log(getStore().idCharacter)
			},
			addFavorite: () => {
				const store = getStore();
				const newFavorite = store.idCharacter;
				setStore({ favorites: [...store.favorites, newFavorite] });
				console.log(getStore().favorites)
			},
		}
	};
};

export default getState;
