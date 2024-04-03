import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../stationscreen/screen.css";

import imgSrc1 from './img/Name.png';
import imgSrc2 from './img/save.png';

const StationScreen = () => {
    
  const navigate = useNavigate();
  const onCrossBtn2Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  const onSave1ImageClick = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  return (
    <div className="station-screen">
      <main className="crossbtn-2-parent">
        <button className="close" onClick={onCrossBtn2Click} />
        <img
          className="stationname-1-icon"
          alt=""
          src={imgSrc1}
        />
        <div className="text-wrapper">
          <input className="text" type="text" />
        </div>
        <div className="frameparent">
          <div className="but">
            <button className="occupied" />
          </div>
          <div className="but">
            <button className="free" />
          </div>
        </div>
        <textarea className="framechild" />
        <div className="save-1-wrapper">
          <img
            className="save-1-icon"
            alt=""
            src={imgSrc2}
            onClick={onSave1ImageClick}
          />
        </div>
      </main>
    </div>
  );
};

export default StationScreen;
