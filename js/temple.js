const templeURL = "./data/temples.json";

fetch(templeURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const temples = makeCard(jsObject.temples);
        document.querySelector(".temple-cards-grid").innerHTML = temples.join("");

        //call addevntlistener
        addListeners();
    });

function makeCard(tempList) {
    const templeHtml = tempList.map((temple) => {
        const favItem = window.localStorage.getItem(temple.id);
        let ifFav;

        favItem === "favo" ? (ifFav = "favo") : (ifFav = "unfav");

        //temple services
        const services = temple.services.map((service) => {
            return `<li>${service}</li>`;
        });

        //temple closure
        const closures = temple.closure.map((element) => {
            const closureDates = element.dates.map((date) => {
                return `<li>${date}</li>`;
            });

            return `<p>${element.year}</p>
                <ul>
                  ${closureDates.join("")}
                </ul>`;
        });

        //the template
        return `
        <div class="temple-card">
            <div class="temple-image" style="background-image: url(./images/${
              temple.image
            })">
              <div class="temple-name-overlay">
                <p>${temple.name}</p>
                <a href="${temple.link}" target="_blank">
                  <p>Book Appointment</p>
                  <span class="underline"></span>
                </a>
              </div>
            </div>
            <div class="temple-details">
              <div class="temple-location">
              <input type="hidden" value=${temple.id}>
                <div>
                  <p>${temple.address}</p>
                  <p>${temple.phone}</p>
                  <p>${temple.email}</p>
                </div>
                
                  <img src="./images/${ifFav}.png" alt="favourite" class="like-button ${ifFav}"/>
                
              </div>
              <div class="temple-services">
                <p>Services</p>
                <ul>
                  ${services.join("")}
                </ul>
              </div>
              <div class="temple-history">
                <p>History</p>
                <p>
                  ${temple.history}
                </p>
              </div>
              <div class="temple-schedule">
                <p>Ordinance/session schedule</p>
                <p>
                    ${temple.schedule}
                </p>
              </div>
              <div class="temple-closure">
                ${closures.join("")}
              </div>
            </div>
          </div>`;
    });

    //return temple list
    return templeHtml;
}

function addListeners() {
    const likeBtn = document.querySelectorAll(".like-button");
    likeBtn.forEach((element) => {
        element.addEventListener("click", (event) => {
            const tempId = event.target.parentNode.childNodes[1].value;

            if (event.target.classList.contains("unfav")) {
                event.target.src = "./images/favo.png";
                event.target.classList.remove("unfav");
                event.target.classList.add("favo");
                localStorage.setItem(tempId, "favo");
            } else if (event.target.classList.contains("favo")) {
                event.target.src = "./images/unfav.png";
                event.target.classList.add("unfav");
                event.target.classList.remove("favo");
                localStorage.setItem(tempId, "unfav");
            }
        });
    });
}