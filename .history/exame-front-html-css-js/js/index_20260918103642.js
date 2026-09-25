const API_BASES = [
    "https://api-eventos-ctw.vercel.app/api",
    "https://api-eventos-tau.vercel.app/api"
];

const listaEventos = document.getElementById("lista-eventos");
const categoriaSelect = document.getElementById("categoria");
const mensagem = document.getElementById("mensagm");

document.addEventListener("DOMContentLoaded" ,async () => {
  categoriaSelect.addEventListener("change", () => carregarEventos(categoriaSelect.value));
  await carregarCategorias();
  await carregarEventos();
});

async function  buscarNaApi(caminho) {

    let ultimoErro;

    for (const base of API_BASES)
    
}