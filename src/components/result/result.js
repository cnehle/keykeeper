import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../result/result.css";
import imgSrc1 from './img/balls.png';

const Results = () => {
  const navigate = useNavigate();

  const onCloseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="results">
      <main className="rectangle-parent">
        <button className="close" onClick={onCloseClick} />
        <h3 className="h3">Результаты</h3>

        <div className="parent1">
          <label className="label">баллы</label>
          <h2 className="h2">Название команды</h2>
        </div>

        <ol className="frame-inner">
        
        <div className="text-parent">
          <input className="text" type="text" />
          <img className="ellipse-icon" alt="" src={imgSrc1} />
          <li className="text1">{`   `}</li>
        </div>
        
        </ol>
      </main>
    </div>
  );
};

export default Results;
