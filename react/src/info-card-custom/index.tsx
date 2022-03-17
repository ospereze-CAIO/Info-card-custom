import React, { useContext, createContext } from 'react';

import { InfoCardCustomProps, InfoCardContextProps } from './interfaces/interfaces';

const InfoCardCustomContext = createContext<InfoCardContextProps | null>(null); //CREAR CONTEXTO
const InfoCardCustomProvider = InfoCardCustomContext.Provider; // COMPONENTE QUE GENERA EL CONTEXTO

export const useInfoCardCustom = () => useContext(InfoCardCustomContext); // SE CREA UN CUSTOM HOOK PARA EL CONTEXTO Y PODER EXTRAER INFORMACION

const InfoCard = ({ title, btnName, url, imageItem, children }: InfoCardCustomProps) => {
  const context = {
    title,
    btnName,
    url,
    imageItem
  };

  return <InfoCardCustomProvider value={context}>{children}</InfoCardCustomProvider>;
};

InfoCard.defaultProps = {
  title: 'Text on Info Card',
  btnName: 'Click',
  url: '/.'
};

InfoCard.schema = {
  title: 'Info-Card Custom',
  type: 'object',
  properties: {
    title: {
      title: 'Text on Info Card',
      type: 'string'
    },
    btnName: {
      title: 'Text on Button',
      type: 'string'
    },
    url: {
      title: 'URL',
      type: 'string'
    },
    imageItem: {
      title: 'Image url',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    }
  }
};

export default InfoCard;
