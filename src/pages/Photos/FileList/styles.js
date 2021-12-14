import styled from "styled-components";

const FileListStyle = styled.ul`
    color: #000;
    list-style: none;
    margin-top: 1.3rem;
    margin-left: 3px;

    >li {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default FileListStyle