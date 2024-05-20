import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../admin/admin.css";

const AdminScreen = () => {
  const navigate = useNavigate();

  const onStationList1Click = useCallback(() => {
    navigate("/stlist");
  }, [navigate]);

  const onExitClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onStartBtnClick = async () => {
    const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/game/start';
    const headers = {
      'Token': 'aUXqOpUQWiaV',
      'ngrok-skip-browser-warning': 'true'
    };

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Ответ сервера: ${JSON.stringify(data)}`);
      } else {
        const error = await response.json();
        alert(`Ошибка: ${error.error}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const onEndBtnClick = async () => {
    const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/game/end';
    const headers = {
      'Token': 'aUXqOpUQWiaV',
      'ngrok-skip-browser-warning': 'true'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Ответ сервера: ${JSON.stringify(data)}`);
      } else {
        const error = await response.json();
        alert(`Ошибка: ${error.error}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="admin-screen">
      <main className="admin_main">

        <div class="admin__header">
          <h1 class="admin_text hello">Привет, администратор!</h1>
        </div>
        <button className="btn_admin list_st" onClick={onStationList1Click}>Список станций</button>

        <div class="buttons_admin">


          <button className="btn_admin  start" onClick={onStartBtnClick}>Начать игру</button>
          <button className="btn_admin finish" onClick={onEndBtnClick}>Закончить игру</button>

        </div>

        <div class="admin__footer">
          <button className="btn_admin exit" onClick={onExitClick}>Назад</button>
        </div>

      </main>
    </div>
  );
};

export default AdminScreen;
