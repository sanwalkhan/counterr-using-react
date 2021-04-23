

function Counter(){
    const Counter = 9;
    return(
        <div style={{padding:50}}>
            <button >-</button>
            <span style = {{padding:20}}>
             {Counter}
            </span>
            <button>+</button>
        </div>
    )
}


export default Counter;