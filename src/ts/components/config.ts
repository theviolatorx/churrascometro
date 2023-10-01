
localStorage.getItem(email);

const customer = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value
};

localStorage.setItem(customer.email, JSON.stringify(customer));