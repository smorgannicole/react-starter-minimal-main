import MenuItem from "./components/MenuItem";

const Header = () => {
    return (
        <header className='container-fluid'>
            <div className="row">
                <div className='col-3'>
                    <h1>Logo</h1>
                </div>
                <nav className='col d-flex align-items-center'>
                    <ul className='d-flex list-unstyled align-items-center gap-3'>
                        <MenuItem text="Services" />
                        <MenuItem text="Work" />
                        <MenuItem text="Blog" />
                        <MenuItem text="Contact" />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;