import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from '../pages/home';
import CubeApp from "../pages/cube";
import EarthPage from "../pages/earth/earth";
import Hero from "../pages/hero";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>} />
                <Route path='/cube' element={<CubeApp/>} />
                <Route path='/earth' element={<EarthPage/>} />
                <Route path='/hero' element={<Hero/>} />
            </Routes>
        </BrowserRouter>
    )
}