import Footer from "./components/Footer"
import { useState } from "react"
import Video from "./components/Video"

function App() {
  let [videoStatus, setVideStatus] = useState(false)
  const VideoOn = () => {
    setVideStatus(true)
    console.log(videoStatus)
  }
  
  return (
    <div className={`bg-white grid ${videoStatus ? `` :`grid-rows-body`} h-screen`}>
      {!videoStatus && <div onClick={VideoOn} className=""></div>}
      {!videoStatus && <Footer videoon={VideoOn}/>}
      {videoStatus && <Video />}
    </div>
  )
}

export default App
