// CREATE AN ARRAY OF EMPLOYEES
let employees = [{id: 1, name:'John Doe', extension: 1234, email: 'john.doe@example.com', department: 'Sales'},
    {id: 2, name: 'Jane Smith', extension: 5678, email: 'jane.smith@example.com', department: 'Marketing'},
    {id: 3, name: 'Bob Johnson', extension: 9012, email: 'bob.johnson@example.com', department: 'Finance'},
    {id: 4, name: 'Sarah lee', extension: 3456, email: 'sara.lee@example.com', department: 'HR'},
    {id: 5, name: 'Mike Smith', extension: 7890, email: 'mike.smith@example.com', department: 'IT'}];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    buildGrid(employees);
});

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains("delete")) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};