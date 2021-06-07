prediction_1 = "";
prediction_2 = "";

Webcam.set(
{
    width: 350,
    height: 300,
    image_format: 'png',
png_quality: 90

}
);

Webcam.attach("#Camera")


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_img' src=" + data_uri +" >";
    });
};

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zE2qQUxQN/model.json", modelloaded);

function modelloaded(){
    console.log("Model Loaded")
}

function speak(){
    var snyth = window.SpeechSynthesis;
speak_data1 = "First Prediction Is " + prediction_1;
speak_data2 = " And second Prediction Is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
snyth.speak(utterThis);
}

function check() {
    img = document.getElementById('capture_img');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("Predict_1").innerHTML = results[0].label;
        document.getElementById("Predict_2").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak1();


        if (results[0].label == "Amazing") {
            document.getElementById("emoji_1").innerHTML = "&#128076;";
        
        }
        if (results[0].label == "Peace") {
            document.getElementById("emoji_1").innerHTML = "&#9996;";
        
        }
        if (results[0].label == "Good") {
            document.getElementById("emoji_1").innerHTML = "&#128077;" + "😭";
        
        }
        if (results[0].label == "Bad") {
            document.getElementById("emoji_1").innerHTML = "&#128078;";
        
        }
        if (results[0].label == "Nocking") {
            document.getElementById("emoji_1").innerHTML = "&#9994;" ;
        
        }
        if (results[0].label == "Raise Hand") {
            document.getElementById("emoji_1").innerHTML = "&#9995;";
        
        }
        if (results[0].label == "Writing") {
            document.getElementById("emoji_1").innerHTML = "&#9997;";
        
        }
        if (results[0].label == "Up") {
            document.getElementById("emoji_1").innerHTML = "&#128070;";
        
        }
        if (results[0].label == "Down") {
            document.getElementById("emoji_1").innerHTML = "&#128071;";
        
        }
        if (results[0].label == "Left") {
            document.getElementById("emoji_1").innerHTML = "&#128072;";
}
        if (results[0].label == "Right") {
            document.getElementById("emoji_1").innerHTML = "&#128073;";
        }
        if (results[0].label == "High Five") {
            document.getElementById("emoji_1").innerHTML = "&#128075;";
        }
        if (results[0].label == "Clap") {
            document.getElementById("emoji_1").innerHTML = "&#128079;";
        }




        if (results[1].label == "Amazing") {
            document.getElementById("emoji_2").innerHTML = "&#128076;";
        
        }
        if (results[1].label == "Peace") {
            document.getElementById("emoji_2").innerHTML = "&#9996;";
        
        }
        if (results[1].label == "Good") {
            document.getElementById("emoji_2").innerHTML = "&#128077;" + "😭";
        
        }
        if (results[1].label == "Bad") {
            document.getElementById("emoji_2").innerHTML = "&#128078;";
        
        }
        if (results[1].label == "Nocking") {
            document.getElementById("emoji_2").innerHTML = "&#9994;" ;
        
        }
        if (results[1].label == "Raise Hand") {
            document.getElementById("emoji_2").innerHTML = "&#9995;";
        
        }
        if (results[1].label == "Writing") {
            document.getElementById("emoji_2").innerHTML = "&#9997;";
        
        }
        if (results[1].label == "Up") {
            document.getElementById("emoji_2").innerHTML = "&#128070;";
        
        }
        if (results[1].label == "Down") {
            document.getElementById("emoji_2").innerHTML = "&#128071;";
        
        }
        if (results[1].label == "Left") {
            document.getElementById("emoji_2").innerHTML = "&#128072;";
}
        if (results[1].label == "Right") {
            document.getElementById("emoji_2").innerHTML = "&#128073;";
        }
        if (results[1].label == "High Five") {
            document.getElementById("emoji_2").innerHTML = "&#128075;";
        }
        if (results[1].label == "Clap") {
            document.getElementById("emoji_2").innerHTML = "&#128079;";
        }
    }
}