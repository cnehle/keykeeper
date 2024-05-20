import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../curator/curator.css";

const CuratorScreen = () => {
    const navigate = useNavigate();
    const [qteam, setQteam] = useState("");
    const [score, setScore] = useState("");

    const onCloseClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const handleQteamChange = (e) => {
        setQteam(e.target.value);
    };

    const handleScoreChange = (e) => {
        setScore(e.target.value);
    };

    return (
        <div className="curator-screen">
            <main className="curator_main">

                <div className="curator_header">
                    <button className="teamedit_close" id="close" onClick={onCloseClick}></button>
                    <h1 className="curator_text station_name">Название станции</h1>
                    <input className="t_name" value={qteam} onChange={handleQteamChange} />
                    <button className="begin_challenge">Начать испытание</button>
                    <button className="end_challendge">Закончить испытание</button>
                    <div className="creative">
                        <h3 className="creative_text">Баллы за креатив:</h3>
                        <input className="creative_score" value={score} onChange={handleScoreChange} />
                        <button className="ok_score">ОК</button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default CuratorScreen;
