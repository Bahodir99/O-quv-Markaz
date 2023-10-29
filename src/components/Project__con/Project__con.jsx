import React from 'react'
import './Project__con.scss'
import metting1 from '../../assets/img/metting1.png'
import meeting2 from '../../assets/img/metting2.png'

function Project__con() {
    return (
        <div>
            <section className='project__con'>
                <div className="container">
                    <ul className='project__con--list'>
                        <li className='project__con--item'>
                            <img className='project__con--img' src={metting1} alt="" />
                            <p className='project__con--text'>Проект осуществляется в 4 этапа. Отбор участников проводится на основе специального анкетирования,собесодование а также анкетирование возможно на сайте проекта в режиме он-лайн. также собеседования с участием тренеров и специалистов. Привлечение участников будет производиться посредством рекламной кампании в ТВ, интернет и печатной СМИ.</p>
                        </li>
                        <li className='project__con--item'>
                            <p className='project__con--text'>Рабочая группа будет состоят из высококвалифицированных тренеров-специалистов. Для полного информирования участников проекта требуется освещение через СМИ, разработка сайта и создание PR-группы. Рабочей группой будут разработаны модули, программы направлений  в проекте. </p>
                            <img className='project__con--img' src={meeting2} alt="" />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Project__con