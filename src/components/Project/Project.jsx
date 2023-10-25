import React from 'react';
import './Project.scss';
import ProjectImg1 from '../../assets/img/projectImg1.png';
import ProjectImg2 from '../../assets/img/projectImg2.png';

function Project() {
    return (
        <div>
            <section className="project">
                <div className="container project__inner">
                    <h2 className="project__title">О проекте</h2>
                    <div className="project__info1">
                        <div className="project__list">
                            <span className='project__item'>
                                <img className='project__img' src={ProjectImg1} alt="" />
                                <p className='project__text'>Организация курсов повышения квалификации для учеников специалистов в сфере ИТ и подготовка высококвалифицированных кадров. Дать практические навыки участникам, которые пригодятся в будущей профессиональной деятельности благодаря привлечению в процесс обучения опытных ведущих отечественных и зарубежных специалистов. Создание программы для системной развитии ИТ- сферы в республике.</p>
                            </span>
                        </div>
                    </div>
                    <div className="project__info2">
                        <div className="project__list2">
                            <span className='project__item2'>
                                <p className='project__text2'>Проект “Программа обучения учеников в сфере И.Т ”  предназначен для возраста от 16-35.
                                </p>
                                <img className='project__img2' src={ProjectImg2} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project