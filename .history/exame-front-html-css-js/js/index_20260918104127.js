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

    for (const base of API_BASES){
        try{
            const url = `${base}${caminho}`;
            console.log("Consultando API" , url);

            if(!resposta.ok){
                throw new Error(`Error HTTP  ${resposta.status}`);
            }

            return await resposta.json();
        } catch(erro){
            ultimoErro = erro;
            console.warn("Falha ao consuiltar:", base, erro);
        }
    }
    throw ultimoErro || new Error("API indisponivel.");  
}

async function  buscarNaApi(caminho) {

    let ultimoErro;

    for (const base of API_BASES){
        try{
            const categoria = await buscarNaApi
}