const template = document.createElement('template');
template.innerTHML =
    `
        <style>
            #tours ul {
                padding: 0;
                overflow: hidden;
            }
            
            /* #tour-child {
                list-style: none;
                float: left;
                width: 22.75%;
                height: 150px;
                background: rgba(37, 43, 48, 0.8);
                padding: 0.5em;
                position: relative;
            } */
            
            #tours #tour-child {
                list-style: none;
                float: left;
                width: 22.75%;
                height: 150px;
                background: rgba(37, 43, 48, 0.8);
                padding: 0.5em;
                position: relative;
            }
            
            #tours > ul > #tour-child {
                margin-left: 3%;
            }
            
            #tours > ul > #tour-child h2 {
                color: #000;
            }
            
            /* #tours > ul > li + li {
                margin-left: 3%;
            } */
            
            h2 {
                color: white;
            } 
            
            #span {
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
            button {
                display: block;
                background: #4cb64f;
                border: 1px solid #081f09;
                cursor: pointer;
                width: 100%;
                margin-top: 0.4em;
                margin-bottom: 0.4em;
                padding: 5px 24px 3px;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 1.2em;
            }
            
        </style>
        <li class="local-tours">
            <h2></h2>
        </li>
        
    `

/*    <li id="tour-child">
        <h2>${this}</h2>
        <span class="details">${this}</span>
        <button class="book">${this}</button>
    </li> */
/*<template id="data-template">
        
    </template>
*/
class CustomLocalTours extends HTMLElement {
    /*constructor(){
        super();
        let getTemplate = document.getElementById("test-local-css")
        let templateContent = getTemplate.content;
        document.body.appendChild(templateContent);

        //let h2 = document.createElement("h2");
        //h2.innerHTML = `${this.getAttribute("h2")}`

        //let getH2Template = h2.content;
        // document.body.appendChild(getH2Template);

        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(templateContent.cloneNode(true));
    }*/

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("h2");
    }

    // connectedCallback() {
    //     this.render();
    // }

    // render() {
    //     // document.createElement("template")
    //     // var clone = document.importNote(getTemplate, true);
    //     // let getTemplate = document.getElementById("test-local-css")
    //     // let templateContent = getTemplate.content;
    //     // document.body.appendChild(templateContent);

    //     // this.attachShadow({mode: 'open'});
    //     // this.shadowRoot.appendChild(template.content.cloneNode(true));

    //     // this.shadowRoot.querySelector("h2").innerText = this.getAttribute("h2");

    //     // let h2 = document.createElement("h2");
    //     // h2.innerHTML = this.getAttribute("h2")
    //     // h2.innerHTML = `${this.getAttribute("h2")}`
    //     // document.body.appendChild(getH2Template);

    //     // h2.style = "color: white;"
    //     // document.getElementsByTagName("h2").appendChild(h2)
    //     // this.appendChild(h2);

    //     // const shadowRoot = this.attachShadow({mode: 'open'})
    //     //    .appendChild(getH2Template.cloneNode(true));

    //     let span = document.createElement("span");
    //     span.innerHTML = `${this.getAttribute("span")}`;
    //     /*span.style = `display: block;
    //         line-height: 1.5em;
    //         background: #82add8;
    //         border: 1px solid #191d20;
    //         font-weight: bold;
    //         left: 0.5em;
    //         right: 0.5em;
    //         padding: 3px 0;
    //         text-align: center;
    //     `*/
    //     this.appendChild(span);

    //     let button = document.createElement("button");
    //     button.innerHTML = this.getAttribute("button-text");
    //     button.style = `display: block;
    //                 background: #4cb64f;
    //                 border: 1px solid #081f09;
    //                 cursor: pointer;
    //                 width: 100%;
    //                 margin-top: 0.4em;
    //                 margin-bottom: 0.4em;
    //                 padding: 5px 24px 3px 24px;
    //                 text-transform: uppercase;
    //                 font-weight: bold;
    //                 font-size: 1.2em;
    //             `
    //     this.appendChild(button);
    // }

    // static get observerdAttributes() {
    //     return ["class", "h2-innerHTML", "details", "button"]
    // }
}

// customElements.define("local-tours", CustomLocalTours)
window.customElements.define("local-tours", CustomLocalTours)