import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../teamlist/teamlist.css";

const TeamList = () => {
    const navigate = useNavigate();
    const [teamList, setTeamList] = useState([]);

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
                setTeamList(data.map(item => <li className="team_pslist_elem" key={item.id}>{item.name}</li>));
            }
        }
    }, []);

    return (
        <div className="teamlist">
            <main className="teamlist_main">

                <button className="teamlist_close" id="close" onClick={onCloseClick}></button>
                <h3 className="teamlist_text" id="teamlist_text">Команды</h3>

                <div className="teamlist_body">
                    <ul className="teamlist_list">
                        {teamList}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Results;
