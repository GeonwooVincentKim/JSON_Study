const template = document.createElement("template");
template.innerHTML = `
    <style>
      html {
        margin: 0;
        box-sizing: border-box;
      }
      #tours ul {
        padding: 0;
        overflow: hidden;
      }
      #tours li {
        list-style: none;
        float: left;
        width: 22.75%;
        height: 150px;
        background: rgba(37, 43, 48, 0.8);
        padding: 0.5em;
        position: relative;
      }
      #tours > ul > li + li {
        margin-left: 3%;
      }
      h2 {
        color: white;
      }
      .details {
        display: block;
        line-height: 1.5em;
        background: #82add8;
        border: 1px solid #191d20;
        font-weight: bold;
        left: 0.5em;
        right: 0.5em;
        padding: 3px 0;
        text-align: center;
      }
      .book {
        display: block;
        background: #4cb64f;
        border: 1px solid #081f09;
        cursor: pointer;
        width: 100%;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        padding: 5px 24px 3px 24px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2em;
      }
    </style>
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