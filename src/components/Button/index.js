const Button = (props) => {
    const handleButtonClick = (e) => {
        alert("I've been clicked!")
    }
    return (
        <button onClick={handleButtonClick}
            className={
                props.ghost 
                ? `btn btn-outline-${props.color ? props.color: "primary"} d-flex justify-content-center align-items-center gap-3` 
                : `btn btn-primary d-flex justify-content-center align-items-center gap-3`
            }>
            {props.children}
        </button>
    );
};

export default Button;