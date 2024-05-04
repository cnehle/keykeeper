
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../code/code.css';

function Code() {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/admin');
  }, [navigate]);

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
