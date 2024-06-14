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
    <article className=/* {clsx("video-card", {special: channel === "Channel 1"})} */"flex flex-col gap-2">
        <img src={image} className="w-full rounded-2xl object-cover aspect-video"alt="" />
        <footer className="grid grid-cols-[3rem_1fr] gap-2">
            {channel ? <img className="h-10 w-10 rounded-full col-start-1 col-end-2"src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${channel}`} alt="" /> : <span>🤷🏻</span>}
            <span className="col-start-2 col-end-3"/* "video-card-title" */>{title}</span>
            <span className="col-start-2 col-end-3"/* "video-card-channel" */>{channel}</span>
        </footer>
    </article>        
    )
}