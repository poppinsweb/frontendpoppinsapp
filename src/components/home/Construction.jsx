import React from 'react';
import { Footer } from './Footer.jsx';
import enconstruccion from '../../styles/images/enconstruccion.jpg';

export const Construction = () => {
  return (
    <div>
       <img
        src={enconstruccion}
        alt="Página en construcción"
      />
      <Footer />
    </div>
  )
}
