import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../teamlist/teamlist.css";

const TeamList = () => {
    const navigate = useNavigate();
    const [teamList, setTeamList] = useState([]);

    const onExitClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/team/pull';

        fetch(url, {
            headers: {
                'Accept': 'application/json',
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
                setTeamList(data.map(item => (
                    <li className="team" key={item.id}>{item.name}</li>
                )));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="teamlist">
            <main className="teamlist_main">
                <h2 className="text_teamlist">Список команд</h2>

                <div className="Inform_team">
                    <ol className="team_name">
                        {teamList}
                    </ol>
                </div>


                <button className="btn_teamlist_exiting" onClick={onExitClick}>Назад</button>

            </main>
        </div>
    );
};

export default TeamList;