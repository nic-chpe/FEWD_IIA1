// HANDLE THE LOAD EVENT OF THE WINDOW
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
function init() {
    "use strict";
    let addEmployee = window.document.getElementById("btnAddEmployee");
    addEmployee.addEventListener("click", function () {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open("add-employee.html", "btnAddEmployee", "width=400,height=800");
    });
}
window.addEventListener("load", init);
