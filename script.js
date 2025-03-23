const title = ["Why Are Your Yoga?","Why Are Your Group?","Why Are Your Solo?","Why Are Your Stretching",] //liseteleme kısmı 
const img = ["./resimler/Resimler/yoga.jpg","./resimler/Resimler/group.webp","./resimler/Resimler/solo.jpg","./resimler/Resimler/stret.webp",]
const secTitle = ["When Comes Yoga Your Time.","When Comes Group Your Time.","When Comes Solo Your Time.","When Comes Stretching Your Time.",]

function changecontent(index, clickedbutton){ // listelenen elemenalar burada çağırılıyor

    document.getElementById("classes-title").textContent = title[index];

    document.getElementById("classes-sec-title").textContent = secTitle[index];

    document.getElementById("classes-pic").src = img[index];
     
    document.querySelectorAll(".btn").forEach(button=>{  //button ayarları
    button.classList.remove("active");
    });
    clickedbutton.classList.add("active");
}

function calculateBMI(){  // bmi calculator kısmı
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");

    let height = parseFloat(heightInput.value) / 100; 
    let weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) { // bmi kilo hesaplama kısmı
        alert("Lütfen geçerli bir boy ve kilo girin!");
        return;
    }
    let bmi = weight / (height * height);
    console.log("Hesaplanan BMI:", bmi);

    let position = 0;

    if (bmi < 18.5) {
        position = 15; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        position = 32; 
    } else if (bmi >= 25 && bmi < 29.9) {
        position = 47;
    } else if (bmi >= 30 && bmi < 34.9) {
        position = 62;
    }else {
        position = 76; 
    }
    document.getElementById("bmi-arrow").style.left = position + "%"; 
}

document.addEventListener("keydown", function (event) { //hesaplama yapılınca enter tuşuna basınca çalışmasını sağlayan kısım
    if (event.key === "Enter") {
        event.preventDefault(); 
        calculateBMI();
    }
});

window.onscroll = function () { // scroll ayarları kısmı navbar için header için 
    var navbar = document.getElementById("header");
    if (!navbar) return; 
    var viewportHeight = window.innerHeight; 

    var scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition); 
    if (scrollPosition >= viewportHeight) { 
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}

function hambDisplay(show){ // hamburger yapısı kısmı 
    const navbarTel = document.getElementById("navbar-tel");
    const hamburger = document.getElementById("hamburger");
    navbarTel.classList.toggle('active');
    navbarTel.classList.toggle('hidden');

    if(show){
        
        hamburger.setAttribute("onclick", "hambDisplay(false)");
    } else {
        
        hamburger.setAttribute("onclick", "hambDisplay(true)");
    }
    
}


