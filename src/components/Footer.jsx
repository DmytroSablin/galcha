const Footer = (props) => {
    const FullScreen = () => {
        document.body.requestFullscreen()
    }
    return (
        <div className="grid grid-cols-footer">
            <div className="bg-bg1 bg-cover">
                <button onClick={FullScreen} className="bg-emerald-300 w-10 h-7 mt-4 ml-16"></button>
            </div>
            <div onClick={props.videoon} className=""></div>
            <div onClick={props.videoon} className="bg-bg2 bg-cover"></div>
            <div onClick={props.videoon} className=""></div>
            <div onClick={props.videoon} className="bg-bg3 bg-cover"></div>
        </div>
    )
}

export default Footer