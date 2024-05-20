import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stationeditscreen/stedit.css";



const StationEditScreen = () => {
    const navigate = useNavigate();
    const [curpassword, setCurPassword] = useState("");

    const onCrossBtn2Click = useCallback(() => {
        navigate("/stlistfst");
    }, [navigate]);

    const onSaveClick = useCallback(() => {
        navigate("/stlistfst");
    }, [navigate]);

    const handlePswChange = (e) => {
        setCurPassword(e.target.value);
    };

    return (
        <div className="station_screen">
            <main className="station_screen_main">
                <button className="station_screen_close" onClick={onCrossBtn2Click} />
                <h2 className="text_comandname">Название команды</h2>
                <input
                    className="screen_text_station"
                    type="text"
                    value={"Кошатники"}>
                </input>

                <input className="curator_password" value={curpassword} onChange={handlePswChange} />

                <textarea className="description" rows="5" cols="50">
                    Всё тело кошки мягкое, гибкое. Хвост длинный и пушистый. Ноги короткие, но сильные.
                    Каждый палец вооружён острым выгнутым когтем. Кошка умеет сделать свою лапу бархатной. Она ловко прячет когти, чтобы не притупились. Ходит на пальцах, но когтями по полу не стучит.
                </textarea>

                <button className="btn_station_screen save" onClick={onSaveClick}>Сохранить</button>
            </main>
        </div>
    );
};

export default StationEditScreen;
