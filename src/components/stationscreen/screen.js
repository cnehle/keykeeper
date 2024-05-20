import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../stationscreen/screen.css";



const StationScreen = () => {

  const navigate = useNavigate();
  const onCrossBtn2Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  return (
    <div className="station_screen">
      <main className="station_screen_main">
        <button className="station_screen_close" onClick={onCrossBtn2Click} />
        <h2 className="text_comandname">Название станции</h2>
        <input
          className="screen_text_station"
          type="text"
          value={"Ручеек"}>
        </input>

        <div className="buttons_station_screen">
          <button className="btn_station_screen occupied">Занято</button>
          <button className="btn_station_screen free">Свободно</button>
        </div>

        <textarea className="description" rows="5" cols="50">
        Участники (теоретически от 4—5 пар, чем больше, тем лучше) разделяются на пары (чаще разнополые), 
        взявшись за руки, они встают в две колонны на некотором расстоянии друг от друга, поднимают сцепленные руки высоко над головами, образуя тоннель. 
        </textarea>
      </main>
    </div>
  );
};

export default StationScreen;
