import React from 'react';
import { useRuntime } from 'vtex.render-runtime';

import { useInfoCardCustom } from '../index';
import InfoCardCustomStyle from './info-card-custom.css';

const InfoCardCustom = () => {
  const { title, imageItem, btnName, url } = useInfoCardCustom();
  const { navigate } = useRuntime();

  const onRedirect = (url: string) => navigate({ to: url });

  return (
    <>
      <div className={InfoCardCustomStyle.img}>
        <img src={imageItem} alt="IMG-info-card" />
        <div className={InfoCardCustomStyle.text}>{title}</div>
        <button className={InfoCardCustomStyle.but} onClick={() => onRedirect(url)}>
          {btnName}
        </button>
      </div>
    </>
  );
};

export default InfoCardCustom;
