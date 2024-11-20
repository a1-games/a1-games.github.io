
var personContainer = document.getElementById("people-holder");
var paymentsContainer = document.getElementById("payments-holder");
var paymentAdder = document.getElementById("payment-adder");

var personTemplate = document.getElementById("person-template");
var paymentTemplate = document.getElementById("payment-template");

var nameinput = document.getElementById("person-name-input");

var paymentInput = document.getElementById("payment-input");
var paymentDropdown = document.getElementById("payment-dropdown");

var paymentOrderContainer = document.getElementById("payment-order");

var segments = document.getElementsByClassName("segment");

var persons = [];

var payments = [];

const personColors = [
    "rgb(139, 112, 23)",
    "rgb(23, 103, 139)",
    "rgb(139, 23, 100)",
    "rgb(23, 131, 139)",
    "rgb(23, 139, 91)",
    "rgb(23, 69, 139)",
    "rgb(77, 23, 139)",
    "rgb(135, 23, 139)",
    "rgb(65, 139, 23)",
    "rgb(137, 139, 23)",
    "rgb(139, 75, 23)",
    "rgb(23, 44, 139)",
    "rgb(139, 23, 23)",
    "rgb(25, 23, 139)",
    "rgb(102, 23, 139)",
    "rgb(23, 139, 42)",
    "rgb(48, 23, 139)",
    "rgb(141, 141, 141)",
    "rgb(108, 139, 23)",
];

var usedColors = 0;

function getMyColor()
{
    let myIndex = usedColors;

    usedColors++;
    if (usedColors >= personColors.length)
        usedColors = 0;
    
    return personColors[myIndex];
}

// --------------------


function removePayment(payment, paymentID)
{
    let paymentIndex = 0;
    for (let i = 0; i < payments.length; i++) {
        if (payments[i].name == payment.name)
        {
            paymentIndex = i;
            break;
        }
    }

    // fix the total
    total -= payment.amountpaid;
    // fix the person paid
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].name == payment.name)
        {
            persons[i].amountpaid -= payment.amountpaid;
            break;
        }
    }

    // remove the deleted element
    payments.splice(paymentIndex, 1);

    // destroy visually
    let paymentelement = document.getElementById(`payment${paymentID}`);
    paymentelement.remove();

    refreshAllInfo();
}













// --------------------

function spawnPerson(person)
{
    var personElement = personTemplate.cloneNode(true);

    personElement.removeAttribute("hidden");
    personElement.getElementsByClassName("person-name")[0].innerHTML = person.name;
    personElement.style.backgroundColor = person.color;
    personElement.id = "person"+person.name;
    
    personContainer.appendChild(personElement);
}

function spawnPayment(payment, person)
{
    let i = payments.length-1;
    var paymentElement = paymentTemplate.cloneNode(true);

    paymentElement.removeAttribute("hidden");
    paymentElement.getElementsByClassName("person-name")[0].innerHTML = person.name;
    paymentElement.getElementsByClassName("person-paid")[0].innerHTML = "Paid: "+ payment.amountpaid;
    paymentElement.style.backgroundColor = person.color;
    paymentElement.id = `payment${i}`;

    let xbutton = paymentElement.getElementsByClassName("X")[0];
    xbutton.onclick = function() { removePayment(payment, i) };
    
    paymentsContainer.appendChild(paymentElement);
}

function addPersonOnClick(e = "")
{
    if (e != "")
        e.preventDefault();

    if (nameinput.value == "")
        return;
    addPerson(nameinput.value);
    nameinput.value = "";

    paymentAdder.style.display = "flex";
    personContainer.style.display = "grid";
}

function addDropdownOption(person)
{
    let option = document.createElement("option");
    option.value = persons.length-1;
    option.innerHTML = person.name;
    
    paymentDropdown.appendChild(option);
}

function addPaymentOnClick()
{
    let index = paymentDropdown.value;
    let amount = parseInt(paymentInput.value);
    addBill(amount, persons[index]);
    paymentsContainer.style.display = "grid";
}


function updateInformation(person)
{
    let htmlperson = document.getElementById("person" + person.name);
    htmlperson.getElementsByClassName("person-paid")[0].innerHTML = "Paid: " + person.amountpaid;
    let owed = person.amountowed;
    
    htmlperson.getElementsByClassName("person-owed")[0].innerHTML = (owed < 0 ? "Owed: ": "Owes: ") + Math.sqrt(Math.pow(owed, 2));
}

function debugAnything()
{
    console.log("anything");
}


function arrangePaymentOrder()
{
    paymentOrderContainer.innerHTML = "";

    let owedPeople = [];
    let owingPeople = []

    for (let i = 0; i < persons.length; i++) {
        let p = persons[i];

        if (persons[i].amountowed < 0)
            owedPeople.push(p);
        else
            owingPeople.push(p);
    }

    // dont show payment order unless payment is needed
    if (owedPeople.length == 0)
    {
        console.log("0 owed people");
        paymentOrderContainer.style.display = "none";
        return;
    }
    

    for (let i = 0; i < owedPeople.length; i++) {
        // amount owed is negative when fetching, so inverse it to positive for easier calculation
        let amountowed = -owedPeople[i].amountowed;

        for (let j = 0; j < owingPeople.length; j++) {
            let el = document.createElement("div");
            el.classList.add("info-p");

            // skip j if j has paid their debt
            if (owingPeople[j].amountowed == 0)
                continue;

            let p1 = document.createElement("p");
            //p1.classList.add("info-p");
            let p2 = document.createElement("p");
            //p2.classList.add("info-p");
            let p3 = document.createElement("p");
            //p3.classList.add("info-p");

            let ps = [p1, p2, p3];
            el.append(...ps);

            p1.style.backgroundColor = owingPeople[j].color;
            p1.innerHTML = owingPeople[j].name;
            p1.classList.add("paymentListName");
            
            p2.classList.add("autoheightmargin");

            p3.style.backgroundColor = owedPeople[i].color;
            p3.innerHTML = owedPeople[i].name;
            p3.classList.add("paymentListName");

            let amountToPay = 0;
            if (owingPeople[j].amountowed <= amountowed)
            {
                amountToPay = owingPeople[j].amountowed.toString();
                amountowed -= owingPeople[j].amountowed;
                owingPeople[j].amountowed = 0;
            }
            else
            {
                amountToPay = amountowed;
                owingPeople[j].amountowed -= amountowed;
                amountowed = 0;
            }

            /* Here, amountToPay should be rounded to 2 decimals */
            
            p2.innerHTML = " pays " + amountToPay + " to ";

            paymentOrderContainer.appendChild(el);


            // remove from calculation once debt is paid
            if (amountowed == 0)
                break;
            
        }
        
    }

    paymentOrderContainer.style.display = "block";
}

//------------------------- backend under, frontend above

var total = 0;


function addPerson(name)
{
    var person = {"name":name, "amountpaid":0, "amountowed":0, "color":getMyColor()};
    persons.push(person);

    spawnPerson(person);
    addDropdownOption(person);

    refreshAllInfo();
    hideSegments(false);
}

function addBill(amountPaid, payee)
{
    var payment = {"name":payee.name, "amountpaid":amountPaid};
    payments.push(payment);

    total += amountPaid;
    payee.amountpaid += amountPaid;

    spawnPayment(payment, payee)

    refreshAllInfo();
}

function setTextColor(element, color)
{
    let colors = ["c-red", "c-gray", "c-blue"];
    element.classList.remove(...colors);
    element.classList.add("c-"+color);
}

function refreshAllInfo()
{
    for (let i = 0; i < persons.length; i++) {
        let p = persons[i];

        calculateAmountOwed(p);
        updateInformation(p);

        if (p.amountowed > 0)
            setTextColor(document.getElementById("person"+p.name).getElementsByClassName("person-owed")[0], "red");
        else if (p.amountowed == 0)
            setTextColor(document.getElementById("person"+p.name).getElementsByClassName("person-owed")[0], "gray");
        else
            setTextColor(document.getElementById("person"+p.name).getElementsByClassName("person-owed")[0], "blue");


    }
    arrangePaymentOrder();
}


function calculateAmountOwed(person)
{
    let paid = person["amountpaid"];
    let share = total / persons.length;
    person.amountowed = (share - paid).toFixed(2);
}

function hideSegments(bool)
{
    if (bool)
    {
        for (let i = 0; i < segments.length; i++) {
            segments[i].style.display = "none";
        }
    }
    else
    {
        for (let i = 0; i < segments.length; i++) {
            segments[i].style.display = "block";
        }
    }
}
hideSegments(true);