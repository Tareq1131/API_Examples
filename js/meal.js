const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  //console.log(meals)
  // 1. set container element
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";

  meals.forEach((meal) => {
    console.log(meal);
    //    2. create child for each element
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    //    3.set content of the child
    mealDiv.innerHTML = `
    <div class="card h-100">
        <img class="img1" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           
            <!-- Button trigger modal -->
            <button onClick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
             Details
            </button>
       
            </div>
        </div>
    
    
    `;
    // 4. appendChild
    mealsContainer.appendChild(mealDiv);
  });
};

const searchMeals = () => {
  const searchText = document.getElementById("search-field").value;
  console.log(searchText);
  loadMeals(searchText);
};

const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  //console.log(idMeal)
  fetch(url)
    .then((res) => res.json())
    .then((data) => desplyMealDetails(data.meals[0]))
    .catch((error) => {
      console.log(error);
    });
};
// async
const loadMealDetail2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    desplyMealDetails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

const desplyMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  const mealsDetails = document.getElementById("mealDetailsBody");
  mealsDetails.innerHTML = `
    <h5>Meal id: '${meal.idMeal}'</h5>
    <h5>Category: '${meal.strCategory}'</h5>
    <p>Area: '${meal.strArea}'</p>
    <p>Ingredient: '${meal.strIngredient1}'</p>
    <p>Instructions
    : '${meal.strInstructions}'</p>
  
  `;
};

loadMeals("chi");
