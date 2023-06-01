import { Link } from "react-router-dom";

function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
        
            <div className="card-content">
                <span className="card-title center-align">{strMeal}</span>
            </div>

            <div className="card-action center-align">  
                <Link to={`/meal/${idMeal}`} className="btn orange darken-1">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };