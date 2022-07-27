const heightInches = 72;
const weightPounds = 204;
const heightCM = (heightInches * 2.54);
const weightKilos = (weightPounds / 2.2046);
const heightM = (heightCM / 100);
const BMI = (weightKilos / (heightM ** heightM));

console.log("Weight is " + weightPounds + " lbs\n" + "Height is " + heightInches + " in");
console.log("Weight is " + weightKilos + " kgs\n" + "Height is " + heightCM + " cm");
console.log("BMI is " + BMI);