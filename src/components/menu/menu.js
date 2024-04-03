import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
import imgSrc1 from './img/Role.png';

function Menu() {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    const btnId = "0";
    navigate('/code', { state: btnId } );
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    const btnId = "1";
    navigate('/code', { state: btnId } );
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    const btnId = "2";
    navigate('/code', { state: btnId } );
  }, [navigate]);

  return (
    <div className="menu1">
      <main className="frame-container">
        <div className="wrapper">
          <button className="button" onClick={onButtonClick} />
        </div>
        <div className="frame-div">
          <img className="frame-child" src={imgSrc1} alt="" />
          <div className="container">
            <button className="button4" onClick={onButton1Click} />
            <button className="button5" onClick={onButton2Click} />
            <button className="button6" onClick={onButton3Click} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
