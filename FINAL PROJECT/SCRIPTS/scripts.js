//Modal Trigger
 $('#checkOutModal').on('show.bs.modal', function (event) {
    'use strict';
    let button = $(event.relatedTarget); 
});
  
//Hidden Element
$("#addressType").change(function () {
    'use strict';
    let value = this.value;
    if (value === "1") {
        $(".hide").removeClass();
    }
});


$("#target").submit(function (event) {
    'use strict';
   let input = $("#target input").serializeArray();
  // window.console.log(input);
    function escapeRegExp(string) {
        return string.replace(/[.*+?\^${}()|\[\]\\]/g, '\\$&');
    }
              
});
//Form Validation

function alphaOnly(inputtext) {
    'use strict';
    let alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        window.console.log("alphaOnly-true");
        return true;
    } else {
        inputtext.focus();
        window.console.log("alphaOnly-false");
        return false;
    }
}

function inputEmail(inputtext) {
    'use strict';
    let emailExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputtext.value.match(emailExpr)) {
        window.console.log("inputEmail-true");
        return true;
    } else {
        inputtext.focus();
        $("#deliveryModalLabel").text("Email Not Valid!").show();
        window.console.log("inputEmail-false");
        return false;
    }
}

function inputPhone(inputtext) {
    'use strict';
    let phoneExpr = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtext.value.match(phoneExpr)) {
        window.console.log("inputPhone-true");
        return true;
    } else {
        inputtext.focus();
        $("#deliveryModalLabel").text("Phone Not Valid!").show();
        window.console.log("inputPhone-false");
        return false;
    }
}

function inputZipCode(inputtext) {
    'use strict';
    let postalCodeExpr = /(^\d{5}(?:[\s]?[\-\s][\s]?\d{4})?$)/;
    if (inputtext.value.match(postalCodeExpr)) {
        window.console.log("inputZipCode-true");
        return true;
    } else {
        inputtext.focus();
        $("#deliveryModalLabel").text("Zip Code Not Valid!").show();
        window.console.log("inputZipCode-false");
        return false;
    }
}

function inputStreetAddress(inputtext) {
    'use strict';
    let streetAddressExpr = /[A-Za-z0-9'\.\-\s\,]/;
    if (inputtext.value.match(streetAddressExpr)) {
        window.console.log("inputStreetAddress-true");
        return true;
    } else {
        inputtext.focus();
        $("#deliveryModalLabel").text("Street Address Not Valid!").show();
        window.console.log("inputStreetAddress-false");
        return false;
    }
}


document.getElementById("target").onsubmit = function formValidation() {
    'use strict';
    window.console.log("validation function invoked");
    let firstName = document.getElementById('firstName'),
        lastName = document.getElementById('lastName'),
        email = document.getElementById('email'),
        phone = document.getElementById('phone'),
        streetAddress = document.getElementById('streetAddress'),
        postalCode = document.getElementById('postalCode'),
        city = document.getElementById('city'),
        otherAddress = document.getElementById('otherAddress');
    if (firstName.value.length === 0) {
        firstName.focus();
        $("#deliveryModalLabel").text("Name Not Valid!").show();
        return false;
    }
    if (inputAlpha(firstName)) {
        if (inputAlpha(lastName)) {
            if (inputEmail(email)) {
                if (inputPhone(phone)) {
                    if (inputStreetAddress(streetAddress)) {
                        if (inputPostalCode(postalCode)) {
                            if (inputAlpha(city)) {
                                if (inputAlpha(otherAddress)) {
                                    $("#deliveryModal").modal("toggle");
                                    return true;
                                    
                                    
                                    else {

                                }//inputAlpha otherAddress
                            }//inputAlpha city   
                        }//inputNumeric postalCode    
                    }//inputNumeric streetAddress
                }//inputNumeric phone
            }//inputEmail email
        }//inputAlpha lastName
    }//inputAlpha firstName
    return false;
};

//Pizza Building

let doughOption = $("input[name=dough]").click(function (event) {
    'use strict';
    doughOption = $("input[name=dough]:checked").val();
    window.console.log(doughOption);
});


//sizeOption
var sizeOption = $("#sizeOption").change(function (event) {
    'use strict';
    sizeOption = $("#sizeOption option:selected").val();
    window.console.log(sizeOption);
    window.console.log(doughOption);
});

$("#sizeOption").bind("submit", function (event) {
    'use strict';
    event.preventDefault();
});

//price

let subTotal = sizeOption.change(function (event) {
    'use strict';
    let display = $("input[name=display]");
    subTotal = parseFloat(subTotal);
 
    if (doughOption === "handToss" && sizeOption === "small") {
        subTotal = "9.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "thinCrust" && sizeOption === "small") {
        subTotal = "9.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "small") {
        subTotal = "9.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "handToss" && sizeOption === "medium") {
        subTotal = "12.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "handToss" && sizeOption === "large") {
        subTotal = "14.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "thinCrust" && sizeOption === "medium") {
        subTotal = "11.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "glutenFree" && sizeOption === "medium") {
        subTotal = "11.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "medium") {
        subTotal = "11.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "thinCrust" && sizeOption === "large") {
        subTotal = "13.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "glutenFree" && sizeOption === "small") {
        subTotal = "10.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "large") {
        subTotal = "16.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "glutenFree" && sizeOption === "large") {
        subTotal = "16.99";
        display.val(display.val() + subTotal);
    }
    if (doughOption === "nyStyle" && sizeOption === "exLarge") {
        subTotal = "19.99";
        display.val(parseFloat(display.val() + subTotal));
    } else {
        return false;
    }
    
    window.console.log(subTotal);
});

//cheeseOption
var cheeseOption = $("#cheeseOption").change(function (event) {
    'use strict';
    var display = $("input[name=display]"),
        extra = 2.99,
        light = 0.00,
        normal = 0.00,
        double = 3.99;
    light = parseFloat(light);
    normal = parseFloat(normal);
    extra = parseFloat(extra);
    double = parseFloat(double);
    subTotal = parseFloat(subTotal);
    cheeseOption = $("#cheeseOption option:selected").val();
    if (cheeseOption === "light") {
        subTotal = parseFloat(extra + subTotal);
        display.val(subTotal);
    }
    if (cheeseOption === "normal") {
        subTotal = parseFloat(extra + subTotal);
        display.val(subTotal);
    }
    if (cheeseOption === "extra") {
        subTotal = parseFloat(extra + subTotal);
        display.val(subTotal);
    }
    if (cheeseOption === "double") {
        subTotal = parseFloat(double + subTotal);
        display.val(subTotal);
    } else {
        subTotal = parseFloat(normal + subTotal);
        display.val(subTotal);
    }
});

//sauceOption
var sauceOption = $("#sauceOption").change(function (event) {
    'use strict';
    var display = $("input[name=display]"),
        hearty = 0.99,
        regular = 0.00,
        bbq = 1.99;
    regular = parseFloat(regular);
    hearty = parseFloat(hearty);
    bbq = parseFloat(bbq);
    subTotal = parseFloat(subTotal);
    sauceOption = $("#sauceOption option:selected").val();
    if (sauceOption === "hearty") {
        subTotal = parseFloat(hearty + subTotal);
        display.val(subTotal);
    }
    if (sauceOption === "bbq") {
        subTotal = parseFloat(bbq + subTotal);
        display.val(subTotal);
    }
    if (sauceOption === "regular") {
        subTotal = parseFloat(regular + subTotal);
        display.val(subTotal);
    } else {
        subTotal = parseFloat(regular + subTotal);
        display.val(subTotal);
    }
});

//toppingOptions
var display = $("input[name=display]");
var option;
var topping;
var toppingcost = 0;
$("input[name=topping]").click(function (event) {
    'use strict';
    option = event.target.getAttribute("value");
    option = option.split("|");
    toppingcost += parseFloat(option[0]);
    topping = option[1];
    subTotal = parseFloat(toppingcost + subTotal);
    display.val(subTotal);
        
    window.console.log(toppingcost);
    window.console.log(topping);
});

// NEXT CONTROLS
$('.btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

  $('.btnPrevious').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});
//-----------------------------------------

//billing Info Same

$("#sameInfo").on("change", function () {
    'use strict';
    if (this.checked) {
        $("[name='firstName2']").val($("[name='firstName']").val());
        $("[name='lastName2']").val($("[name='lastName']").val());
        $("[name='email2']").val($("[name='email']").val());
        $("[name='streetAddress2']").val($("[name='streetAddress']").val());
        $("[name='postalCode2']").val($("[name='postalCode']").val());
        $("[name='city2']").val($("[name='city']").val());
    }
});

// cc validation
$('#cardNumber').on('input', function(){
  if (checkLuhn($('#cardNumber').val())) {
    $('#status').html('valid');
  } else {
    $('#status').html('invalid');
  }
});

function checkLuhn(value) {
  // remove all non digit characters
  var value = value.replace(/\D/g, '');
  var sum = 0;
  var shouldDouble = false;
  // loop through values starting at the rightmost side
  for (var i = value.length - 1; i >= 0; i--) {
    var digit = parseInt(value.charAt(i));
    
    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return (sum % 10) == 0;
}};