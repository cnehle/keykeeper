
import { Route, Routes } from 'react-router-dom';
import FirstFrame from '../firstframe/firstframe';
import Menu from '../menu/menu';
import Code from '../code/code';
import Result from '../result/result';
import Admin from '../admin/admin';
import StationList from '../stationlist/stationlist';
import StListFst from '../stationlist_fst/stlist_fst'
import Screen from '../stationscreen/screen'
import TeamList from '../teamlist/teamlist'
import StationEditScreen from '../stationeditscreen/stedit';
import TeamScreen from '../teamscreen/team';
import TeamEditScreen from '../teameditscreen/teamedit';
import CuratorScreen from '../curator/curator';
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
                <Route path="/stlist" element={<StationList />} />;
                <Route path="/stlistfst" element={<StListFst />} />;
                <Route path="/screen" element={<Screen />} />;
                <Route path="/stedit" element={<StationEditScreen />} />;
                <Route path="/teamedit" element={<TeamEditScreen />} />;
                <Route path="/teamscreen" element={<TeamScreen />} />;
                <Route path="/curator" element={<CuratorScreen />} />;
                <Route path="/teamslist" element={<TeamList/>}/>;
             </Routes>
        </div>
    );
}
export default App;