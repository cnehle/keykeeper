import { useCallback } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "../station list fst/stlistfst.css";

import imgSrc1 from './img/liststation.png';

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
    <div className="station-list-fst">
        <main className="close-parent">
            <button className="closel" onClick={onCloseClick} />
            <img className="liststation-icon" alt="" src= {imgSrc1}/>
            <ul className="rectangle-ul">
                <div className="parent2" onClick={onFrameDivClick}>
                    <li className="text1" >{}</li>
                    <input className="ellipse-input" type="radio" /> 
                    <input className="text" type="text" />
                </div>
            </ul>
            <div className="create-parent">
                <button className="create" onClick={onCreateClick} />
                <button className="exit" onClick={onExitClick} />
            </div>
        </main>
        </div>
    ) ;
};

export default StationListFst;