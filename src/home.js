export function homePageLoad(){

    const content=document.querySelector("#content");
    const heading= document.createElement("h1");
    heading.classList.add("title");
    heading.textContent = "Welcome to Nikhil's Restaurant";
    content.appendChild(heading);

    const dining= document.createElement("img");
    dining.classList.add("myImage");
    dining.src="../src/asset/dining.jpg"
    dining.alt= "Restaurant Image";
    content.appendChild(dining);

    const para1= document.createElement("p");
    para1.classList.add("homePageLines");
    para1.textContent= "This is one of the best restaurants in India";
    content.appendChild(para1);

    const para2= document.createElement("p");
    para2.classList.add("homePageLines");
    para2.textContent= "We have the best culinaries";
    content.appendChild(para2);
}
