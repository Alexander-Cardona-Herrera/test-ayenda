export default function NavBar() {
    return (
        <header className="bg-image">
            <nav className="navbar navbar-expand-md navbar-dark pt-5 container vertical-center">
                <button className="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item"><a className="nav-link " href="#">COMICS</a></li>
                        <li className="nav-item float-rigth"><a className="nav-link" href="#">LOGIN</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}