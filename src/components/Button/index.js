const Button = (props) => {
    return (
        <button onClick={props.action}
            className={
                props.ghost 
                ? `btn btn-outline-${props.color ? props.color: "primary"} d-flex justify-content-center align-items-center gap-3` 
                : `btn btn-${props.color ? props.color: "primary"} d-flex justify-content-center align-items-center gap-3`
            }>
            {props.children}
        </button>
    );
};

export default Button;