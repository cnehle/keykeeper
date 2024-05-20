
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../code/code.css';

function Code() {
  const navigate = useNavigate();
  const location = useLocation();

  const onNextClick = useCallback(() => {
    const accessCode = document.getElementsByClassName("input")[0].value;
    const btnId = location.state;
    if (accessCode === "admin" && btnId === "0") {
      navigate('/admin');
    }
    else if (accessCode === "keykeeper" && btnId === "1") {
      navigate('/teamedit');
    } else if (accessCode === "curator" && btnId === "2") {
      navigate('/curator');
    }
    else {
      alert("Некорректный пароль");
    }
  }, [navigate, location.state]);

  return (
    <div className="code">
      <main className="code_main">

        <h2 className="code_text">КОД ДОСТУПА:</h2>
        <input className="input" type="password" />
        <button className="btn_next" onClick={onNextClick}>Далее</button>

      </main>
    </div>
  );
};

export default Code;
