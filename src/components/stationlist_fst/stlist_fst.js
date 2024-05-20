import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stationlist/stationlist.css"

const StationListFst = () => {
    const navigate = useNavigate();
    const [steditList, setSteditList] = useState([]);

    // const onCloseClick = useCallback(() => {
    //     navigate("/");
    // }, [navigate]);


    // const onScreenClick = useCallback(() => { 
    //     navigate("/screen")
    // }, [navigate]);




    const onExitClick = useCallback(() => {
        navigate("/");
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
                    <li className="text_stationlist" key={item.id}>{item.name}</li>
                )));
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="stationlist">
            <main className="stationlist_main">
                {/* <button className="stationlist_close" onClick={onCloseClick} /> */}
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