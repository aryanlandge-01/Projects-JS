const heading = document.getElementById("main-heading");
let quote_array = [];

const quote_box = document.querySelector(".quote-container");

const apiurl = "https://type.fit/api/quotes";

async function handlePromise() {
    const data = await fetch(apiurl);    
    const jsonValue = await data.json()
    quote_array.push(jsonValue); 
}
  
handlePromise();

quote_box.addEventListener("click",() => {    
    const No = Math.floor((Math.random() * 10) + 1)
    const quote_text = quote_array[0][No].text;
    let quote_author =  (quote_array[0][No].author).replace(', type.fit', '');
    
    document.getElementById("quote-text").innerHTML = quote_text;
    document.querySelector(".quote-author").removeAttribute("hidden")
    document.querySelector(".quote-author").innerHTML = quote_author;
});


