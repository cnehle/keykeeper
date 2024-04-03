
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstFrame from '../firstframe/firstframe';
import Menu from '../menu/menu';
import Code from '../code/code';
import Result from '../result/result';
import Admin from '../admin/admin';
import StListFST from '../station list fst/stlistfst';
import Screen from '../stationscreen/screen'
import './app.css';


function App()
{
    return(
        <div className="app">
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<FirstFrame />} />;
                    <Route path="/menu" element={<Menu />} />;
                    <Route path="/code" element={<Code/>} />;
                    <Route path="/result" element={<Result/>}/>;
                    <Route path="/admin" element={<Admin/>}/>;
                    <Route path="/stlistfst" element={<StListFST/>}/>;
                    <Route path="/screen" element={<Screen/>}/>;
                </Routes>

            </BrowserRouter>
        </div>
    );
}
export default App;