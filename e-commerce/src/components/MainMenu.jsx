import SubMenu from "./SubMenu";
import { Navbar } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
import { GeoAlt } from "react-bootstrap-icons";
import menus from '../data/menus'
import SearchBar from "./SearchBar";



export default function MainMenu() {

    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })

    return (
        <div>
            <div className="callService">
                <div>Need help? Call us: (+98) 0234 456 789</div>
                <div className="truck">
                    <div><i class="bi bi-geo-alt"></i> <span className="space"> </span>Our store</div>
                    <div><i class="bi bi-truck"></i><span className="space"> </span>Track your order</div>
                </div>
            </div>

            <SearchBar />
            <Navbar bg="light" >
                {subMenus}
            </Navbar>
        </div>
    )
}


