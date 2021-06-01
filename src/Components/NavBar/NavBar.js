import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Button } from "@material-ui/core";
import "./NavBarStyle.css";
export default function NavBar() {
    return (
        <Navbar expand="lg" variant="dark" className="nav-bar">
            <Navbar.Brand href="#home" className="brand">
                Symbio.com
            </Navbar.Brand>
            <Button variant="contained" className="button-login ml-auto">
                Inregistrare
            </Button>
        </Navbar>
    );
}
