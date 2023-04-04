import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";

function Routers() {

    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
        </Routes>
    )
}

export default Routers