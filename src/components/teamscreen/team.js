import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../teamscreen/team.css";

const TeamScreen = () => {
    const navigate = useNavigate();

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="team">
            <main className="team_main">
                <div className="team_header">
                    <button className="team_close" id="close" onClick={onCloseClick}></button>
                    <h3 className="team_text" id="team_text">Команда:</h3>
                    <h3 className="team_name">Team 1</h3>
                </div>

                <div className="team_passed_stations_list">
                    <h3 className="team_text team_pslist_text">Список пройденных станций:</h3>
                    <ul className="team_pslist">
                        <li className="team_pslist_elem">
                            Station 1
                        </li>
                        <li className="team_pslist_elem">
                            Station 2
                        </li>
                        <li className="team_pslist_elem">
                            Station 3
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default TeamScreen;
