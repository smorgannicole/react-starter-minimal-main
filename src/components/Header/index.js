const Header = () => {
    return (
        <header className='container-fluid'>
            <div className="row">
                <div className='col-3'>
                    <h1>Logo</h1>
                </div>
                <nav className='col d-flex align-items-center'>
                    <ul className='d-flex list-unstyled align-items-center gap-3'>
                        <li>
                            <a href='#'>Services</a>
                            <a href='#'>Works</a>
                            <a href='#'>Blog</a>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;