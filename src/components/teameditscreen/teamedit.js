import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../teameditscreen/teamedit.css";

const TeamEditScreen = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState("");
    const [teamPassword, setTeamPassword] = useState("");

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleTeamPasswordChange = (e) => {
        setTeamPassword(e.target.value);
    };

    const handleSaveClick = () => {
        const new_team = {
            name: teamName,
            password: teamPassword,
            teammates: []
        };

        const Http = new XMLHttpRequest();
        const url = 'http://5.101.7.212:8181/API/v1/team/add';
        Http.open("POST", url);
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify(new_team));
    };

    return (
        <div className="teamedit">
        <main className="teamedit_main">
            <div className="teamedit_header">
                <button className="teamedit_close" id="close" onClick={onCloseClick}></button>
                <h3 className="teamedit_text">Название команды:</h3>
                <input className="set_team_name" value={teamName} onChange={handleTeamNameChange} />
                <h3 className="teamedit_text teamedit_password">Пароль:</h3>
                <input className="set_team_password" value={teamPassword} onChange={handleTeamPasswordChange} />
            </div>

            <div className="teamedit_footer">
                <button className="teamedit_save_btn" onClick={handleSaveClick}>Сохранить</button>
            </div>
        </main>
    </div>
    );
};

export default TeamEditScreen;
