
// global variables
var passengerCost = 0;
var totalPayment = 0;
var discoveryFlight = false;
var adventureFlight = false;

// calculates all costs based on passengers and hours, adds to total payment
function calcPassengersAndHours() {
  var passengers = document.getElementById("passengernum");
  var hours = document.getElementById("flighthrs");
  totalPayment -= passengerCost
  passengerCost = (passengers.value * 20) + (hours.value * 50);
  totalPayment += passengerCost;
  document.getElementById("payment").innerHTML = "$" + totalPayment;
}

// adds/subtracts cost of discovery flight from total payment
function toggleDiscovery() {
  (document.getElementById("discovery").checked === false) ? totalPayment -= 100 : totalPayment += 100;
	 document.getElementById("payment").innerHTML = "$" + totalPayment;
}

// adds/subtracts cost of adventure flight from total payment
function toggleAdventure() {
  (document.getElementById("adventure").checked === false) ? totalPayment -= 50 : totalPayment += 50;
	 document.getElementById("payment").innerHTML = "$" + totalPayment;
}

// resets variables when page is refreshed
function resetForm() { 
  document.getElementById("passengernum").value = 0; 
  document.getElementById("flighthrs").value = 1; 
  document.getElementById("discovery").checked = discoveryFlight; 
  document.getElementById("adventure").checked = adventureFlight; 
  calcPassengersAndHours();
  createEventListeners();
} 

// creates event listeners
function createEventListeners() {
  document.getElementById("passengernum").addEventListener("change", calcPassengersAndHours, false); 
  document.getElementById("flighthrs").addEventListener("change", calcPassengersAndHours, false);
  document.getElementById("discovery").addEventListener("change", toggleDiscovery, false);
	document.getElementById("adventure").addEventListener("change", toggleAdventure, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);