// Write your solution in this file!
const employee = {
   name:"John",
   streetAddress: "bradst",

};



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key]=value;
    return employee;
}
function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const emply={...employee};
    emply[key]=value;
    return emply;
}
function deleteFromEmployeeByKey(employee, key)
{
    const empy = {...employee};
    delete empy[key];
    return empy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{

delete employee[key];
return employee;
}
