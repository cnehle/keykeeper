import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../teamscreen/team.css";

const TeamScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [psw, setPsw] = useState('');
    const [teamname, setTeamname] = useState("");
    const [teamToken, setTeamToken] = useState("");

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        setPsw(location.state);
    }, [location.state]);

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/team/token';
        const new_psw = {
            password: psw
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify(new_psw)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTeamToken(data.token);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                alert('Такой команды нет, нажмите на крестик и зарегистрируйте новую команду.');
            });
    }, [psw]);

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/team/';

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Token': teamToken,
                'ngrok-skip-browser-warning': 'true'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTeamname(data.name);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, [teamToken]);

    const onNextClick = async () => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/station/next';

        const headers = {
            'Content-Type': 'application/json',
            'Token': teamToken,
            'ngrok-skip-browser-warning': 'true'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers
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
        <div className="team">
            <main className="team_main">
                <div className="team_header">
                    <button className="team_close" id="close" onClick={onCloseClick}></button>
                    <h3 className="team_text" id="team_text">Команда:</h3>
                    <h3 className="team_name">{teamname}</h3>
                </div>

                <div className="team_footer">
                    <button className="nextst_btn" onClick={onNextClick}></button>
                </div>
            </main>
        </div>
    );
};

export default TeamScreen;
