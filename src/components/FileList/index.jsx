import React from 'react';

import { MdLink, MdOutlineDelete } from "react-icons/md";

import { FileListStyle, ContainerInfo } from "./styles";

import FileInfo from "../FileInfo/index";
import ImagePreview from '../ImagePreview';

const FileList = () => {
    return ( 
        <>
            <FileListStyle>
                <li>
                    <ContainerInfo>
                        <ImagePreview url="img/corinthians.jpg"  />
                        <FileInfo name="image.png" />
                    </ContainerInfo>

                    <div>
                        <MdOutlineDelete style={{ cursor: 'pointer' }} size={24} color="#f00" />
                        <a href="/" target="_blank">
                            <MdLink style={{ cursor: 'pointer' }} size={24} color="#000" />
                        </a>
                    </div>
                </li>
            </FileListStyle>
        </>
     );
}
 
export default FileList;