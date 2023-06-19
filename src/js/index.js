//import css from "../css/styles.css";
// import "bootstrap";
// import "../css/bootstrap.min.css";


setTimeout(() => {
    const get_meal_btn = document.getElementById("btn-aleatorio");
    const container_meals_div = document.getElementById("container_meals");
    const nombre_comida_label = document.getElementById("nombre_comida");
    const imagen = document.getElementById("imagenComida");

    get_meal_btn.addEventListener("click",() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
    });
    
    function createMeal(meal){
        nombre_comida_label.innerHTML = meal.strMeal;
        //categoria_comida_label.innerHTML = meal.strCategory;
        imagen.src = (meal.strMealThumb);
    }

  }, "1000");
