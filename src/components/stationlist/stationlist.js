import { useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "../stationlist/stationlist.css"

const StationListFst = () => {
    const navigate = useNavigate();
    const [steditList, setSteditList] = useState([]);

    const onCloseClick = useCallback(() => { 
        navigate("/"); 
    }, [navigate]);
    
    
    const onScreenClick = useCallback(() => { 
        navigate("/screen")
    }, [navigate]);
    

    const onCreateClick = useCallback(() => {
        navigate("/screen")
    }, [navigate]);

    const onExitClick = useCallback(() =>  {
        navigate("/admin");
    }, [navigate]);

    useEffect(() => {
        const Http = new XMLHttpRequest();
        const url = 'http://5.101.7.212:8181/API/v1/station/list';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4 && Http.status === 200) {
                const data = JSON.parse(Http.responseText);
                setSteditList(data.map(item => <li className="station_name_elem" key={item.id}>{item.name}</li>));
            }
        }
    }, []);
    
    return (
    <div className="stationlist">
        <main className="stationlist_main">
            <button className="stationlist_close" onClick={onCloseClick} />
            <h2 className="text_stationlist">Список станций</h2>

            <div className="Inform_st">
                    <ol className="station_name">
                        {steditList}
                    </ol>
            </div>
            
            <div className="but_stlist">
                <button className="btn_stationlist creating" onClick={onCreateClick}>Создать</button>
                <button className="btn_stationlist exiting" onClick={onExitClick}>Назад</button>
            </div>
        </main>
        </div>
    ) ;
};

export default StationListFst;