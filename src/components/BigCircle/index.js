import styled from "styled-components";

const BigCircle = (props) => {
    return (
        <OuterCircle style={{
            backgroundColor: props.color,
        }}>
            <span>{props.text}</span>
        </OuterCircle>
    );
}

const OuterCircle = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: red;
    border-radius: 999px;
    border: 5px solid #fff;
    text-transform: uppercase;
    span {
        font-weight: 700;
        color: #fff;
    }
`
// Custom CSS in JS ^^^^
export default BigCircle;