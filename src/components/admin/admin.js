import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../admin/admin.css";

const AdminScreen = () => {
  const navigate = useNavigate();

  const onStationList1Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);



  const onExitClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="admin-screen">
      <main className="admin_main">

        <div class="admin__header">
          <h1 class="admin_text hello">Привет, администратор!</h1>
        </div>
        <button className="btn_admin list_st" onClick={onStationList1Click}>Список станций</button>

        <div class="buttons_admin">
          
          
          <button className="btn_admin  start" >Начать игру</button>
          <button className="btn_admin finish" >Закончить игру</button>
      
        </div>

        <div class="admin__footer">
          <button className="btn_admin exit" onClick={onExitClick}>Назад</button>
        </div>

      </main>
    </div>
  );
};

export default AdminScreen;
