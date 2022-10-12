import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { Pagina } from "../pages/Pagina"



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pagina />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

