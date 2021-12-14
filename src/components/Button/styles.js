import styled from "styled-components";

const ButtonStyle = styled.button`
    width: 100%;
    padding: 0.3em;
    border-radius: 30px;
    background-color: #7159c1;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    border: 1.5px solid #7159c1;
    margin-top: 5px;

    &:hover {
        filter: brightness(115%);
        transform: scale(1.05);
    }
    }
`;

export default ButtonStyle;