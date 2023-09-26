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

    const toHero = () => {
        navigate("/hero")
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
                    <img
                        alt="logo"
                        src="/Logo.png"
                        style={{
                        height: 40,
                        width: 40,
                        margin:15
                        }}
                    /> 
                    Menu - Models 3D
                    </NavbarBrand>
                </Navbar>
                <div className='buttons'>
                    <Button color="danger" onClick={toCube}>Cubo Giratório</Button>
                    <Button color="danger" onClick={toEarth}>Castelo</Button>
                    <Button color="danger" onClick={toHero}>Herói</Button>
                </div>
            </ButtonStyle>
        </>
    )
}

export default Menu;