import { useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "../teamlist/teamlist.css";

const TeamList = () => {
    const navigate = useNavigate();

    const onExitClick = useCallback(() => { 
        navigate("/"); 
    }, [navigate]);
    
    return (
    <div className="teamlist">
        <main className="teamlist_main">
            <h2 className="text_teamlist">Список команд</h2>

            <div className="Inform_team">
                    <ol className="team_name">
                        <li className="team">
                            <input
                            className="text_team"
                            type="text"
                            value={"Кролики"}>
                            </input>
                        </li>

                        <li className="team">
                            <input
                            className="text_team"
                            type="text"
                            value={"Барбарики"}>
                            </input>
                        </li>

                        <li className="team">
                            <input
                            className="text_team"
                            type="text"
                            value={"Елочки"}>
                            </input>
                        </li>
                    </ol>
            </div>
            
            
            <button className="btn_teamlist_exiting" onClick={onExitClick}>Назад</button>
            
        </main>
        </div>
    ) ;
};

export default TeamList;