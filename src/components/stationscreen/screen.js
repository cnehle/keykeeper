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
          className="screen_text_station"
          type="text"
          value={"Кошатники"}>
        </input>
        
        <div className="buttons_station_screen">
          <button className="btn_station_screen occupied">Занято</button>
          <button className="btn_station_screen free">Свободно</button>
        </div>

       
        <textarea className="description" rows="5" cols="50">
        Всё тело кошки мягкое, гибкое. Хвост длинный и пушистый. Ноги короткие, но сильные. 
        Каждый палец вооружён острым выгнутым когтем. Кошка умеет сделать свою лапу бархатной. Она ловко прячет когти, чтобы не притупились. Ходит на пальцах, но когтями по полу не стучит.
        </textarea>
        {/* <input 
          className="description"
          type="text">
        </input> */}

        <button className="btn_station_screen save" onClick={onSaveClick}>Сохранить</button>
      </main>
    </div>
  );
};

export default StationScreen;
