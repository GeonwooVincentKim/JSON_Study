// // var getFile = require("../js/test_loadJson.js")
// import { parse } from 'node-html-parser';
// parse = require('node-html-parser');
// import * as getFile from "../js/test_loadJson.js";
var getFile = document.createElement("script");
getFile.type = "text/javascript"
getFile.src = "../js/test_loadJson.js"
document.head.appendChild(getFile);
console.log(getFile);
// console.log(xhr.responseText);

const template = document.createElement("template");
template.innerHTML = `
    <p></p>
`

class LoadJSON extends HTMLElement {

    render(){
        
        // xhr.onreadystatechange();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        getFile.shadowRoot.querySelector("p").innerText = this.document.getElementById("content").innerHTML;
        // this.shadowRoot.querySelector("p").innerText = this.getAttribute("xhr-status");
    }
}

window.customElements.define("load-json", LoadJSON);