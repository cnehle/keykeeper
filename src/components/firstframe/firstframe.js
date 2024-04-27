
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../firstframe/firstframe.css';

function FirstFrame() {
    const navigate = useNavigate();

  
    //Переход на вкладку Menu
    const onMenuClick = useCallback(() => {
      navigate('/menu');
   }, [navigate]);
  
    //Переход на вкладку Station List
    const onStationClick = useCallback(() => {
      // Please sync "Station List" to the project
    }, []);
  
    //Переход на вкладку Map screen
    const onMapClick = useCallback(() => {
      // Please sync "Map screen" to the project
    }, []);
  
    //Переход на вкладку Results
    const onResultsClick = useCallback(() => {
      navigate('/result')
    }, [navigate]);

   
    return (
      <div className="first-frame">
        <main className="frame-parent">

          
          <button className="menu" onClick={onMenuClick} />
         

          <div className="first-frame_body">
            <div className="header">
              <h1 class="first_text keeper">КЛЮЧНИК</h1>
              <h2 class="first_text rope">Веревка первокурсника</h2>
            </div>
            <div className="buttons_first" >
              <button className="btn_ff btn_wide_ff" onClick={onStationClick}>Станции</button>
              <button className="btn_ff btn_wide_ff" onClick={onMapClick}>Карта</button>
              <button className="btn_ff btn_wide_ff" onClick={onResultsClick}>Результаты</button>
            </div>
          </div>

        </main>
      </div>
    );
  };
  
  export default FirstFrame;