const btnEl = document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apikey="uN9alPT52SImmQzVEI1Dng==gozvKRG30uFKyifV";
const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    const response=await fetch(apiURL,options);
    const data=await response.json();
    // console.log(data[0].joke);
    jokeEl.innerText=data[0].joke;
}
btnEl.addEventListener("click",getJoke);