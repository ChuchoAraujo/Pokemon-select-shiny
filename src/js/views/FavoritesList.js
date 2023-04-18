import React, { useContext } from 'react'
import { Context } from "../store/appContext";

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);


  return (
    <div>
        <h1>Favorites List</h1>
        {store.favorites.map((fav, index)=> (
            <div key={index}>
                <img src={fav.image}/>
                <p>{fav.name}</p>
            </div>
        ))}
    </div>
  )
}
