
const botaoComece = document.getElementById("comece");
const fundoForm = document.getElementById("fundoForm");
const fecharForm = document.getElementById("fecharForm");
const formLogin = document.getElementById("formLogin");
const Entrada = document.querySelector(".login")



Entrada.addEventListener("click", () => {
    fundoForm.classList.add("ativo");
});


botaoComece.addEventListener("click", () => {
    fundoForm.classList.add("ativo");
});


fecharForm.addEventListener("click", () => {
    fundoForm.classList.remove("ativo");
});


formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "Conteúdo.html";
});
