import { error } from "node:console";

const API_URL = 
    process.env.NEXT_PUBLIC_API_URL || "https://api-eventos-tau.vercel.app/api";

    async function request(endpoint) {
        const response = await fetch (`${API_URL}${endpoint}`);

        if(!response.ok){
        if(response.status === 404){
            throw new Error("Evento não encontrado.")
        }
        throw new Error("")
        }
        
    }