import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Header = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
               Home
            </NavLogo>
            {/* <Bars /> */}

            <NavMenu>
                <NavLink to="/" >
                    DashBoard
                </NavLink>
                <NavLink to="/customer" >
                    Customer
                </NavLink>
                <NavLink to="/item" >
                    Item
                </NavLink>
                <NavLink to="/order" >
                    Order
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    )
}

export default Header
