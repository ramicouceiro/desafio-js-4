class Pizza {
    constructor(id, nombre, ingredientes, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.img = img;
    }
}

let ingNapo = ["Muzzarella", " Salsa", " Tomate", " Ajo"];
let ingHuevo = ["Muzzarella", " Salsa", " Huevo"];
let ingMuzza = ["Muzzarella", " Salsa"];
let ingProvo = ["Provolone", " Salsa"];
let ingRucula = ["Muzzarella", " Salsa", " Rucula", " Jamon Crudo"];
let ingPrimavera = ["Muzzarella", " Salsa", " Anana"];

let pizza1 = new Pizza(1, "Napolitana", ingNapo, 600, "./img/napolitana.jpg");
let pizza2 = new Pizza(2, "Huevo", ingHuevo, 550, "./img/huevo.jpg");
let pizza3 = new Pizza(3, "Muzzarella", ingMuzza, 500, "./img/muzzarella.jpg");
let pizza4 = new Pizza(4, "Provolone", ingProvo, 700, "./img/provolone.jpg");
let pizza5 = new Pizza(5, "Rucula", ingProvo, 600, "./img/rucula.jpg");
let pizza6 = new Pizza(6, "Primavera", ingProvo, 650, "./img/primavera.jpg");

let arrayPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

let cards = document.getElementById("cards");

// Guardo arrayPizzas en el localStorage como string
localStorage.setItem("pizzas", JSON.stringify(arrayPizzas));

function showPizza(x) {
    cards.innerHTML = "";
    let card = document.createElement("div");
    card.classList.add("card");
    let nombre = document.createElement("h1");
    nombre.innerText = x.nombre;
    let img = document.createElement("img");
    img.src = x.img;
    img.classList.add("img");
    let precio = document.createElement("p");
    precio.innerText = `Precio: $${x.precio}`;
    let ingredientes = document.createElement("p");
    ingredientes.innerText = x.ingredientes;

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(ingredientes);

    cards.appendChild(card);
}

const input = document.getElementById("input");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
    let inputValue = input.value;
    let inputValueUpper = inputValue.toUpperCase();
    if (inputValueUpper === "NAPOLITANA") {
        showPizza(pizza1);
    }
    if (inputValueUpper === "HUEVO") {
        showPizza(pizza2);
    }
    if (inputValueUpper === "MUZZARELLA") {
        showPizza(pizza3);
    }
    if (inputValueUpper === "PROVOLONE") {
        showPizza(pizza4);
    }
    if (inputValueUpper === "RUCULA") {
        showPizza(pizza5);
    }
    if (inputValueUpper === "PRIMAVERA") {
        showPizza(pizza6);
    }
    if (inputValue === "") {
        showError("El campo esta vacio");
        return;
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let inputValue = input.value;
        let inputValueUpper = inputValue.toUpperCase();
        if (inputValueUpper === "NAPOLITANA") {
            showPizza(pizza1);
        }
        if (inputValueUpper === "HUEVO") {
            showPizza(pizza2);
        }
        if (inputValueUpper === "MUZZARELLA") {
            showPizza(pizza3);
        }
        if (inputValueUpper === "PROVOLONE") {
            showPizza(pizza4);
        }
        if (inputValueUpper === "RUCULA") {
            showPizza(pizza5);
        }
        if (inputValueUpper === "PRIMAVERA") {
            showPizza(pizza6);
        }
        if (inputValue === "") {
            showError("El campo esta vacio");
            return;
        }
    }
});

function showAll(x) {
    let card = document.createElement("div");
    card.classList.add("card");
    let nombre = document.createElement("h1");
    nombre.innerText = x.nombre;
    let img = document.createElement("img");
    img.src = x.img;
    img.classList.add("img");
    let precio = document.createElement("p");
    precio.innerText = `Precio: $${x.precio}`;
    let ingredientes = document.createElement("p");
    ingredientes.innerText = x.ingredientes;

    card.appendChild(nombre);
    card.appendChild(img);
    card.appendChild(precio);
    card.appendChild(ingredientes);

    cards.appendChild(card);
}

function showError(error) {
    // Creamos la etiqueta p que nos muestre el error
    const msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    cards.appendChild(msgError);
    setTimeout(() => {
        msgError.remove();
    }, 2000);
}

const showAllBtn = document.getElementById("showAllBtn");

showAllBtn.addEventListener("click", () => {
    cards.innerHTML = "";
    showAll(pizza1);
    showAll(pizza2);
    showAll(pizza3);
    showAll(pizza4);
    showAll(pizza5);
    showAll(pizza6);
});