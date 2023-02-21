import location from './asset/address.jpg';
import tele from './asset/tel.jpg';
import mail from './asset/email.jpg';

export function contact(){
    const content = document.querySelector("#content");
    content.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent="Welcome to Nikhil's Restaurant";
    heading.classList.add("landing-title");
    content.appendChild(heading);

    const address = document.createElement("img");
    address.classList.add("contact-image");
    address.src= location;
    address.alt="Location pointer Image";
    content.appendChild(address);

    const contact1 = document.createElement("p");
    contact1.classList.add("contact-page");
    contact1.textContent="#4, North Paravoor, Ernakulam";
    content.appendChild(contact1);

    const tel = document.createElement("img");
    tel.classList.add("contact-image");
    tel.src= tele;
    tel.alt="Telephone's Image";
    content.appendChild(tel);

    const contact2 = document.createElement("p");
    contact2.classList.add("contact-page");
    contact2.textContent="0484-2456345";
    content.appendChild(contact2);

    const email = document.createElement("img");
    email.classList.add("contact-image");
    email.src= mail;
    email.alt="Email's Image";
    content.appendChild(email);

    const contact3 = document.createElement("p");
    contact3.classList.add("contact-page");
    contact3.textContent="nike@gmail.com";
    content.appendChild(contact3);
}



    