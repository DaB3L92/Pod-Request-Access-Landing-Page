const inputEmailMob = document.getElementById("email-input-mobile");
const btnMobile = document.getElementById("submit-mobile");

const inputEmailDesk = document.getElementById("email-input-desktop");
const btnDesk = document.getElementById("submit-desktop");

const expresion = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/
}


const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
        if (expresion.email.test(e.target.value)){
            document.getElementById("validation-email").classList.add("hidden")

        } else {
            document.getElementById("validation-email").classList.remove("hidden")
        }
        break;
    }
}

inputEmailMob.addEventListener("keyup", validarForm);
inputEmailMob.addEventListener("blur", validarForm);

btnMobile.addEventListener("click", (e) => {
    e.preventDefault();
});

inputEmailDesk.addEventListener("keyup", validarForm);
inputEmailDesk.addEventListener("blur", validarForm);

btnDesk.addEventListener("click", (e) => {
    e.preventDefault();
});