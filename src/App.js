import React, { useState, useEffect} from "react";

export default function App(){
	const [title, setTitle] = useState([]);
	

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d5601d7a4mshbe68e99ba14dc80p111a4cjsnbb1a325931ae',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};



useEffect(()=>{
	let movieName = title;
	//console.log(movieName)
	let api = 'https://movie-database-alternative.p.rapidapi.com/?s=';
	let url = api+movieName+'&r=json&page=1';

fetch(url, options)
	.then(response => response.json())
	.then(data=>displayMovies(data))
	.catch(err => console.error(err))
}
,[title]);

function displayMovies(data){

	document.getElementById('list').innerHTML='';

	for(var i =0; i<data.Search.length;i++){
	let titleOne = data.Search[i];
	//let names = Object.entries(titleOne);
	let nameT = titleOne.Title +" "+"("+titleOne.Year+")";
	let pic = titleOne.Poster;
	let picZ = document.createElement('img');
	picZ.setAttribute("src",pic);
	

	//document.getElementById('list').innerHTML+="<li>"+nameT+"</li>"+"<br />";
	document.getElementById('list').appendChild(picZ);
	}
}

return(
  <>
   <input type="text" placeholder="Movie/Series Title" id="search" />
    <button className="btn btn-primary" value="title" onClick={()=>setTitle(document.getElementById('search').value)}>Search</button> 
	<ul id="list" className="flex-container"></ul>
	
  </>
)
}