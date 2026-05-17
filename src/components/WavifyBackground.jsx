import Wave from 'react-wavify'

function WavifyBackground() {
    return (
        <div className="fixed inset-0 -z-10" style={{ background: '#f5f0eb' }}>
            <Wave
                fill="#c4e8e4"
                paused={false}
                style={{ position: 'absolute', bottom: 0 }}
                options={{
                    height: 20,
                    amplitude: 30,
                    speed: 0.2,
                    points: 4
                }}
            />
            <Wave
                fill="#b0cfdf"
                paused={false}
                style={{ position: 'absolute', bottom: 0, opacity: 0.6 }}
                options={{
                    height: 15,
                    amplitude: 25,
                    speed: 0.15,
                    points: 3
                }}
            />
        </div>
    )
}

export default WavifyBackground