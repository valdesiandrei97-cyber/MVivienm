const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* ==========================
   LOADING
========================== */

const lines = document.querySelectorAll(".terminal p");
const progress = document.getElementById("progress");

window.onload = () => {

    let i = 1;

    const interval = setInterval(() => {

        if (i < lines.length) {
            lines[i].classList.remove("hidden");
        }

        progress.style.width = (i / (lines.length - 1)) * 100 + "%";

        i++;

        if (i > lines.length - 1) {

            clearInterval(interval);

            setTimeout(() => {
                showScreen("main");
            }, 700);

        }

    }, 700);

};

/* ==========================
   MAIN
========================== */

document
    .getElementById("continueBtn")
    .addEventListener("click", () => {

        showScreen("survey");

    });

/* ==========================
   SURVEY
========================== */

document
    .getElementById("surveyBtn")
    .addEventListener("click", () => {

        const result = document.getElementById("surveyResult");

        result.innerHTML = `
            <br>
            <strong>Scientific conclusion:</strong>
            <br><br>
            100%.
            <br>
            Obviously.
            <br><br>
            (The slider was just there to make you feel involved 😄)
            <br><br>
        `;

        const next = document.createElement("button");
        next.textContent = "Continue →";

        next.onclick = () => showScreen("invite");

        result.appendChild(next);

    });

/* ==========================
   INVITATION
========================== */

document
    .getElementById("yesBtn")
    .addEventListener("click", () => {

        showScreen("dates");

    });

/* ==========================
   DATE SELECTION
========================== */

const dateButtons = document.querySelectorAll(".date");
const selected = document.getElementById("selected");
const saveBtn = document.getElementById("saveBtn");

let chosenDate = "";

dateButtons.forEach(button => {

    button.addEventListener("click", () => {

        dateButtons.forEach(btn =>
            btn.classList.remove("selected")
        );

        button.classList.add("selected");

        chosenDate = button.innerText.replace("\n", " ");

        selected.innerHTML = `
            <strong>Selected:</strong><br>${chosenDate}<br>After 20:00
        `;

        saveBtn.disabled = false;

    });

});

/* ==========================
   FINAL
========================== */

saveBtn.addEventListener("click", () => {

    showScreen("success");

    // Aici vom adăuga EmailJS mai târziu.

    console.log("Selected date:", chosenDate);

});
