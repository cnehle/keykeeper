import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../teamscreen/team.css";

const TeamScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const psw = location.state;
    const [psList, setPsList] = useState([]);
    const [teamname, setTeamname] = useState("");

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/team/token';

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            password: psw
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTeamname(data.map(item => item.name));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="team">
            <main className="team_main">
                <div className="team_header">
                    <button className="team_close" id="close" onClick={onCloseClick}></button>
                    <h3 className="team_text" id="team_text">Команда:</h3>
                    <h3 className="team_name">{teamname}</h3>
                </div>

                <div className="team_passed_stations_list">
                    <h3 className="team_text team_pslist_text">Список пройденных станций:</h3>
                    <ul className="team_pslist">
                        {psList}
                    </ul>
                </div>

                <div className="team_footer">
                    <button className="nextst_btn"></button>
                </div>
            </main>
        </div>
    );
};

export default TeamScreen;
