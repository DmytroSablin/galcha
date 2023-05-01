import bg1 from "./../assets/bg1.jpg"
import bg2 from "./../assets/bg2.jpg"
import bg3 from "./../assets/bg3.jpg"


const Footer = (props) => {
    const FullScreen = () => {
        document.body.requestFullscreen()
    }
    return (
        <div className="grid grid-cols-footer">
            <div className="bg-cover" style={{
                backgroundImage: `url(${bg1})`
            }}>
                <button onClick={FullScreen} className="w-10 h-7 mt-4 ml-16"></button>
            </div>
            <div onClick={props.videoon} className=""></div>
            <div onClick={props.videoon} className={`bg-cover`} style={{
                backgroundImage: `url(${bg2})`
            }}></div>
            <div onClick={props.videoon} className=""></div>
            <div onClick={props.videoon} className="bg-cover" style={{
                backgroundImage: `url(${bg3})`
            }}></div>
        </div>
    )
}

export default Footer