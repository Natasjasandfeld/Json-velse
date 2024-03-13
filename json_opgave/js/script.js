"use strict";  

const btnElem = document.getElementById("btn");

const infoElem = document.querySelector(".cats_info");

btnElem.addEventListener("click", () => {
    const url = "../json/cats.json";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            json.forEach( function(val) {
               // AL kode vi kommer til at skrive bliver indsat her
               
              // Oprette et div element gemt i variablen catContainer
              const catContainer = document.createElement("div");

              // Tilføj en attribut til vores catContainer 
              catContainer.classList.add("cat-container");
              
             // Opretter et cat container til den enkelte cat i den overordnede container
              const catItem = document.createElement("div");

              // Tilføj en attribut til vores catContainer 
              catItem.classList.add("cat-item");

              // Opretter et img tag til katten
              const catImg = document.createElement("img");

              // Tilføjer en source og alt til vores catImage
              catImg.src = `${val.image_url}`;
              catImg.alt = `${val.name}`;
              
              // Opretter Unordered list med list items
              // ....og tilføjer isnfo om kattene til list-items
              const catInfo = document.createElement("ul");

              catInfo.innerHTML = 
              `
                <li>Name: ${val.name}</li>
                <li>Weight:${val.weight}</li>
                <li>Breed:${val.breed}</li>
              `;

              catItem.appendChild(catImg);
              catItem.appendChild(catInfo);

              catContainer.appendChild(catItem);

              infoElem.appendChild(catContainer);

            })
            
        })

});

