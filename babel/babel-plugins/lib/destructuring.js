function introduction(person) {
  let name = person.name,
    age = person.age,
    job = person.job;
  console.log('hi, my name is ' + name + ", I'm " + age + ' years old and my role is ' + job);
}
const person = {
  name: 'John Smith',
  age: 33,
  job: 'Software Engineer'
};
introduction(person);