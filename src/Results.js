import React , { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';

function Results(props) {
  const [meals, setMeals] = useState([]);
  useEffect(async () => {
    
    const response = await axios.post(
      "https://api.mage.ai/v1/predict",
      {
        "api_key": "D16qyJKIoe26qq3bMrAOcQPpgBZDi6FvGKlib0WU",
        "features": [
          {
            "age": props.vals.age,
            "cuisine": props.vals.cuisine,
            "gender": props.vals.gender,
            "temperature": props.vals.temperature,
            "time_": props.vals.time,
            "weather": props.vals.weather
          }
        ],
        "model": "recommendations_rank_1645952799810",
        "version": "1"
      },
      { headers: {'Content-Type': 'application/json'}}
    );

    setMeals(response.data[0].prediction.slice(0, 10));
  }, [meals]); // only calls if meals changes

  if (meals === null) {
    return 'Loading...';
  }

  return (
    <div id="app" class="home bg-dark text-secondary px-4 py-5 text-center">

      <div class="py-4">
        <h1 class="display-5 fw-bold text-white">Here are the top dishes based on your criteria!</h1>
      </div>

      <div class="py-5 mt-1">

        <ol class="list-group list-group-numbered w-25 text-center mx-auto">
          {meals.map(item => {
            return <li key={item} class="list-group-item bg-light bg-gradient">{item}</li>;
          })}
        </ol>

        <div class="d-grid gap-5 d-sm-flex justify-content-sm-center mt-3 pt-5">
          <Link to="/">
            <button type="button" class="btn btn-outline-warning btn-lg px-4 me-sm-3 fw-bold">Go Back to Criteria</button>
          </Link>
        </div>

      </div>

      <footer class="fixed-bottom pb-3">
        <ul class="nav justify-content-center pb-3 mb-3">
          <li class="nav-item"><p class="text-center text-muted text-decoration-none"><a href="" class="text-decoration-none">Built</a> with ❤️ for <a href="" class="text-decoration-none">HackUCI 2022</a> using <a href="" class="text-decoration-none">Mage.ai</a></p></li>
        </ul>
      </footer>

    </div>
  );
}

export default Results;
