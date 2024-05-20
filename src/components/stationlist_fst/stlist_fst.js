import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stationlist/stationlist.css"

const StationListFst = () => {
    const navigate = useNavigate();
    const [steditList, setSteditList] = useState([]);

    const onExitClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onStationClick = useCallback((event) => {
        const stationId = event.currentTarget.dataset.id;
        navigate("/screen", { state: stationId });
    }, [navigate]);

    useEffect(() => {
        const url = 'https://warthog-growing-honeybee.ngrok-free.app/API/v1/station/pull';

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
                setSteditList(data.map(item => (
                    <li className="text_station" key={item.id} onClick={onStationClick} data-id={item.id}>
                        <span className="text_station">{item.name}</span>
                        <Radiobutton className="taken_rb">{item.taken}</Radiobutton>
                    </li>
                )));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="stationlist">
            <main className="stationlist_main">
                <h2 className="text_stationlist">Список станций</h2>

                <div className="Inform_st">
                    <ol className="station_name">
                        {steditList}
                    </ol>
                </div>

                <div className="but_stlist">
                    <button className="btn_stationlist exiting" onClick={onExitClick}>Назад</button>
                </div>
            </main>
        </div>
    );
};

export default StationListFst;
