
//1.Declare and initialize the following variables for our space shuttle

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true ;
let shuttleCabinReady   = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

//2. Examine the code below. What will be printed to the console?

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }

 //3.Write conditional expressions to satisfy the safety rules.

 //a.crewStatus

 if (crewStatus === true){
   console.log("Crew Ready");
 }
   else { console.log("Crew Not Ready");
 }

// b.computerStatusCode

if (computerStatusCode === 200){
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400){
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

//c. shuttleSpeed 

if(shuttleSpeed > 17500){
   console.log("ALERT: Escape velocity reached!");
}else if(shuttleSpeed < 8000){
   console.log("ALERT: Cannot maintain orbit!");
}else{
   console.log("Stable speed");
}

//4.PREDICT

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}
 

// 5.Monitor the shuttle’s fuel status.

let fuelLevel = 25000;
let engineTemperature = 2500;
//let engineIndicatorLight = "Not red blinking";

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature >2500){
   console.log("Check fuel level. Engines running hot.");
} else if(fuelLevel >20000 &&  engineTemperature <= 2500) {
   console.log("Full tank. Engines good.");
} else if (fuelLevel >10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.")
} else if (fuelLevel > 5000 &&  engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
} else {
   console.log("Fuel and engine status pending…");
} 

// 6.Final bit of fun!

//Create the variable commandOverride, and set it to be true or false. 
let commandOverride = true;
if (commandOverride = false){
   console.log(" the shuttle should only launch if the fuel and engine check are OK");
} else{
   console.log("the shuttle will launch regardless of the fuel and engine status.");
}

//Code the following if / else check:


 if (fuelLevel > 20000 && engineIndicatorLight === "NOT red blinking" || commandOverride === true ) {
   console.log("Cleared to launch!");
 }else {
   console.log("Launch scrubbed!");
 }











