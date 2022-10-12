const adressbtn = document.querySelector('#adress-from')
const closedd=document.querySelector('#close')
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-from').style.display="flex"
})

closedd.addEventListener("click",function(){
    document.querySelector('.adress-from').style.display="none"
})
//------------------------------slide-------------------------------
const rightbtn=document.querySelector('.fa-chevron-right')
const leftbtn=document.querySelector('.fa-chevron-left')
const imgnuber=document.querySelectorAll('.slide-content-left-top img')
console.log(rightbtn)
let index=0
rightbtn.addEventListener("click",function(){
    index=index+1
    if(index>imgnuber.length-1){
        index=0
    }
    document.querySelector(".slide-content-left-top").style.right =index*100+"%"
})

leftbtn.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index=imgnuber.length-1
    }
    document.querySelector(".slide-content-left-top").style.right =index*100+"%"
})

//------------------------slide1-------------------------------------

const imgnuberLi = document.querySelectorAll('.slide-content-left-bottom li')
imgnuberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removactive()
        document.querySelector(".slide-content-left-top").style.right =index*100+"%"
        image.classList.add("active")
    })
})

function removactive(){
    let imageactive=document.querySelector('.active')
    imageactive.classList.remove("active")
}

//-------------------------slider-product------------------------------
const rightbtntwo=document.querySelector('.fa-chevron-right-two')
const leftbtntwo=document.querySelector('.fa-chevron-left-two')
const imgnubertow=document.querySelectorAll('.slider-product-one-content-items')
console.log(rightbtntwo)
rightbtntwo.addEventListener("click",function(){
    index=index+1
    if(index>imgnubertow.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-2").style.right =index*100+"%"
})

leftbtntwo.addEventListener("click",function(){
    index=index-1
    if(index<=0){
        index=imgnubertow.length-1
    }
    document.querySelector(".slider-product-one-content-items-2").style.right =index*100+"%"
})