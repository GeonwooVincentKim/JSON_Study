// // var getFile = require("../js/test_loadJson.js")
// import { parse } from 'node-html-parser';
// parse = require('node-html-parser');
// import * as getFile from "../js/test_loadJson.js";
var getFile = document.createElement("script");
getFile.src = "../js/test_loadJson.js"
document.head.appendChild(getFile);

const template = document.createElement("template");
template.innerHTML = `
    <p></p>
`

class LoadJSON extends HTMLElement {

    render(){
        getFile.xhr.onreadystatechange();
        // xhr.onreadystatechange();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        document.getElementById("content").innerHTML = getFile.xhr.responseText;
        // this.shadowRoot.querySelector("p").innerText = this.getAttribute("xhr-status");
    }
}

window.customElements.define("load-json", LoadJSON);