function Calculate() {
  const height = document.getElementById("h-input").value;
  const weight = document.getElementById("w-input").value;

  const result = parseFloat(weight) / (parseFloat(height) / 100) ** 2;
  const str = "";

  if (!isNaN(result)) {
    result = result.toFixed(2);
    str = result;

    if (result < 18.5) {
      str = str + " - Underweight";
    } else if (result < 25) {
      str = str + " - Normal Weight";
    } else if (result < 30) {
      str = str + " - Pre-obsity";
    } else if (result < 34.0) {
      str = str + " - Obesity Class I";
    } else if (result < 39.0) {
      str = str + " - Obesity Class II";
    } else {
      str = str + " - Obesity Class III";
    }

    document.getElementById("bmi-output").innerHTML = str;
  }
}
