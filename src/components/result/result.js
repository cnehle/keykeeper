import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../result/result.css";

const Results = () => {
  const navigate = useNavigate();
  const [resList, setResList] = useState([]);
  const [scoreList, setScoreList] = useState([]);

  const onCloseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const Http = new XMLHttpRequest();
    const url = 'http://5.101.7.212:8181/API/v1/team/pull';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4 && Http.status === 200) {
            const data = JSON.parse(Http.responseText);
            setResList(data.map(item => <li className="result_list_elem" key={item.id}>{item.name}</li>));
            setScoreList(data.map(item => <li className="result_list_elem" key={item.id}>{item.total_score}</li>));
        }
    }
}, []);

  return (
    <div className="results">
      <main className="result_main">
        
        <button className="result_close" id="close" onClick={onCloseClick}></button>
        <h3 className="result_text" id="result_text"> Результаты </h3>
        
        <div className="Inform">
          <div>
            <h2 className="text_namecomand" id="text_namecomand">Название команды</h2>
            
            <ol className="result_list">
              {resList}
            </ol>
          </div>
          
          <div>
            <h2 className="text_score" id="text_score">Баллы</h2>
            
            <ol className="result_list">
              {scoreList}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
