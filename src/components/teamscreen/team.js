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
            </main>
        </div>
    );
};

export default TeamScreen;
