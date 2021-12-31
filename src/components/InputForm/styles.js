import styled from "styled-components";

const InputFormStyle = styled.input`
    padding: .7rem;
    width: 90%;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 15px;
    border: none;
    border-bottom: 2px solid #000;

    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
}`;

export default InputFormStyle;