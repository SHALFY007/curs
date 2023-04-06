import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Blog/Blog";

function Routers() {

    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/insight"></Route>
        </Routes>
    )
}

export default Routers