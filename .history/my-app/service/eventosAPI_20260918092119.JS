import { error } from "node:console";
import { exportString } from "node:ffi";

const API_URL = 
    process.env.NEXT_PUBLIC_API_URL || "https://api-eventos-tau.vercel.app/api";

    async function request(endpoint) {
        const response = await fetch (`${API_URL}${endpoint}`);

        if(!response.ok){
        if(response.status === 404){
            throw new Error("Evento não encontrado.")
        }
        throw new Error("Não foi possivel encontrar o resultado da api. Tente novamente.")
        }

        return response.json();
        
    }

    export function getEventos (categoria = ""){
        const query = categoria ? `?categoria=${endoU}`
    }