import React from 'react'

const CardRecipe = ({ name, image, rating }) => {
  return (
    <div className="recipe-container">

      <div className='recipe-style'>
        <img src={image} alt="recipe" />
        <h6>{rating}</h6>
        <h1>{name}</h1>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default CardRecipe