





function buttonClicked (bodyWeight,bodyheight,bmi) {
    var bodyWeight = document.getElementById("f-input").value;
    var bodyHeight = document.getElementById("s-input").value;
    var bmi = bodyWeight/(bodyHeight**2);
    var observation = "Good !"

    if (bmi <18){
        var observation = "Thinness";
    } else if (bmi >= 18 && bmi < 24.9){
        var observation = "Perfect weight";
    } else if (bmi >= 25 && bmi < 29.9){
        var observation = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9){
        var observation = "First degree obesity"
    } else if (bmi >= 35 && bmi < 39.9){
        var observation = "Second degree obesity"
    } else {
        observation = "Serious obesity";
    }

    document.getElementById("bmiHtml").innerHTML = bmi.toFixed(2);
    document.getElementById("obsHtml").innerHTML = observation;

    console.log(bodyWeight);
    console.log(bodyHeight);
    console.log(bmi)
}