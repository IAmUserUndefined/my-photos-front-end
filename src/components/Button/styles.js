import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 80%;
    padding: 0.3em;
    border-radius: 30px;
    background-color: #7159c1;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    border: 1.5px solid #7159c1;
    margin-top: 12px;

    &:hover {
        background-color: #fff;
        border: 1.5px solid #fff;
        color: #000;
        transition: .3s;
    }
`;

export default ButtonStyle;