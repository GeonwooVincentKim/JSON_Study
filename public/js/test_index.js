const template = document.createElement("template");
template.innerHTML = `
    <link href="../css/test_index.css" rel="stylesheet">
    <h2></h2>
    <span class="details"></span>
    <button class="book"></button>
`

class TestIndex extends HTMLElement {
    constructor(){
        super();
        
        // let getTemplate = document.getElementById("test-index")
        // let templateContent = template.content;
        // document.body.appendChild(templateContent);

        // let getTemplate = document.getElementById("test-local-css")
        // let templateContent = getTemplate.content;
        // document.body.appendChild(templateContent);

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // this.shadowRoot.querySelector("li").innerHTML = this.getAttribute("list");
        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("city");
        this.shadowRoot.querySelector("span").innerText = this.getAttribute("detailPrice");
        this.shadowRoot.querySelector("button").innerText = this.getAttribute("isBook");
        // this.shadowRoot.querySelector("button").innerText = this.getAttribute("checkBook");
    }
}

window.customElements.define("test-index", TestIndex)