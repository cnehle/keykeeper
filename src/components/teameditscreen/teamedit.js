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

    const handleSaveClick = async () => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/team/add';

        const new_team = {
            name: teamName,
            password: teamPassword,
            teammates: []
        };

        const headers = {
            'Content-Type': 'application/json',
            'Token': 'qDpIsiaWmnIb',
            'ngrok-skip-browser-warning': 'true'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(new_team)
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Ответ сервера: ${JSON.stringify(data)}`);
            } else {
                const error = await response.json();
                alert(`Ошибка: ${error.error}`);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
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

                <button className="teamedit_save_btn" onClick={handleSaveClick}>Сохранить</button>
                
            </main>
        </div>
    );
};

export default TeamEditScreen;
