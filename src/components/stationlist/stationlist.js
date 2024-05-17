import { useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "../stationlist/stationlist.css"

const StationListFst = () => {
    const navigate = useNavigate();
    const onCloseClick = useCallback(() => { 
        navigate("/"); 
    }, [navigate]);
    
    const onFrameDivClick = useCallback(() => { 
        // Please sync "Station Name" to the project
    }, []);
    

    const onCreateClick = useCallback(() => {
        navigate("/screen")
    }, [navigate]);

    const onExitClick = useCallback(() =>  {
        navigate("/admin");
    }, [navigate]);
    
    return (
    <div className="stationlist">
        <main className="stationlist_main">
            <button className="stationlist_close" onClick={onCloseClick} />
            <h2 className="text_stationlist">Список станций</h2>

            <div className="Inform">
                
                    <ol className="station_name">
                        <li className="station_name_elem" onClick={onFrameDivClick}>
                            <input 
                                className="text_station"
                                type="text"
                                value={"Паутинка"}>
                            </input>

                            <input 
                                className="inp_checkbox"
                                type="checkbox"
                                id="inp_checkbox">
                            </input>
                        </li>

                        <li className="station_name_elem" onClick={onFrameDivClick}>
                            <input 
                                className="text_station"
                                type="text"
                                value={"Квиз"}>
                            </input>

                            <input 
                                className="inp_checkbox"
                                type="checkbox"
                                id="inp_checkbox">
                            </input>
                        </li>

                        <li className="station_name_elem" onClick={onFrameDivClick}>
                            <input 
                                className="text_station"
                                type="text"
                                value={"Поезд"}>
                            </input>

                            <input 
                                className="inp_checkbox"
                                type="checkbox"
                                id="inp_checkbox">
                            </input>
                        </li>
                    </ol>
                

                
            </div>
            
            <div className="buttons_stationlist">
                <button className="buttons_stationlist creating" onClick={onCreateClick} />
                <button className="buttons_stationlist exit" onClick={onExitClick} />
            </div>
        </main>
        </div>
    ) ;
};

export default StationListFst;