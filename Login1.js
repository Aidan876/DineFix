import React, { useState } from "react";
import "../styles/Login.css"
import RestaurantDetails from "../components/RestaurentDetails";
import useFetch from "../components/useFetch";


function Login1(){
    const [Id, setId] = useState(1);
    const [Name, setName] = useState('');
    const [Address1, setAddress1] = useState('');
    const [Address2, setAddress2] = useState('');
    const [Area, setArea] = useState('');
    const [ ContactName, setContactName] = useState('');
    const [ Number, setNumber] = useState('');
    const [ description, setDescription] = useState('');
    const [restaurant, setRestaurant] = useState([]);
   

    
   
      
      

      const handleSubmit = (e) => {
        e.preventDefault();
        const restaurant= {Id, Name, Address1, Address2, Area, ContactName, Number, description };
        fetch('http://localhost:8003/restaurant/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant)
        }).then(() => {    
        
    })
  }

      

    return (
        
        <div className="login">
            <h2 className="title"> Add Your Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Charities Name:</label>
        <input 
          type= "text"      
          required 
          value={Name}
          onChange={(e) => setName(e.target.value)}

        />
        <label>Charities Address 1st line</label>
        <input
          type="text"
          required
          value={Address1}
          onChange={(e) => setAddress1(e.target.value)}
          ></input>
          <label>Charities Address 2nd line</label>
        <input
          type="text"
          required
          value={Address2}
          onChange={(e) => setAddress2(e.target.value)}
          ></input>
        <label>Charities Address Area</label>
        <select
          value={Area}
          onChange={(e) => setArea(e.target.value)}
          >
          <option value="Dublin 1">D1</option>
          <option value="Dublin 2">D2</option>
          <option value="Dublin 3">D3</option>
          <option value="Dublin 4">D4</option>
          <option value="Dublin 5">D5</option>
          <option value="Dublin 6">D6</option>
          <option value="Dublin 7">D7</option>
          <option value="Dublin 8">D8</option>
          <option value="Dublin 9">D9</option>
          <option value="Dublin 10">D10</option>
          <option value="Dublin 11">D11</option>
          <option value="Dublin 12">D12</option>
          <option value="Dublin 13">D13</option>
          <option value="Dublin 14">D14</option>
          <option value="Dublin 15">D15</option>
          <option value="Dublin 16">D16</option>
          <option value="Dublin 17">D17</option>
          <option value="Dublin 18">D18</option>
          <option value="Dublin 19">D19</option>
          <option value="Dublin 20">D20</option>
          <option value="Dublin 21">D21</option>          
          <option value="Dublin 22">D22</option>
          <option value="Dublin 23">D23</option>
          <option value="Dublin 24">D24</option>
        </select>
        <label>Contact Number</label>
        <input
          type="text"
          required
          value={Number}
          onChange={(e) =>setNumber (e.target.value)}
          ></input>
           <label>Contact Name</label>
        <input
          type="text"
          required
          value={ContactName}
          onChange={(e) =>setContactName (e.target.value)}
          ></input>
          <label>Restaurant description</label>
          <textarea
          required
          value={description}
          onChange={(e) =>setDescription (e.target.value)}
         
        ></textarea>
        

        <button>Sign Up</button>
      </form>
        </div>
    );


}

export default Login1