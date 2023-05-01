import video from "./../assets/video.mp4"

const Video = () => {
    return (
        <div>
            <video className="h-screen w-screen object-cover" src={video} autoPlay loop muted></video>
        </div>
    )
}

export default Video