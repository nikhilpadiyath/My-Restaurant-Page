export function menu(){
    const content = document.querySelector("#content");
    content.replaceChildren();
    const heading = document.createElement("h1");
    heading.textContent="Welcome to Nikhil's Restaurant";
    heading.classList.add("landing-title");
    content.appendChild(heading);

    const biriyani = document.createElement("img");
    biriyani.classList.add("image");
    biriyani.src= "../src/asset/biriyani.jpg";
    biriyani.alt="Biriyani's Image";
    content.appendChild(biriyani);

    const food1 = document.createElement("p");
    food1.classList.add("menu-page");
    food1.textContent="Biriyani";
    content.appendChild(food1);

    const noodles = document.createElement("img");
    noodles.classList.add("image");
    noodles.src= "../src/asset/noodles.jpg";
    noodles.alt="Noodles' Image";
    content.appendChild(noodles);

    const food2 = document.createElement("p");
    food2.classList.add("menu-page");
    food2.textContent="Noodles";
    content.appendChild(food2);
}


    
