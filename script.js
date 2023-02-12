const resultContainer=document.getElementById("resultDiv")
document.getElementById("serchButton").addEventListener("click",()=>{
    let data=document.getElementById("inputfield").value;
    fetch(`http://www.omdbapi.com/?apikey=ce70a19c&t=${data} `).then((response)=>{return response.json()}).
    then((data)=>{
        const movieInfo=data;
        console.log(data);
        const imageSrc=`http://img.omdbapi.com/?apikey=ce70a19c&i=${movieInfo.imdbID}`;
        const element=`
           <img src=${imageSrc} alt="moviePoster" />
             <ul>
                 <li>Relese In : ${movieInfo.Year}</li>
                 <li>IMDB Rating: ${movieInfo.imdbRating}</li>
                 <li>Director: ${movieInfo.Director}</li>
                 <li>Cast: ${movieInfo.Actors}</li>
             </ul>
        `;
        resultContainer.innerHTML=element;
    }).catch((err)=>(console.log(err)));
})