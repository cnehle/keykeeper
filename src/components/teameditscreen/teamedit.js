import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../teameditscreen/teamedit.css";

const TeamEditScreen = () => {
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
        <div className="teamedit">
            <main className="teamedit_main">
                <div className="teamedit_header">
                    <button className="teamedit_close" id="close" onClick={onCloseClick}></button>
                    <h3 className="teamedit_text">Название команды:</h3>
                    <input className="set_team_name" />
                    <h3 className="teamedit_text teamedit_password">Пароль:</h3>
                    <input className="set_team_password" />
                </div>

                <div className="teamedit_footer">
                    <button className="teamedit_save_btn">Сохранить</button>
                </div>
            </main>
        </div>
    );
};

export default TeamEditScreen;
