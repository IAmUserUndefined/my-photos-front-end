/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";

import FileListStyle from "./styles";

import api from "../../../services/api";

import { useModal } from "../../../providers/ModalProvider";

import Photo from "./Photo/index";

const FileList = () => {

    const [photos, setPhotos] = useState([]);
    const { handleShowModal } = useModal();

    useEffect(() => {
      let mounted = true;
  
      const fetchPhotos = async () => {
        await api
          .get("/photo")
          .then(({ data }) => (mounted ? setPhotos(data.response) : null))
          .catch(({ response }) =>
            response === undefined ? handleShowModal("Erro no servidor, as fotos não podem ser apresentadas") : null
          );
      };
  
      fetchPhotos();
  
      return () => mounted = false;
    }, [photos]);

    return ( 
        <>
            <FileListStyle>
                {photos.map((photo) => (
                    <Photo key={photo.id} url={photo.url} name={photo.name} id={photo.id} keyName={photo.key} />
                ))}
            </FileListStyle>
        </>
     );
}
 
export default FileList;