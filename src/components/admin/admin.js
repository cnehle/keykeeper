import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../admin/admin.css";
import imgSrc1 from './img/hello.png';
import imgSrc2 from './img/edit.png';

const AdminScreen = () => {
  const navigate = useNavigate();

  const onStationList1Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  const onTeamList1Click = useCallback(() => {
    // Please sync "Список команд " to the project
  }, []);

  const onBackBtn1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-screen">
      <main className="frame-parent2">

        <div className="wrapper1">
          <img className="icon2" alt="" src={imgSrc1} />
        </div>

        <div className="edit-1-wrapper">
          <img className="edit-1-icon" alt="" src={imgSrc2} />
        </div>

        <div className="frame-parent3">
          <div className="stationlist-1-wrapper">
            <button className="stationlist-1" onClick={onStationList1Click} />
          </div>
          <div className="stationlist-1-wrapper">
            <button className="teamlist-1" onClick={onTeamList1Click} />
          </div>
        </div>

        <div className="backbtn-1-wrapper">
          <button className="backbtn-1" onClick={onBackBtn1Click} />
        </div>

      </main>
    </div>
  );
};

export default AdminScreen;
