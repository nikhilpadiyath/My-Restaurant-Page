

export function contact(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent="Welcome to Nikhil's Restaurant";
    heading.classList.add("landing-title");
    content.appendChild(heading);

    const address = document.createElement("img");
    address.classList.add("image");
    address.src= "../src/asset/address.jpg";
    address.alt="Location pointer Image";
    content.appendChild(address);

    const contact1 = document.createElement("p");
    contact1.classList.add("contact-page");
    contact1.textContent="#4, North Paravoor, Ernakulam";
    content.appendChild(contact1);

    const tel = document.createElement("img");
    tel.classList.add("image");
    tel.src= "../src/asset/tel.jpg";
    tel.alt="Telephone's Image";
    content.appendChild(tel);

    const contact2 = document.createElement("p");
    contact2.classList.add("contact-page");
    contact2.textContent="0484-2456345";
    content.appendChild(contact2);

    const email = document.createElement("img");
    email.classList.add("image");
    email.src= "../src/asset/email.jpg";
    email.alt="Email's Image";
    content.appendChild(email);

    const contact3 = document.createElement("p");
    contact3.classList.add("contact-page");
    contact3.textContent="nike@gmail.com";
    content.appendChild(contact3);
}



    