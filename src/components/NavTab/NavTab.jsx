import './NavTab.css'

function NavTab() {
    return (
        <nav className='nav-tab'>
            <a href='#aboutProject' title='О проекте' className='nav-tab__link' >О проекте</a>
            <a href='#techs' title='Технологии' className='nav-tab__link' >Технологии</a>
            <a href='#aboutMe' title='Студент' className='nav-tab__link' >Студент</a>
        </nav>
    );
}

export default NavTab;