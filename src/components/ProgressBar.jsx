const ProgressBar = ({bgcolor,progress,height}) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
    }
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:10,
        textAlign: 'right'
    }
    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
            </div>
        </div>
    )
}

export default ProgressBar;