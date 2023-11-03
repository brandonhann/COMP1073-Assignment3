// add student info
addStudentInfo();

function addStudentInfo() {
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = '<p>200547547 - Brandon Hann</p>';
}

// event listener for the form
const orderForm = document.getElementById('pizzaOrderForm');
orderForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();

    // collect form data
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const cheese = document.getElementById('cheese').value;
    const toppings = getSelectedToppings();

    // create pizza object
    const pizza = new Pizza(size, crust, cheese, toppings);
    displayPizzaOrder(pizza);
}

function getSelectedToppings() {
    const toppingsCheckboxes = document.getElementsByName('toppings');
    let toppings = []; // 1 array to hold all the toppings
    for (let i = 0; i < toppingsCheckboxes.length; i++) { // loop through all the checkboxes
        if (toppingsCheckboxes[i].checked) { // condition to check if the checkbox is checked
            toppings.push(toppingsCheckboxes[i].value);
        }
    }
    return toppings;
}

// capitalize each selected topping for output
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayPizzaOrder(pizza) {
    const pizzaSummary = document.getElementById('output');
    pizzaSummary.innerHTML = pizza.displayOrder();
}

// pizza class
class Pizza {
    constructor(size, crust, cheese, toppings) {
        this.size = size;
        this.crust = crust;
        this.cheese = cheese;
        this.toppings = toppings;
    }

    displayOrder() {
        return `<h2>Your Order</h2>
                <p>Size: ${capitalizeFirstLetter(this.size)}</p>
                <p>Crust: ${capitalizeFirstLetter(this.crust)}</p>
                <p>Cheese: ${capitalizeFirstLetter(this.cheese)}</p>
                <p>Toppings: ${this.toppings.map(capitalizeFirstLetter).join(', ')}</p>`;
    }
}
