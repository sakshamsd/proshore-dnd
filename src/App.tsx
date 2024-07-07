import "./App.css";
import { Routes } from "react-router-dom";
import rootRoute from "./routes/rootRoutes";
import { renderRoutes } from "./routes/routes";

function App() {
    return (
        <>
            <Routes>{rootRoute.map(route => renderRoutes(route))}</Routes>
        </>
    );
}

export default App;
