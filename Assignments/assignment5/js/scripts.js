let $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}
window.addEventListener("load", () => {
    "use strict";
    let submit = window.document.getElementById("submit");
    submit.addEventListener("click", () => { 
        window.console.log($("id").value);
        window.console.log($("name").value);
        window.console.log($("ext").value);
        window.console.log($("email").value);
        window.console.log($("department").value);
    });
});