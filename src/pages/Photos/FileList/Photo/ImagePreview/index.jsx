import React from 'react';

import ImagePreviewStyle from './styles';

const ImagePreview = ( { url } ) => {
    return ( 
        <>
            <div>
                <ImagePreviewStyle src={url} alt="Imagem carregada" />
            </div>
        </>
     );
}
 
export default ImagePreview;