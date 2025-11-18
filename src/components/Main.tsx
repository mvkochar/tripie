import { Route, Routes } from "react-router-dom"
import { Destination, Home, Tours } from "../pages"

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
            <Route
                path="destination"
                element={<Destination />}
            />
        </Routes>
    )
}

export default Main