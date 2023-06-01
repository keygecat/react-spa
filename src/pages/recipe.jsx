import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">

                    <button className="btn orange darken-1" onClick={goBack}>
                        Go Back
                    </button>

                    <div className="row center-align">
                        <img src={recipe.strMealThumb} alt={recipe.strMealThumb} />
                    </div>
                    <h1 className="center-align">{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered z-depth-1">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return(
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                         </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>   

                    <div className="center-align">
                        {recipe.strYoutube ? (
                            <div className="row center-align">
                                <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
                                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice()}`} allowFullScreen/>
                            </div>
                        ) : null}
                        <button className="btn orange darken-1" onClick={goBack}>
                            Go Back
                        </button>
                    </div>

                </div>
            )}
        </>
    );
}

export { Recipe };