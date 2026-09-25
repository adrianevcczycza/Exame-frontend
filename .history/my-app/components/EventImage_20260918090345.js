import Link from "next/link";

export default function     Event(){
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