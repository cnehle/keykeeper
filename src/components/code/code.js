
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import '../code/code.css';
import imgSrc1 from './img/code.jpg';

function Code() {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/admin');
  }, [navigate]);

  return (
    <div className="code">
      <main className="frame-main">
        <div className="frame-parent1">
          <img className="frame-item" alt="" src={imgSrc1} />
          <div className="frame">
            <input className="input" type="password" />
          </div>
        </div>
        <div className="next-1-wrapper">
          <button className="next-1" onClick={onNextClick}/>
        </div>
      </main>
    </div>
);
};

export default Code;
