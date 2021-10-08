import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getStarWars } from "./store/action";

function StarWars(): JSX.Element {
  const dispatch = useAppDispatch();
  const store = useAppSelector(store => store);


  const getUser = () => {
    dispatch(getStarWars());
    console.log(store);
  }
  type Planets = {
    name: string;
    diameter: string;
    orbital_period: string;
    gravity: string;
    population: string;
    [key: string]: string
  }

  type People = {
    name: string;
    height: string;
    mass: string;
    skin_color: string;
    [key: string]: string
  }

  const planets: Planets[] = useAppSelector(store => store.starWarReducer.planets)
  const peoples: People[] = useAppSelector(store => store.starWarReducer.people)

  return (
    <>
      <h3>StarWars <button className="btn btn-success" onClick={getUser}>Get</button></h3>

      <div>
        <h4>People:</h4> <hr />
        {peoples ? peoples.map((item) => (<p> <b> {item.name} </b>,{" "}
          height: {item.height},{" "}
          mass:{item.mass},{" "}
          skin_color:{item.skin_color}
        </p>)) : <p>-</p>}
      </div>

      <div>
        <h4>Planets:</h4> <hr />
        {planets ? planets.map((item) => (<p> <b> {item.name} </b>,{" "}
          diameter: {item.diameter},{" "}
          orbital_period:{item.orbital_period},{" "}
          population:{item.population}
        </p>)) : <p>-</p>}
      </div>
    </>
  );
}

export default StarWars;
