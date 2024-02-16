import logo  from '../../assets/images/logo.svg';

export function Navbar() {
    return (
        <>
            <nav className="flex pt19 tablet-pt8 tablet-jc-center">
                <a href="#" aria-label="logo" >
                    <img src={logo} alt="Logo" className="w16 tablet-w10" />
                </a>
            </nav>
        </>
    )
}