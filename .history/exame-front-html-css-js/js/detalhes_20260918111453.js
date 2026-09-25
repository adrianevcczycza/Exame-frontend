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

            const resposta = await fetch(url);

            
            if(!resposta.status === 404){
                throw new Error(`Evento não encontrado.`);
            }

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


async function  carregarEventos(params) {

    const id = new URLSearchParams(window.location.search).get("id");

    if(!id){
        mostrarErro("Evento não informado.");
        return;
    }

    try {
       try{
        const categorias = await buscarNaApi(`eventos/${encodeURIComponent(id)}`);
        preencherDetalhes(evento);
    } catch (erro){
         console.error("Erro ao carregar detalhes:", erro);
    mostrarErro(
      erro.message === "Evento não encontrado."
        ? "Evento não encontrado.": "não foi possivel acessar a API");
        }
    }
}
