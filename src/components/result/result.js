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
      <main className="result_main">
        
        <button className="result_close" id="close" onClick={onCloseClick}></button>
        <h3 className="result_text" id="result_text"> Результаты </h3>
        
        

        <div className="Inform">
          <h2 className="text_namecomand" id="text_namecomand">Название команды</h2>
          <h2 className="text_score" id="text_score">Баллы</h2>
          <h2 className="text_time" >Время</h2>
          
          <ol className="result_list">
              <li className="result_list_elem">
                <input
                  className="list_inp text_comand"
                  id="text_comand"
                  type="text"
                  value={"Незабудки"}> 
                </input>

                <input
                  className="list_inp score"
                  id="score"
                  type="text"
                  value={"33"}>
                </input>

                <input
                  className="list_inp time"
                  type="text"
                  value={"1:20"}>
                </input>
              </li>
              

              <li className="result_list_elem">
                <input
                  className="list_inp text_comand"
                  id="text_comand"
                  type="text"
                  value={"Незабудки"}> 
                </input>

                <input
                  className="list_inp score"
                  id="score"
                  type="text"
                  value={"33"}>
                </input>

                <input
                  className="list_inp time"
                  type="text"
                  value={"1:20"}>
                </input>
              </li>


              <li className="result_list_elem">
                <input
                  className="list_inp text_comand"
                  id="text_comand"
                  type="text"
                  value={"Незабудки"}> 
                </input>

                <input
                  className="list_inp score"
                  id="score"
                  type="text"
                  value={"33"}>
                </input>

                <input
                  className="list_inp time"
                  type="text"
                  value={"1:20"}>
                </input>
              </li>
          </ol>    

        </div>
      </main>
    </div>
  );
};

export default Results;
