const { response } = require("express");
const express = require("express");
const faker = require("faker");
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ) );

const createUser = () => {
    return{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(), 
        password: faker.internet.password(),
    }
};

const createCompany = () =>{
    return {
        name: faker.company.companyName(),
        // department: faker.commerce.department(),
        address: faker.address.streetAddress(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
}};

app.get("/api/users/new", (req, res) => {
    let fakeUser = createUser();
    console.log(fakeUser);
    res.json(fakeUser);
});

app.get("/api/companies/new", (req, res)=>{
    let fakeCompany = createCompany();
    console.log(fakeCompany);
    res.json(fakeCompany);
});

app.get("/api/user/company", (req, res) =>{
    let newFakeUser = createUser();
    let newFakeCompany = createCompany();
    const companyAndUser = {
        user: newFakeUser,
        company: newFakeCompany,
    }
    res.json(companyAndUser);
});

app.listen(8000, () => 
console.log("You have successfully connected to port 8000"));