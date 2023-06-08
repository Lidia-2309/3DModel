import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from  './style';

export const Menu = () => {
    const navigate = useNavigate();

    const toCube = () => {
        navigate("/cube")
    }

    const toEarth = () => {
        navigate("/earth")
    }

    return (
        <>
            <ButtonStyle>
                <Navbar
                    className="my-2"
                    color="dark"
                    dark
                >
                    <NavbarBrand href="/">
                    {/* <img
                        alt="logo"
                        src="/logo-white.svg"
                        style={{
                        height: 40,
                        width: 40
                        }}
                    /> */}
                    Menu - Models 3D
                    </NavbarBrand>
                </Navbar>
                <Button color="danger" onClick={toCube}>Cubo Giratório</Button>
                <Button color="danger" onClick={toEarth}>3D Model</Button>
            </ButtonStyle>
        </>
    )
}

export default Menu;