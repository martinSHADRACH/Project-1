let b=document.getElementById("background")
b.addEventListener("mouseover",()=>{
    b.style.cssText="filter:blur(0px);transition:0.5s ease";         
})
b.addEventListener("mouseout",()=>{
    b.style.cssText="filter:blur(8px);transition:0.5s ease";         
})
// let option=document.getElementsByClassName("opt")
// option[0].addEventListener("mouseover",()=>{
//     let int=document.getElementsByClassName("internal1")
//     int[0].style.cssText="visibility:visible"
//     int[1].style.cssText="visibility:visible"
// })
// option[0].addEventListener("mouseover",()=>{
//     let int=document.getElementsByClassName("internal1")
//     int[0].style.cssText="visibility:hidden"
//     int[1].style.cssText="visibility:hidden"
// })
let logo=document.getElementById("logo")
logo.addEventListener("mouseover",()=>{
    logo.style.cssText="font-size: 37px; color: #080202;background-color: azure;transition: 1s;border-radius: 4px;position:relative;"
})
logo.addEventListener("mouseout",()=>{
    logo.style.cssText="text-decoration: none; font-size: 33px; color: #E893CF; font-family: 'Poppins', sans-serif;transition: 0.8s;position:static;"
})
let btn=document.querySelector("button")
 var imgc=1;
btn.addEventListener("click",()=>{
    btn.style.cssText="transition: 0.1s;background-color: #E893CF; position: absolute;top: 10rem;" 
    if(imgc==1){
        document.getElementById("sample").src="./ash.jpg";
        document.getElementById("pdetails").innerText="Born in the unforgiving Frontier, Dr. Ashleigh Reid - still very much a human - learned early that the only person who was going to look out for her was herself.";
        imgc++;
    }else if(imgc==2){
        document.getElementById("sample").src="./caustic.jpg";
        document.getElementById("pdetails").innerText="Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs, the Frontier’s leading manufacturer of pesticide gases.";
        imgc++;
    }
    else if(imgc==3){
        document.getElementById("sample").src="./horizon.jpg";
        document.getElementById("pdetails").innerText="Gravitational Manipulator Almost a century ago, the Outlands were dangling on the edge of a cataclysmic energy crisis.";
        imgc++;
    }
    else if(imgc==4){
        document.getElementById("sample").src="./octane.jpg";
        document.getElementById("sample").style.cssText="transition:1s;"
        document.getElementById("pdetails").innerText=" Son of the preoccupied CEO of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over.";
        imgc++;
    }
    else if(imgc==5){
        document.getElementById("sample").src="./wraith.jpg";
        document.getElementById("pdetails").innerText="Wraith is a whirlwind fighter, able to execute deadly attacks and manipulate spacetime by opening rifts in the fabric of reality — but those abilities came at a price.";
        imgc=1;
    }
    setTimeout(()=>{
        btn.style.cssText="transition: 0.1s;background-color: #F4E0B9E893CF;"
    },100)
   
})