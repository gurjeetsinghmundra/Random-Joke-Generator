document.getElementById("generate").addEventListener("click",()=>{

    // alert("Clicked");
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(data=>data.json())
    .then(data=>{
        let ans =data["joke"];
        document.getElementById("answer").textContent=ans;
    }

    )
})