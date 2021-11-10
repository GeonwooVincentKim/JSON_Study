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
        // xhr.responseText;

        document.getElementById("content").innerHTML = xhr.responseText;

        // Deserializing (String -> Object)
        responseObject = JSON.parse(xhr.responseText);
    }
}