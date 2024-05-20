
import { Route, Routes } from 'react-router-dom';
import FirstFrame from '../firstframe/firstframe';
import Menu from '../menu/menu';
import Code from '../code/code';
import Result from '../result/result';
import Admin from '../admin/admin';
import StListFST from '../stationlist/stationlist';
import Screen from '../stationscreen/screen'
import TeamList from '../teamlist/teamlist'
import StationEditScreen from '../stationeditscreen/stedit';
import './app.css';


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<FirstFrame />} />;
                <Route path="/menu" element={<Menu />} />;
                <Route path="/code" element={<Code />} />;
                <Route path="/result" element={<Result />} />;
                <Route path="/admin" element={<Admin />} />;
                <Route path="/stlistfst" element={<StListFST />} />;
                <Route path="/screen" element={<Screen />} />;
                <Route path="/teamslist" element={<TeamList />} />;
                <Route path="/stedit" element={<StationEditScreen />} />;
            </Routes>
        </div>
    );
}
export default App;