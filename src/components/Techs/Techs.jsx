import './Techs.css'

function Techs() {
    return (
        <section id='techs' className='techs'>
        <h2 className='techs__title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологии</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__table'>
            <a href='https://webref.ru/html' title='webref.ru/html' className='techs__link'>HTML</a>
            <a href='https://webref.ru/css' title='webref.ru/css' className='techs__link'>CSS</a>
            <a href='https://learn.javascript.ru' title='learn.javascript.ru' className='techs__link'>JS</a>
            <a href='https://ru.reactjs.org' title='ru.reactjs.org' className='techs__link'>React</a>
            <a href='https://git-scm.com' title='git-scm.com' className='techs__link'>Git</a>
            <a href='https://expressjs.com' title='expressjs.com' className='techs__link'>Express.js</a>
            <a href='https://www.mongodb.com' title='mongodb.com' className='techs__link'>mongoDB</a>
        </div>
    </section>
);
}

export default Techs;