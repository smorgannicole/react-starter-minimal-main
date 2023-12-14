const Button = (props) => {
    return (
        <button 
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