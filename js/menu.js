const menuBtn = document.getElementById("ham");
const ul = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    const dropDown = document.querySelector(".primary");

    if (!dropDown.classList.contains("open")) {
        dropDown.classList.add("open");
        menuBtn.textContent = "X";
        setTimeout(function() {
            ul.classList.remove("visuallyhidden");
        }, 20);
    } else {
        menuBtn.innerHTML = "&#9776;";
        ul.classList.add("visuallyhidden");
        ul.addEventListener(
            "transitionend",
            function(e) {
                dropDown.classList.remove("open");
            }, {
                capture: false,
                once: true,
                passive: false,
            }
        );
    }
});

// set active

function active() {
    switch (document.title) {
        case "Temple Inn - A Reverent Abode":
            document.querySelector("#home").classList.add("active");
            break;

        case "Temple Inn - Make A Reservation":
            document.querySelector("#reservation").classList.add("active");
            break;

        case "Temple Inn - Our Services":
            document.querySelector("#services").classList.add("active");
            break;

        case "Temple Inn - View Temples":
            document.querySelector("#temples").classList.add("active");
            break;
    }
}

active();