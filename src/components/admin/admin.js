import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../admin/admin.css";

const AdminScreen = () => {
  const navigate = useNavigate();

  const onStationList1Click = useCallback(() => {
    navigate("/stlistfst");
  }, [navigate]);

  const onTeamList1Click = useCallback(() => {
    // Please sync "Список команд " to the project
  }, []);

  const onBackBtn1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin-screen">
      <main className="admin_main">

        <div class="frame-parent2__header">
          <h1 class="admin_text hello">Привет, администратор!</h1>
        </div>

        <div class="frame-parent2__body">
          <p class="admin_text creat" >Выбери, что редактировать:</p>
          <div className="buttons">
            <button className="btn btn_wide" onClick={onStationList1Click}>Список станций</button>
            <button className="btn btn_wide" onClick={onTeamList1Click}>Список команд</button>
          </div>
        </div>

        <div class="frame-parent2__footer">
          <button className="btn btn_right btn_small" onClick={onBackBtn1Click}>Назад</button>
        </div>

      </main>
    </div>
  );
};

export default AdminScreen;
