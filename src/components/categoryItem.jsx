import { Link } from "react-router-dom";

function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
        
            <div className="card-content">
                <span className="card-title center-align">{strCategory}</span>
                <p className="center-align">{strCategoryDescription.slice(0, 60)}...</p>
            </div>

            <div className="card-action center-align">  
                <Link to={`/category/${strCategory}`} className="btn orange darken-1">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };