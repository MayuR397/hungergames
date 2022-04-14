import './App.css';
import { Addrestaurants } from './componants/Addrestaurants';
import { RestaurantDetails } from './componants/RestaurantDetails';
import { useState } from 'react';

function App() {
  const [show,checkshow]=useState(true)
  const handlebtn=()=>{
    if(show==true) checkshow(false)
    else checkshow(true)
  }
  return (
    <div className="App">
    <div className='addResto'>
      <button className='toggle' onClick={()=>{handlebtn()}}>{show?"Add Restaurants":"Show Restaurants"}</button>
    </div>
    {show?<RestaurantDetails/>:<Addrestaurants/>}
    </div>
  );
}

export default App;
