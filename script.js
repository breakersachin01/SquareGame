let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

//1)style on box-1:  print random number after moved mouse on it.
s1.addEventListener("mouseenter",function(){              //mouseenter == mousemove
    let r = Math.floor(Math.random()*100);
    s1.innerHTML= `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){              
    s1.innerHTML= `<h1>1</h1>`;
});

//2)style on box-2:  print different different color in it.
let clr = "red";
s2.addEventListener("mouseenter",function(){              //mouseenter == mousemove
    if(clr=="red"){
        s2.style.backgroundColor = "green";
        clr = "green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor = "blue";
        clr = "blue";
    }
    else{
        s2.style.backgroundColor = "red";
        clr = "red";
    }
});
s2.addEventListener("mouseleave",function(){              
    s2.style.backgroundColor = "white";
});


//3)style on box-3:  show random colors.
//rgb(a, b, c) where a, b, c lies btw 0 to 255

s3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${a},${b},${c})`;
});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
});


//4)style on box-4:  after clicked change color of rest three boxes.

s4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    // //Random color of each box:--
    s1.style.backgroundColor =`rgb(${a}, ${b}, ${c})`;
    s2.style.backgroundColor = `rgb(${c}, ${a}, ${b})`;
    s3.style.backgroundColor = `rgb(${b}, ${c}, ${a})`;

    // //for family color of each box:--
    // s1.style.backgroundColor =`rgb(${a}, 255, 255)`;
    // s2.style.backgroundColor = `rgb(255, ${b}, 255)`;
    // s3.style.backgroundColor = `rgb(255, 255, ${c})`;
});
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white"; 
});