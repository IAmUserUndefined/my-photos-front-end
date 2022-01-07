import React from 'react';

import HeaderLogin from "../../components/HeaderLogin/index"
import UploadImage from './UploadImage/index';
import FileList from './FileList';

const Photos = () => {
    return ( 
        <>
            <HeaderLogin link="/config-user" children="Configurações"/>

            <main>
                <UploadImage />
                <FileList />
            </main>

        </>
     );
}
 
export default Photos;