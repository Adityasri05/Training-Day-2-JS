const app = () => {
    // const users = [
    // ]
}

    const [state, setState] = useState(0)

    const [name, setName] = useState("Shivam")

    useEffect(() => {
        if (state == 0) {
            setName("Shivam")
        } else if (state == 5) {
            setName("Mohan")
        } else {
            setName("Hari")
        }
    }, [state])


    return (
        <>
            {name} is updating the state.
            <button onClick={() => setState(state + 1)}>Increment</button>
            {state}
            <button onClick={() => setState(state - 1)}>Decrement</button>
        </> 
    )
    export default basic;