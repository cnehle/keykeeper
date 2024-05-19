import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../stationscreen/screen.css";



const StationScreen = () => {
    
  const navigate = useNavigate();
  const onCrossBtn2Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  const onSaveClick = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  return (
    <div className="station_screen">
      <main className="station_screen_main">
        <button className="station_screen_close" onClick={onCrossBtn2Click} />
        <h2 className="text_comandname">Название команды</h2>
        <input 
          className="text_station"
          type="text"
          value={"Кошатники"}>
        </input>
        
        <div className="buttons_station_screen">
          <button className="btn_station_screen occupied">Создать</button>
          <button className="btn_station_screen free">Назад</button>
        </div>

       
        <textarea className="description" />
        <input 
          className="description"
          type="text">
        </input>

        <button className="btn_station_screen save" onClick={onSaveClick}>Сохранить</button>
      </main>
    </div>
  );
};

export default StationScreen;
