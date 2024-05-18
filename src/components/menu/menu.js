import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";

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
    <div className="menu">
      <main className="menu_main">
        
        <button className="button_close" onClick={onButtonClick} />
        <h1 className="text_choose">Выбери роль</h1>

        <div className="buttons_menu">
          <button className="btn_menu administrator" onClick={onButton1Click}>Администратор</button>
          <button className="btn_menu mentor" onClick={onButton2Click}>Наставник</button>
          <button className="btn_menu tutor" onClick={onButton3Click}>Куратор станции</button>
        </div>
        
      </main>
    </div>
  );
};

export default Menu;
