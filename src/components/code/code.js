
import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../code/code.css';

function Code() {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onNextClick = useCallback(() => {
    const accessCode = document.getElementsByClassName("input")[0].value;
    const btnId = location.state;
    if (accessCode === "admin" && btnId === "0") {
      navigate('/admin');
    }
    else if (btnId === "1") {
      if (accessCode === "keykeeper") {
        navigate('/teamedit');
      } else {
        const psw = password;
        navigate('/teamscreen', { state: psw });
      }
    } else if (btnId === "2") {
      const psw = password;
      navigate('/curator', { state: psw });
    }
    else {
      alert("Некорректный пароль");
    }
  }, [navigate, location.state]);

  return (
    <div className="code">
      <main className="code_main">

        <h2 className="code_text">КОД ДОСТУПА:</h2>
        <input className="input" type="password" value={password} onChange={handlePasswordChange} />
        <button className="btn_next" onClick={onNextClick}>Далее</button>

      </main>
    </div>
  );
};

export default Code;
