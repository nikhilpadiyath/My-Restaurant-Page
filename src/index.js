import {homePageLoad} from './home.js';
import {menu} from './menu.js';
import {contact} from './contact.js';

homePageLoad();

let tabSwitchModule = (function(){
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click",homePageLoad);
    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click",menu);
    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click",contact);
})();