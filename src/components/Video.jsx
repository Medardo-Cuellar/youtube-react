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
import clsx from "clsx";

export default function Video({image, title, channel}) {
    /* const articleClassNames = "video-card" + (channel === "Channel 1" ? " special" : ""); */
    return (
    <article className={clsx("video-card", {special: channel === "Channel 1"})}>
        <img src={image} alt="" />
        <footer>
            {channel ? <img src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" /> : <span>🤷🏻</span>}
            <span className="video-card-title">{title}</span>
            <span className="video-card-channel">{channel}</span>
        </footer>
    </article>        
    )
}