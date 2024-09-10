require('dotenv').config();
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  "name": {
    "type": String,
    "required": true
  },
  "age": Number,
  "favoriteFoods": [String]
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let dipperPines = new Person({"name": "Dipper", "age": 15, "favoriteFoods": ["burger", "fish"]}); //create a person record
  //save the record
  dipperPines.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

let arrayOfPeople = [
  {"name": "Mabel", "age": 15, "favoriteFoods": ["sugar", "candy", "cake"]},
  {"name": "Soos", "age": 26, "favoriteFoods": ["pizza"]},
  {"name": "Gruncle Stan", "age": 40, "favoriteFoods": ["mac n cheese", "tuna"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({"name": personName}, function(err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({"favoriteFoods": food}, function(err, foodFound) {
    if (err) return console.log(err);
    done(null, foodFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({"_id": personId}, function(err, idFound) {
    if (err) return console.log(err);
    done(null, idFound);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
