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
        // xhr.responseText; this.attachShadow({mode: "open"});
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

        // document
        //     .getElementById("content")
        //     .innerHTML = xhr.responseText;

        // this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("content");
        // Deserializing (String -> Object)
        responseObject = JSON.parse(xhr.responseText);

        // var getContent = document
        //     .getElementById("content")
        //     .innerHTML

        let newContent = '<div id="tours"><h1>Guided Tours</h1><ul>';

        responseObject
            .tours
            .forEach(tour => {
                newContent += `<li class="${tour.region} tour">
                <h2>${tour.location}</h2>
                <span class="details">${tour.details}</span>
                <button class="book">Book Now</button>
              </li>`;
            });

        newContent += '</ul></div>';
        document.getElementById("content").innerHTML = newContent;

        var getContent = document.getElementById("content").innerHTML;
        return getContent;
        // return xhr.responseText;
    } else {
        console.log(`[${xhr.status}] : ${xhr.statusText}`)
    }
}

// module.exports = {xhr};