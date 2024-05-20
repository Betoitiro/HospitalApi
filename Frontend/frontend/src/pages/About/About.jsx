import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p className='text-center p-20'>
        Bem-vindo a nossa plataforma de exames!! <br />
        Aqui voce tem tudo ao seu alcance com um simples click! <br />
        Para qualquer eventualidade entre em contato com nosco no email <a href="exemplo@gmail.com">exemplo@gmail.com</a>
      </p>

      <div className='text-center'>
        <Link to={'/home'}>
          <button className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            voltar para o menu
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About