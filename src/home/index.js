import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
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
                <Button color="danger" onClick={toCube}>Cubo Giratório</Button>
                <Button color="danger" onClick={toEarth}>3D Model</Button>
            </ButtonStyle>
        </>
    )
}

export default Menu;