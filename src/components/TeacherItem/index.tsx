import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://pbs.twimg.com/profile_images/737026184656113665/KvX_TPVE_400x400.jpg" 
          alt="André David"
        />
        <div>
          <strong>André David</strong>
          <span>Estrutura de Dados</span>
        </div>
      </header>

      <p>lorem ipsum dolor. 
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi odio, dui ante phasellus lacus justo iaculis finibus mollis nunc, hac ligula nibh litora curabitur vitae malesuada a.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 35,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
