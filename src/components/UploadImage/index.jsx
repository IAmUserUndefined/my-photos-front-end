import React from 'react';

import UploadImage from './styles';

const Photos = ( { children } ) => {
    return ( 
        <>
            <UploadImage>
                {children}
            </UploadImage>
        </>
     );
}
 
export default Photos;