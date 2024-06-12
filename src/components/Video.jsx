/* export default function Video(props) {

    return (
    <article className="video-card">
        <img src={props.image} alt="" />
        <footer>
            <img src="" alt="" />
            <p>{props.title}</p>
            <p>{props.channel}</p>
        </footer>
    </article>        
    )
} */

export default function Video({image, title, channel}) {

    return (
    <article className="video-card">
        <img src={image} alt="" />
        <footer>
            <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" /> {/* la imagen no tiene un grid solo le decimos donde empieza y donde termina */}
            <span className="video-card-title">{title}</span>
            <span className="video-card-channel">{channel}</span>
        </footer>
    </article>        
    )
}