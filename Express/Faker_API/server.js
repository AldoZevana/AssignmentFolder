const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

// Function to generate a User object
function createUser() {
    return {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
    };
}

// Function to generate a Company object
function createCompany() {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
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
