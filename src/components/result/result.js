import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../result/result.css";

const Results = () => {
  const navigate = useNavigate();
  const [resList, setResList] = useState([]);

  const onCloseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const url = 'http://5.101.7.212:8181/API/v1/team/pull';

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Ошибка: ${response.status}`);
        }
      })
      .then(data => {
        setResList(data.map(item => (
          <li className="result_list_elem" key={item.id}>
            <span className="list_inp text_comand">{item.name}</span>
            <span className="list_inp score">{item.total_score}</span>
            <span className="list_inp time">{item.time_sum}</span>
          </li>
        )));
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

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
            {resList}
          </ol>
        </div>
      </main>
    </div>
  );
};

export default Results;
