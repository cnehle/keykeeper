
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../firstframe/firstframe.css';

function FirstFrame() {
    const navigate = useNavigate();

    const onMenuClick = useCallback(() => {
      navigate('/menu');
    }, [navigate]);
  
  
    const onStationClick = useCallback(() => {
      
      navigate('/stlistfst');
    }, [navigate]);
  
    const onTeamClick = useCallback(() => {
      navigate('/teamslist');
    }, [navigate]);
  
    const onResultsClick = useCallback(() => {
      navigate('/result')
    }, [navigate]);

   
    return (
      <div className="first_frame">
        <main className="frame_main">
          
          <button className="menu_btn" onClick={onMenuClick} />
            
          <h1 className="first_text keeper">КЛЮЧНИК</h1>
          <h2 className="first_text rope">Веревка первокурсника</h2>
            
          <div className="buttons_first" >
            <button className="btn_ff btn_wide_ff" onClick={onStationClick}>Станции</button>
            <button className="btn_ff btn_wide_ff" onClick={onTeamClick}>Команды</button>
            <button className="btn_ff btn_wide_ff" onClick={onResultsClick}>Результаты</button>
          </div>
          

        </main>
      </div>
    );
  };
  
  export default FirstFrame;