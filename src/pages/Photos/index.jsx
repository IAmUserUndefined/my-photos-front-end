import React from 'react';

import UploadImage from '../../components/UploadImage/index';
import FileList from '../../components/FileList';
import HeaderLogin from "../../components/HeaderLogin/index"

const Photos = () => {
    return ( 
        <>
            <HeaderLogin link="/config-user" children="Configurações"/>

            <UploadImage />

            <FileList />

        </>
     );
}
 
export default Photos;