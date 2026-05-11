
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import './App.css';
import CardRecipe from "./components/CardRecipe";
import React from 'react';


function App() {


const [recipes ,setproducts]=useState([]);


const gainProducts=(async()=>{

  try{

const SetApi=await axios.get(" https://dummyjson.com/recipes")
setproducts(SetApi.data.recipes)
console.log(SetApi)


  }catch(error){
console.log("error" ,error)
  }



})





useEffect(()=>{
  gainProducts()
},[])




  return (
    <div className="App">
     <h1 className='heading'>Recipe Card</h1>
      {recipes.map((product)=>{

     return(
      <CardRecipe
      key={product.id} name={product.name} image={product.image} rating={product.rating}/>
     )


      })}
    

       

    </div>
  );
}

export default App;
