import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../curator/curator.css";

const CuratorScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [qteam, setQteam] = useState("");
    const [score, setScore] = useState("");
    const [stName, setStName] = useState("");
    const [stToken, setStToken] = useState("");
    const psw = location.state;

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const handleQteamChange = (e) => {
        setQteam(e.target.value);
    };

    const handleScoreChange = (e) => {
        setScore(e.target.value);
    };

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/station/token';

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            password: JSON.stringify(psw)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setStName(data.map(item => item.name));
            })
            .then(data => {
                setStToken(data.map(item => item.token));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    const onStartClClick = async () => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/challenge/start';

        const new_team = {
            team_name: qteam
        };

        const headers = {
            'Content-Type': 'application/json',
            'Token': stToken, //станции
            'ngrok-skip-browser-warning': 'true'
        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
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

    const onEndClClick = async () => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/challenge/end';

        const new_team = {
            team_name: qteam
        };

        const headers = {
            'Content-Type': 'application/json',
            'Token': stToken, //станции
            'ngrok-skip-browser-warning': 'true'
        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
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

    const onOkClick = async () => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/challenge/rate';

        const new_score = {
            team_name: qteam,
            score: score
        };

        const headers = {
            'Content-Type': 'application/json',
            'Token': stToken, //станции
            'ngrok-skip-browser-warning': 'true'
        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(new_score)
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
        <div className="curator-screen">
            <main className="curator_main">

                <div className="curator_header">
                    <button className="teamedit_close" id="close" onClick={onCloseClick}></button>
                    <h1 className="curator_text station_name">{stName}</h1>
                    <input className="t_name" value={qteam} onChange={handleQteamChange} />
                    <button className="begin_challenge" onClick={onStartClClick}>Начать испытание</button>
                    <button className="end_challendge" onClick={onEndClClick}>Закончить испытание</button>
                    <div className="creative">
                        <h3 className="creative_text">Баллы за креатив:</h3>
                        <input className="creative_score" value={score} onChange={handleScoreChange} />
                        <button className="ok_score" onClick={onOkClick}>ОК</button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CuratorScreen;
