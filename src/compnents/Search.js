import React, {useState} from 'react'
import axios from "axios";

function Search() {

	const [location, setLocation] = useState("");
	const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=be92df294c1ccd262d42e43e3e67fa3a`;
	const searchLocation = (event) => {
		if (event.key === "Enter") {
		  axios.get(url).then((response) => {
			setData(response.data);
			console.log(response.data);
		  });
		  setLocation('')
		}
	  };

  return (
    <>
    <div className="hero" data-bg-image="images/banner.png">
				<div className="container">
					<form action="#" className="find-location">
						<input value={location} onChange = {event => setLocation(event.target.value)} onKeyPress = {searchLocation} type="text" placeholder="Find your location..."/>
						<input type="submit" value="Find"/>
					</form>

				</div>
			</div>
    </>
  )
}

export default Search
