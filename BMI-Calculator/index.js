const form = document.getElementById("bmiForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (!isNaN(height) && !isNaN(weight)) {
    console.log(height, weight);
    const bmi = calculateBMI(height, weight);

    displayBMI(bmi);
  } else {
    alert("Please enter valid height and weight values.");
  }
});

function calculateBMI(height, weight) {
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function displayBMI(bmi) {
  const resultContainer = document.getElementById("result");
  const bmiValueElement = document.getElementById("bmiValue");

  bmiValueElement.textContent = bmi;

  resultContainer.style.display = "block";
}
