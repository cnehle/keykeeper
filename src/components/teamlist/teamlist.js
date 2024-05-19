import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../teamlist/teamlist.css";

const TeamList = () => {
    const navigate = useNavigate();

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="teamlist">
            <main className="teamlist_main">

                <button className="teamlist_close" id="close" onClick={onCloseClick}></button>
                <h3 className="teamlist_text" id="teamlist_text">Команды</h3>

                <div className="teamlist_body">

                </div>
            </main>
        </div>
    );
};

export default Results;
