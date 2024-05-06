import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../result/result.css";

const Results = () => {
  const navigate = useNavigate();

  const onCloseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="results">
      <main className="result_main" >
        <button className="close" id="close" onClick={onCloseClick}></button>
        <h3 className="result_text" id="result_text" >Результаты</h3>
        <div className="Inform">
          <h2 className="text_namecomand" id="text_namecomand">Название команды</h2>
          <h2 className="text_score" id="text_score">баллы</h2>
        </div>
          
          <ol className="result_list">
            <li className="result_list_elem">
              <input className="list_inp text_comand" id="text_comand" type="text"  value={"Незабудки"}></input>
              <input className="list_inp score" id="score" type="text" value={"33"}></input>
            </li>

            <li className="result_list_elem">
              <input className="list_inp text_comand" id="text_comand" type="text"  value={"Кошатника"}></input>
              <input className="list_inp score" id="score" type="text" value={"54"}></input>
            </li>

            <li className="result_list_elem">
              <input className="list_inp text_comand" id="text_comand" type="text"  value={"Лучики"}></input>
              <input className="list_inp score" id="score" type="text" value={"45"}></input>
            </li>

          
        
          </ol>
      </main>
    </div>
  );
};

export default Results;
