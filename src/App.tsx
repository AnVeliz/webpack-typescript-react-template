// Just a TS function
const multiplyMyRet = (value: string, times: number) => {
    return value.repeat(times);
}

export default function App() {
    return (
        <div>
            <p>
                { multiplyMyRet("Hello!!!", 3) }
            </p>
        </div>
    )
}