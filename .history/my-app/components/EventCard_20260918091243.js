export default function EventCard ({evento}){
    return (
        <article className="event-card">
            <div className="card-img">
                <EventImage src= {evento.imagem} alt= {evento.title} />
            </div>
            

        </article>
    )
}