
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../firstframe/firstframe.css'
import imgSrc1 from './img/КЛЮЧНИК.png';
import imgSrc2 from './img/Веревка первокурсников.png';

function FirstFrame() {
    const navigate = useNavigate();

    const onFrameMainScroll = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='frameMain']");
      if (anchor) {
        anchor.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }, []);
  
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
      <header className="first-frame">
        <main
          className="frame-parent"
          data-scroll-to="frameMain"
          onClick={onFrameMainScroll}
        >
          <div className="menu-wrapper">
            <button className="menu" onClick={onMenuClick} />
          </div>

          <div className="frame-group">
            <div className="parent">
              <img className="icon1" src={imgSrc1} alt="" />
              <img className="icon2" src={imgSrc2} alt="" />
            </div>
            <div className="group" >
              <button className="button1" onClick={onStationClick} />
              <button className="button2" onClick={onMapClick} />
              <button className="button3" onClick={onResultsClick} />
            </div>
          </div>
        </main>
      </header>
    );
  };
  
  export default FirstFrame;