import { Route, Routes } from "react-router-dom"
import { Destination, Home, Tours, VirtualTour } from "../pages"

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
            <Route
                path="virtual-tour"
                element={<VirtualTour/>}
            />
        </Routes>
    )
}

export default Main