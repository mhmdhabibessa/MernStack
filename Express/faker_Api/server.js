const express = require("express");
const faker = require("faker");

const app = express();


class User {
  constructor() {
    this.id = faker.datatype.uuid();
    this.firstName=  faker.name.firstName(); 
    this.lastName=faker.name.lastName();
    this.phoneNumber=faker.phone.phoneNumber();
    this.email=faker.internet.email();
    this.password=faker.internet.password();
  }
}
class Company {
  constructor() {
    this.id=faker.datatype.uuid();
    this.name=faker.name.findName();
    this.address={city:faker.address.city(),
                  cityName:faker.address.cityName(),
                  state:faker.address.state(),
                  zipCode:faker.address.zipCode(),
                  country:faker.address.country()
                
                } ;
  }
}


const new_user=  new User();
const new_company= new Company();
// req is short for request
// res is short for response
app.get("/api/user/new", (req, res) => {
  res.send(new_user);
});
app.get("/api/companies/new" , (req,res) =>{
  res.send(new_company)
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
