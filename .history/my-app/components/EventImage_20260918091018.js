
import { useEffect, useState } from "react";

export default function EventImage({src, alt}){

    const [falhou, setFalhou] = useState(false);

    useEffect(() => {
        setFalhou(false); 
    }, [src]);
    if (!src || falhou){
        return <div className="imagem-placeholder" aria-hidden = "true"/>;
    }

    return(
      <img className= "event-image-element">
        src= {}
        alt={}
        onError{()=> setFalhou(true)}
      </img>
    );
}