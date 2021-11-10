var xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", "data/data.json");
xhr.send();

xhr.onreadystatechange = function () {
    // Finish to get response from Server && Get a normal response
    if (xhr.readyState !== XMLHttpRequest.DONE) 
        return;
    if (xhr.status === 200) {
        console.log(xhr.responseText);
        xhr.responseText;

        // this.attachShadow({mode: "open"});
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

        // document.getElementById("content").innerHTML = xhr.responseText;
        // this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("content");

        // Deserializing (String -> Object)
        responseObject = JSON.parse(xhr.responseText);

        return xhr.responseText;
    }
}

// module.exports = {xhr};