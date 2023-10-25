import React from 'react'
import './Hero.scss'
import CompGirl from '../../assets/img/girlComp.png'

function Hero() {
  return (
    <div>
        <section className='hero'>
          <div className="container">
            <ul className='hero__list'>
              <li className='hero__item'>
                <h2 className='hero__title'>"Inglish Time +"</h2>
                <p className='hero__text'>Организация курсов повышения квалификации для учеников в сфере ИТ и на иностранных языках на уровне носителей яхыков</p>
              </li>
              <li className='hero__item'>
                <img className='hero__img' src={CompGirl} alt="" />
              </li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default Hero