const API_BASES = [
    "https://api-eventos-ctw.vercel.app/api",
    "https://api-eventos-tau.vercel.app/api"
];

const mensagem = document.getElementById("mensagem-detalhes");
const conteudo = document.getElementById("conteudo-detalhes");

document.addEventListener("DOMContentLoaded" , carregarEventos);

async function  buscarNaApi(caminho) {

    let ultimoErro;

    for (const base of API_BASES){
        try{
            const url = `${base}${caminho}`;
            console.log("Consultando API" , url);

            const resposta = await fetch

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
