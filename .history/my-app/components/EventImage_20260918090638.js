
import { useEffect, useState } from "react";

export default function EventImage({src, alt}){

    const [falhou, setFalhou] = useState(false);

    useEffect(() => {setFalhou(false);}, [])
    return(
        <header className="site-header">
            <div className="header-container">
                <Link className = "brand" href="/" aria-label= "EventHub - pagina inicial">
                    <span className="brand-mark" aria-hidden = "true"/>
                    <span>EventHub</span>
                </Link>
                <Link className= "header-link" header= "/">
                    EVENTOS
                </Link>
            </div>
        </header>
    );
}