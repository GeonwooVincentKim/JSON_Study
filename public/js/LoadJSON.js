const template = document.createElement("template");
template.innerHTML = `
    <p></p>
`

class LoadJSON extends HTMLElement {
    constructor(){
        super(this.render());
    }

    render(){
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector("p").innerText = this.getAttribute("xhr-status");
    }
}

window.customElements.define("load-json", LoadJSON);