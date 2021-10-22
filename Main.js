Webcam.set({
    width:350,
    height:300,
    Image_format:"jpg",
    jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='Capture_image' src='"+data_uri+"'>";
    });
}
);
console.log("ml5 version:",ml5.version);
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0RoCrhDwj/model.json',modelLoaded);


function modelLoaded(){
console.log('model Loaded');

}
function check(){

img=document.getElementById("Capture_image");
classifier.classify(img,gotResult);
}
function gotResult(error,result){
if(error){
    console.error(error);
    
}
else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_Accuracy").innerHTML=result[0].confidence.toFixed(3);
}

}