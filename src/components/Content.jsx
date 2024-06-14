import Categories from "./Categories";
import Video from "./Video";

const videos = [
  {
    image:
      "https://picsum.photos/200/",
    title: "Video 1",
    channel: "Channel 1",
  },
  {
    image:
      "https://picsum.photos/150/",
    title: "Video 2",
    channel: "Channel 2",
  },
  {
    image:
      "https://picsum.photos/237/",
    title: "Video 3",
    channel: "Channel 3",
  },
  {
    image:
      "https://picsum.photos/125/",
    title: "Video 4",
    channel: "",
  },
];

export default function Content() {
  return (
    <>
      <section id="content" className="col-start-2 col-end-3 row-start-2 row-end-3">
        <Categories />
       <section id="videos" className="grid grid-cols-4 gap-4 pt-4" >
       
          {videos.map((video) => {
            return (
              <Video
                key={`video-${video.title}`}
                image={video.image}
                title={video.title}
                channel={video.channel}
              />
            );
          })}
       </section>
      </section>
    </>
  );
}
