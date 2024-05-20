const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

// Function to generate a User object
function createUser() {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
}

// Function to generate a Company object
function createCompany() {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
}

// Route to generate a new User object
app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});

// Route to generate a new Company object
app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

// Route to generate both a new User and a new Company
app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
