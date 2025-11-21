import { Route, Routes } from "react-router-dom"
import { Blog, Destination, Home, Tours, VirtualTour } from "../pages"

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
                element={<VirtualTour />}
            />
            <Route
                path="blog"
                element={<Blog />}
            />
        </Routes>
    )
}

export default Main