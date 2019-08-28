const breakfastFood = {
    mainFood: "Sweet Potato",
    additions: ["Coconut Oil", "Walnuts", "Raisins", "Salt"]
};

const totalBreakfast = document.querySelector(".breakfastFood");

const consume = (meal) => {
    return `
    <h1>Phil ate:</h1>
    <ul>
        <li>${meal.mainFood} </li>
        <li>${meal.additions[0]} </li>
        <li>${meal.additions[1]} </li>
        <li>${meal.additions[2]} </li>
        <li>${meal.additions[3]} </li>
    </ul>
    `
}

totalBreakfast.innerHTML = consume(breakfastFood);