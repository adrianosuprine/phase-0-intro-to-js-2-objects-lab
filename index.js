// // Write your solution in this file!
let employee = {
    name:'Adriano',
    streetAddress: 'Chiromo Lane',
}
function updateEmployeeWithKeyAndValue(employee,key,value){
  let employeeTwo = {... employee};
  employeeTwo = {
    name : "Sam", streetAddress : "11 Broadway"}
  return employeeTwo;
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
  employee.name = "Sam";
  employee.streetAddress= "12 Broadway";
  return employee;

}
function deleteFromEmployeeByKey(employee,key){
  let employee_2 = {... employee};
  delete employee_2.name;
  return employee_2;

}
function destructivelyDeleteFromEmployeeByKey(){
  delete employee.name;
  return employee;
}

































