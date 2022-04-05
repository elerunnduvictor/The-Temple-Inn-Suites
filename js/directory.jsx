const requestURL = "https://Khalid2424.github.io/The-Temple-Inn-Suites/data/data.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const directories = jsonObject["directory"];
        directories.forEach(displayDirectories);
    });

function displayDirectories(directory) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p1");
    let p2 = document.createElement("p2");
    let p3 = document.createElement("p3");
    let p4 = document.createElement("p4");
    let p5 = document.createElement("p5");
    let p6 = document.createElement("p6");
    let portrait = document.createElement("img");

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = directory.name;
    p1.innerHTML = `${directory.address} <br> ${directory.phone}, <br> ${directory.email} <br>`,
        p2.innerHTML = `${directory.services} <br>`;
    p3.innerHTML = `${directory.ordinanceschedule} <br>`;
    p4.innerHTML = `${directory.sessionschedule} <br>`;
    p5.innerHTML = `<strong>Type: </strong>${directory.templeclosureschedule} <br>`;
    p6.innerHTML = `<strong>Opened:</strong> ${directory.history} <br>`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute("alt", `image of ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
}