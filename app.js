function calculate(){
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;

    let area = (base * height)/2;

    document.getElementById("result").innerHTML = "Area of Triangle is :" + area;


}
