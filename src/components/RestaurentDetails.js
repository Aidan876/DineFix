import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { data: restaurant, error, isPending } = useFetch('http://localhost:8003/restaurants/' + id);

  return (
    <div className="restaurant-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { restaurant && (
        <article>
          <h2>{ restaurant.Name }</h2>
          <p> { restaurant.description }</p>        
        </article>
      )}
    </div>
  );
}
 
export default RestaurantDetails;
