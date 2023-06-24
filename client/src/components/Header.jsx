import logo from './assets/logo.png';

export default function Header(){
    return (
        <nav className="navbar bg-light mb-4 p-0">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex">
                        <img src={logo} alt="logo" width="30" height="30" className="mr-2" />
                        <span className="text-white">React-Redux-Saga</span>
                        <span className="text-white ml-auto">Developer</span>
                        <div>Project Management</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}