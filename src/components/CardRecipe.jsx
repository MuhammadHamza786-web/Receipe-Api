import React from 'react'

const CardRecipe = ({name ,image}) => {
  return (
    <div className="main">

    <div className='recipe-style'>
        <h1>{name}</h1>
        <img src={image} alt="image" />
        
    </div>
    </div>
  )
}

export default CardRecipe