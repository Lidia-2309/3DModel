import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from '../home/index';
import CubeApp from "../pages/cube";
import EarthPage from "../pages/earth/earth";

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Menu/>} />
                <Route path='/cube' element={<CubeApp/>} />
                <Route path='/earth' element={<EarthPage/>} />
            </Routes>
        </BrowserRouter>
    )
}