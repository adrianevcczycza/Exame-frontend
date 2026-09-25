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

async function carregarCategorias() {
    try{
        const categorias = await buscarNaApi("/categorias");

        categoriaSelect.innerHTML = '<option value= "">TODAS</option>';

        categorias.forEach((categoria) => {
              const option = document.createElement("option")
              option.value =categoria;
              option.textContent = categoria;
              categoriaSelect.appendChild(option);

        });
    }
    catch (erro){
        console.error("Erro nas categorias", erro);
    } 
}

async function carregarEventos(categoria = "") {
    try{
     mostrarMensagem("Carregando eventos ...");
     listaEventos.innerHTML= "";

     const caminho = categoria ? `/evento?categoria=${encodeURIComponent(categoria)}`
    : "/eventos";

    const eventos = await buscarNaApi(caminho);
    renderizarEventos(eventos);

    }catch (erro){
        console.error("Erro nos Eventos", erro);
        mostrarMensagem("Não foi possivel acessar a api." , true);
    } 
}

function renderizarEventos(eventos){
    listaEventos.innerHTML= "";

    if( !Array.isArray(eventos) || eventos.length  === 0){
        mostrarMensagem ("Nenhum evento encontrado");
        return;
    }
    mensagem.hidden = true;

    eventos.forEach((evento) => {
    const card = document.createElement("article");
    card.className = "event-card" ; 

    const imagem = evento.imagem ?`<img src="${escapeAttr(evento.imagem)}" 
    alt = "${escapeAttr(evento.titulo)}" onerror = "this.remove()">`: "";

    card.innerHTML = ` <div class="card-image">${imagem}</div>
      <div class="card-body">
        <span class="category">${escapeHtml(evento.categoria)}</span>
        <h2>${escapeHtml(evento.titulo)}</h2>
        <div class="card-meta">
          <p>Data: ${formatarData(evento.data)}</p>
          <p>Local: ${escapeHtml(evento.local)}</p>
        </div>
        <strong class="vacancies">${escapeHtml(evento.vagas)} vagas disponíveis</strong>
        <a class="details-button" href="detalhes.html?id=${encodeURIComponent(evento.id)}">
          Ver detalhes
        </a>
      </div>
    `;

    listaEventos.appendChild(card);
});
}

function formatarData (data){
    if(!data) return "";

    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

function mostrarMensagem (texto, erro =false){
     mensagem.textContent = texto;
      mensagem.classList.toggle("menssage-error", erro);
      
      

}
