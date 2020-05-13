let container = document.createElement("div")
 let root = document.getElementById("root")
 let countriesContainer = document.getElementById("countries-container")

fetch(`https://restcountries.eu/rest/v2/all`)
.then(response =>{
     return response.json()
})
.then(data =>{
    console.log(data)
    
    displayCountries(data)

})
//.catch( error => console.error(error));

function displayCountries(data){
    data.forEach(element => {
         console.log(element.name)
         let p = document.createElement("p")
         let div = document.createElement("div")
         countriesContainer.appendChild(div)
          p.innerHTML = `${element.name}`
          p.className ="col-2"

          let img = document.createElement("img")
           img.className = "col-12"
          img.src = `${element.flag}`
          div.appendChild(img)
          div.appendChild(p)
          div.className = "country-card col-3" 

    });
    

} 