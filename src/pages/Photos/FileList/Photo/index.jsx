import React from "react";

import { MdLink, MdOutlineDelete } from "react-icons/md";

import ContainerInfo from "./styles";

import FileInfo from "./FileInfo/index";
import ImagePreview from './ImagePreview/index';

import api from "../../../../services/api";

import { useModal } from "../../../../providers/ModalProvider";

const Photo = ( { url, name, id, keyName } ) => {

  const { handleShowModal } = useModal();

  const handlePhotoDeletion = async (photoId, keyName) => {
    await api
      .delete(`/photo/${photoId}/${keyName}`)
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );
  };

  return (
    <li>
      <ContainerInfo>
        <ImagePreview url={url} />
        <FileInfo name={name} />
      </ContainerInfo>

      <div>
        <MdOutlineDelete onClick={() => handlePhotoDeletion(id, keyName)} style={{ cursor: "pointer" }} size={24} color="#f00" />
        <a href={url} target="_blank" rel="noreferrer">
          <MdLink style={{ cursor: "pointer" }} size={24} color="#000" />
        </a>
      </div>
    </li>
  );
};

export default Photo;