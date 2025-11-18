import { Route, Routes } from "react-router-dom"
import { Home, Tours } from "../pages"

const Main = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="tours"
                element={<Tours />}
            />
        </Routes>
    )
}

export default Main