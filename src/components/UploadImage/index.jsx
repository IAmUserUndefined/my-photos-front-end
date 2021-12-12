import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import UploadImageMessage from "./styles"

const Dropzone = () => {
    const handleOnDrop = useCallback(acceptedFiles => {

        if(acceptedFiles[0] === undefined) 
            return null

        console.log(acceptedFiles);
    }, [])

    const { 
          getRootProps, 
          getInputProps, 
          isDragActive, 
          isDragReject 
        } = useDropzone({ 
            accept: 'image/jpeg, image/png',
            handleOnDrop
        })
    
      return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
              
            isDragReject ? 
              <UploadImageMessage>Esse tipo de arquivo não é permitido</UploadImageMessage> : 
                isDragActive ? <UploadImageMessage>Solte sua foto aqui</UploadImageMessage> : 
                    <UploadImageMessage>
                      Clique ou jogue a sua imagem aqui e espere alguns segundos
                    </UploadImageMessage>
          }
        </div>
      )
}

export default Dropzone;