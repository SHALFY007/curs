import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../Blog/Blog";
import Insight from "../Insight/Insight";

function Routers() {

    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/insight" element={<Insight />}></Route>
        </Routes>
    )
}

export default Routers