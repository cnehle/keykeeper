import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../stationscreen/screen.css";

const StationScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stId = location.state;
  const [stationName, setStationName] = useState("");
  const [stationRules, setStationRules] = useState("");
  const [stationTake, setStationTake] = useState(false);

  const onCrossBtn2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const base_url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/station/';
    const end_point = stId;
    const url = `${base_url}${end_point}`;

    fetch(url, {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setStationName(data.name);
        setStationRules(data.rules);
        setStationTake(data.taken);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div className="station_screen">
      <main className="station_screen_main">
        <button className="station_screen_close" onClick={onCrossBtn2Click} />
        <h2 className="text_comandname">{stationName}</h2>

        <div className="buttons_station_screen">
          {stationTake === true ? (
            <button className="btn_station_screen_occupied">Занято</button>
          ) : (
            <button className="btn_station_screen_free">Свободно</button>
          )}
        </div>

        <textarea className="description" value={stationRules} rows="5" cols="50" />
      </main>
    </div>
  );
};

export default StationScreen;
