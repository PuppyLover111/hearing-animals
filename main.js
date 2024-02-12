function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vI9-phabu/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error){
        console.log(error);
    }
    else{
        console.log(results);

        r= Math.floor(Math.random()*255);
        g= Math.floor(Math.random()*255);
        b= Math.floor(Math.random()*255);

document.getElementById("resultslabel").innerHTML="I Can Hear- "+results[0].label;
document.getElementById("resultsconfident").innerHTML="Accuracy- "+(results[0].confidence *100).toFixed(2)+" %";  

document.getElementById("resultslabel").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("resultsconfident").style.color="rgb("+r+","+g+","+b+")";


img1=document.getElementById('recogniser');

if (results[0].label =="dog")
{
    img1.src = 'dog12346.png';
}

else if (results[0].label == "cat") {
    img1.src = 'cat123.jpg';

  }
  else if (results[0].label == "lion") {
    img1.src = 'lion1234.jpg';

  }

   else if (results[0].label == "cow") {
    img1.src = 'cow123.webp';

}

else{
    
  img1.src = 'bgnoise.png';
}

    }
  }