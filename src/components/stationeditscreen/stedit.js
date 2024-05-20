import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stationeditscreen/stedit.css";



const StationEditScreen = () => {
    const navigate = useNavigate();
    const [curpassword, setCurPassword] = useState("");
    const [stationName, setStationName] = useState("");
    const [rules, setRules] = useState("");


    const onCrossBtn2Click = useCallback(() => {
        navigate("/stlistfst");
    }, [navigate]);

    const onSaveClick = useCallback(() => {
        navigate("/stlistfst");
    }, [navigate]);

    const handleStnameChange = (e) => {
        setStationName(e.target.value);
    };

    const handlePswChange = (e) => {
        setCurPassword(e.target.value);
    };

    const handleRulesChange = (e) => {
        setRules(e.target.value);
    };

    return (
        <div className="station_screen">
            <main className="station_screen_main">
                <button className="station_screen_close" onClick={onCrossBtn2Click} />
                <h2 className="text_comandname">Название станции:</h2>
                <input className="screen_text_station" type="text" value={stationName} onChange={handleStnameChange} />

                <h2 className="curator_password_text">Пароль для куратора станции:</h2>
                <input className="curator_password" value={curpassword} onChange={handlePswChange} />

                <h2 className="rules_text">Правила станции:</h2>
                <textarea className="description" rows="5" cols="50" value={rules} onChange={handleRulesChange} />

                <button className="btn_station_screen save" onClick={onSaveClick}>Сохранить</button>
            </main>
        </div>
    );
};

export default StationEditScreen;
