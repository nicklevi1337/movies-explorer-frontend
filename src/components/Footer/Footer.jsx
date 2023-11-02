import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
            <div className='footer__container-link'>
            <a href="https://t.me/lollisama" title='Telegram' className='footer__link'>Telegram</a>
                <a href='https://github.com/PrettyLolli137' title='Github' className='footer__link'>Github</a>
                <a href="https://www.instagram.com/lolllisama/" title='Instagram' className='footer__link'>Instagram</a>
            </div>
            <p className='footer__text'>&copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
);
}
export default Footer;