// CREATE AN ARRAY OF EMPLOYEES
let employees = [{id: 1, name:'John Doe', extension: 1234, email: 'john.doe@example.com', department: 'Sales'},
    {id: 2, name: 'Jane Smith', extension: 5678, email: 'jane.smith@example.com', department: 'Marketing'},
    {id: 3, name: 'Bob Johnson', extension: 9012, email: 'bob.johnson@example.com', department: 'Finance'},
    {id: 4, name: 'Sarah lee', extension: 3456, email: 'sara.lee@example.com', department: 'HR'},
    {id: 5, name: 'Mike Smith', extension: 7890, email: 'mike.smith@example.com', department: 'IT'}];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if(localStorage.getItem('employees')) {
    employees=JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable = document.querySelector('#empTable');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    buildGrid(employees);
});

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let empExt = document.querySelector('#extension').value;
    let empEmail = document.querySelector('#email').value;
    let empDept = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = {
        id: empID,
        name: empName,
        extension: empExt,
        email: empEmail,
        department: empDept
    };
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
    // BUILD THE GRID
    buildGrid(employees);
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains("delete")) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let row = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(row-1, 1);
        // BUILD THE GRID
        buildGrid(employees);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.querySelector('tbody').remove();
    // REBUILD THE TBODY FROM SCRATCH
    let newTbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let i = 0; i < employees.length; i++) {
    // REBUILDING THE ROW STRUCTURE
        let employee = employees[i];
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="delete">X</button></td>
        `;
        newTbody.appendChild(row);
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody);
    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};