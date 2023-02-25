
const range = document.createRange();
const linkP1Css = range.createContextualFragment(`<link rel="stylesheet" href="css/page1.css">`).querySelector('link');
const linkP2Css = range.createContextualFragment(`<link rel="stylesheet" href="css/page2.css">`).querySelector('link');
const linkP3Css = range.createContextualFragment(`<link rel="stylesheet" href="css/page3.css">`).querySelector('link');
const linkP4Css = range.createContextualFragment(`<link rel="stylesheet" href="css/page4.css">`).querySelector('link');
const linkP5Css = range.createContextualFragment(`<link rel="stylesheet" href="css/page5.css">`).querySelector('link');


const page1 = document.createElement("div");
page1.classList.add("page1");
page1.innerHTML=`
    <h2>Personal info</h2>
    <p>please provide your name, email address, and phone number.</p>
    <div>
        <div>
            <label for="username">Name</label>
            <input type="text" name=""  id="username"   placeholder="e.g. Stephen King" maxlength="15">
        </div>
        <div>
            <label for="useremail">Email Address</label>
            <input type="email" name="" id="useremail"   placeholder="e.g. stephenking@lorem.com">
        </div>
        <div>
            <label for="userphone">Phone Number</label>
            <input type="text" name=""  id="userphone"   placeholder="e.g. +1 234 567 890" maxlength="16">
        </div>
    </div>
`;
const page2 = document.createElement("div");
page2.classList.add("page2");
page2.innerHTML = `
<h2>Select your plan</h2>
<p>you have the option of montly or yearly billing.</p>
<div class="first">
    <div>
        <img src="images/icon-arcade.svg" alt="">
        <div>
            <h5>Arcarde</h5>
            <span class="arcarde">$9/mo</span>
        </div>
    </div>
    <div>
        <img src="images/icon-advanced.svg" alt="">
        <div>
            <h5>Advanced</h5>
            <span class="advanced">$12/mo</span>
        </div>
    </div>
    <div>
        <img src="images/icon-pro.svg" alt="">
        <div>
            <h5>Pro</h5>
            <span class="pro">$15/mo</span>
        </div>
    </div>
</div> 
    <div class="last">
        <span class="month active">Monthly</span>
        <div>
            <div></div>
        </div>
        <span class="year">Yearly</span>
    </div>
`;

const page3 = document.createElement("div");
page3.classList.add("page3");
page3.innerHTML = `
<h2>Pick add-ons</h2>
<p>Add-ons help enhance your gaming experience.</p>
<div>
<label for="Ons" data-exp="Online service">
    <input type="checkbox" name="" id="Ons">
    <div>
        <h5>Online service</h5>
        <p>Access to Multiplayer games</p>
    </div>
    <span>+$1/mo</span>
</label>
<label for="Lst" data-exp="Larger storage">
    <input type="checkbox" name="" id="Lst">
    <div>
        <h5>Larger storage</h5>
        <p>Ectra 1TB of save</p>
    </div>
    <span>+$2/mo</span>
</label>
<label for="Cp" data-exp="Customizable profile">
    <input type="checkbox" name="" id="Cp">
    <div>
        <h5>Customizable profile</h5>
        <p>Custom them on your profile</p>
    </div>
    <span>+$2/mo</span>
</label>
</div>
`;

let pga4String =`
  <div class="information">
       <div>
            <p>change</p>
       </div>          
  </div>
`;

const  page4 = document.createElement("div");
page4.classList.add("page4");
page4.innerHTML = pga4String;

const page5 = document.createElement("div");
page5.classList.add("page5");
page5.innerHTML=`
     <div>
        <div></div>
     </div>
     <h1>Thank you!</h1>
     <p>Tanks for confirming your subscription!
      we hope you have fun using our platorm.
      if you ever need support, please feel free to email us at
      support@loremgaming.com</p>
`;

const asideNumber = document.querySelectorAll(".container aside > div > div:first-child");
let pageNumber = 1 ; 
const section = document.querySelector(".container section");
window.onload = ()=>{
    section.prepend(page1);
    document.head.appendChild(linkP1Css);
};

let nextStep = document.getElementById("button");
let goBack = document.querySelector(".container section footer span");

const array=[9,12,15];
const array1=[1,2,2];

let userinfo=new Map();
let userChoice=[];
let map = new Map();
let moyr="month";
goBack.onclick = ()=>{
    pageNumber--;
    asidePage(asideNumber, pageNumber);
    step();
};
const observer = new MutationObserver((mutations)=>{
    mutations.forEach(e=>{
        for(let ele of e.addedNodes) {
            if (e.addedNodes['0'].nodeType === Node.ELEMENT_NODE) {
                let classe = e.addedNodes['0'].getAttribute("class");
                switch (classe) {
                    case "page2": {
                        let spans = document.querySelectorAll(".container section .page2 > .first > div > div > span");
                        let divs = document.querySelectorAll(".container section .page2 > .first > div");
                        divs.forEach(e =>{
                            e.addEventListener('click', () => {
                                divs.forEach(ele => {
                                    e.classList.remove("choice");
                                    ele.style.backgroundColor = "var(--White)";
                                    ele.style.borderColor = "var(--Light_gray)";
                                });
                                e.style.backgroundColor = "var(--Light_blue)";
                                e.style.borderColor = "var(--Purplish_blue)";
                                e.classList.add("choice");
                            });
                        });
                        let change = document.querySelector(".container section .page2 > .last > div");
                        let monOryear = document.querySelectorAll(".container section .page2 > .last > span");
                        change.onclick=()=>{
                            SwitchButton(monOryear, change, spans);
                        };
                        monOryear.forEach((e) => {
                            e.onclick = ()=>{
                                if(!e.classList.contains("active"))
                                    SwitchButton(monOryear, change, spans);
                            };
                        });
                    }
                        break;
                    case "page3": {
                        let checkbox = document.querySelectorAll(".container section > div > div > label");
                        let selectSpans = document.querySelectorAll(".container section > div > div > label> span");
                        monYear(moyr, selectSpans, array1, false);
                        checkbox.forEach(e=>{
                            e.firstElementChild.addEventListener("change", function() {
                                if (e.firstElementChild.checked) {
                                    e.style.backgroundColor ="var(--Pastel_blue)";
                                } else {
                                    map.delete(e.getAttribute("data-exp"));
                                    e.style.backgroundColor = "var(--White)";
                                }
                            });
                        });
                    }
                        break;
                    case "page4":{
                        let priceTotal=+userChoice[1].match(/\d{1,3}/g);
                        creatDivAndP(page4.firstElementChild.firstElementChild, `${userChoice[0]} ${moyr==='month'?'(Monthly)':'(Yearly)'}`, userChoice[1] ,"price bold");
                        if(map.get("Online service")!== undefined){
                            creatDivAndP(page4.firstElementChild, "Online service", map.get("Online service"),'price');
                            priceTotal+= +map.get("Online service").match(/\d{1,3}/g);
                        }
                        if(map.get("Larger storage")!== undefined){
                            creatDivAndP(page4.firstElementChild, "Larger storage", map.get("Larger storage"), 'price');
                            priceTotal+= +map.get("Larger storage").match(/\d{1,3}/g);
                        }
                        if(map.get("Customizable profile")!== undefined){
                            creatDivAndP(page4.firstElementChild, "Customizable profile", map.get("Customizable profile"), 'price');
                            priceTotal+= +map.get("Customizable profile").match(/\d{1,3}/g);
                        }
                        let priceMessage = `$${priceTotal}/${moyr==='month'?'mo':'yr'}`;
                        creatDivAndP(page4.firstElementChild,`Total${moyr==='month'?'(per month)':'(per year)'}`,priceMessage);
                        document.querySelector(".container section footer button").textContent = "Confirm";
                        document.querySelector('.container section .page4 .information > div:first-child > p:last-child').onclick =()=>{
                            pageNumber=2;
                            section.firstChild.remove();
                            document.head.lastChild.remove();
                            section.prepend(page2);
                            document.head.appendChild(linkP2Css);
                        };
                    }
                        break;
                    case "page5":{
                        document.querySelector(".container section footer").remove();
                    }
                        break;
                }
            }
        }
    });
});

observer.observe(section, {
    childList: true,
    subtree: true
});
nextStep.addEventListener("click", () => {
    let sectionFirstChild = section.firstElementChild;
    switch (sectionFirstChild.getAttribute("class")){
        case "page1":{
            let name = document.getElementById("username");
            let email = document.getElementById("useremail");
            let phone = document.getElementById("userphone");
            let inputs = [name, email, phone];
                let validName = /\w+\s\w+/.test(name.value);
                let validEmail = /\w+@\w+(.com)$/.test(email.value);
                let validphone = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/.test(phone.value);
                if (validName === false && !name.hasAttribute("invalid")) {
                    noValidate(name, "Incorrect Name");
                }
                if (validEmail === false && !email.hasAttribute("invalid")) {
                    noValidate(email, "Invalid Email");
                }
                if (validphone === false && !phone.hasAttribute("invalid")) {
                    noValidate(phone, "Invalid Phone number");
                }
                if (validName===true && validEmail===true && validphone===true) {
                    userinfo.set('name',name.value);
                    userinfo.set('email',email.value);
                    userinfo.set('phone',phone.value);
                    pageNumber++;
                    asidePage(asideNumber, pageNumber);
                    step();
                }
            inputs.forEach(e => {
                e.onclick = () => {
                    if (e.hasAttribute("invalid")) {
                        removeInvalidMessage(e);
                    }
                }
            });
        }
            break;
        case "page2":{
            let ch= document.querySelectorAll(".container section > .page2 > .first  > div");
            ch.forEach(e=>{
                if(e.classList.contains("choice"))
                    userChoice= e.textContent.match(/(\w+|\$\d{1,3}\/\w{2})/g).join(' ').split(' ',2);
            });
            if(userChoice.length!==0){    
                userinfo.set('choise',userChoice);
                moyr=(userChoice[1].match(/\w{2}$/g).join('')==='mo')?'month':'year';
                pageNumber++;
                asidePage(asideNumber, pageNumber);
                step();
            }
        }
            break ;
        case "page3":{
            let checked = document.querySelectorAll(".container section > div > div > label");
            checked.forEach(e=>{
                    if (e.firstElementChild.checked) {
                        map.set(e.getAttribute("data-exp") , e.lastElementChild.textContent);
                    }
            });
            if(map.size !==0){
                userinfo.set('check',map);
                pageNumber++;
                asidePage(asideNumber, pageNumber);
                step();
            }
        }
            break;
        case "page4":{
                pageNumber++;
                step();
        }
            break;
    }
});
    
function step(){
    section.firstChild.remove();
        document.head.lastChild.remove();
        switch (pageNumber) {
            case 1:{
                section.prepend(page1);
                document.head.appendChild(linkP1Css);
            }
                break;
            case 2:{
                section.prepend(page2);
                document.head.appendChild(linkP2Css);
            }
            break;
            case 3:{
                section.prepend(page3);
                document.head.appendChild(linkP3Css);
            }
                break;
            case 4:{
                page4.innerHTML = pga4String;
                section.prepend(page4);
                document.head.appendChild(linkP4Css);
            }
                break;
            case 5:{
                section.prepend(page5);
                document.head.appendChild(linkP5Css);
            }
                break;
            default:
                break;
        }
}
function noValidate(ele, text){
    ele.parentElement.style.position = "relative";
    ele.setAttribute("invalid","");
    ele.style.border = "1px solid red";
    let div = document.createElement("div");
    div.textContent = text ;
    div.style.cssText=`
        width: fit-content;
        height:fit-content;
        position: absolute;
        top: 5px;
        right:0; 
        color: red;
        font-size: 14px ;
    `;
    ele.after(div);
}
function removeInvalidMessage(ele){
    ele.removeAttribute("invalid");
    ele.style.border = "1px solid var(--Cool_gray)";
    ele.nextElementSibling.remove();
}
function asidePage(divs,pageN){
    divs.forEach((e,ind)=>{
        if(ind+1 === pageN){
            divs.forEach(e=>e.classList.remove("active"));
            e.classList.add("active");
        }
    });
}
function SwitchButton(spans, Switch, spansPrice){
    spans.forEach(e=>{
        if(!e.classList.contains("active")) {
            e.classList.add("active");
            if(e.classList.contains("month")){
                Switch.firstElementChild.style.transform = "translateX(0)";
                monYear("month",spansPrice,array,true);
            } else{
                Switch.firstElementChild.style.transform = "translateX(30px)";
                monYear("year",spansPrice,array,true);
            }
        } else {
            e.classList.remove("active");
        }
    });
}
function monYear(monOrYear,spans,array,add){
        if(monOrYear ==="month"){
            spans.forEach((e,ind)=>{
                if(add)
                    removeElement(e.parentElement, "added");
                e.textContent = `$${array[ind]}/mo`;
            });
        } else {
            spans.forEach((e,ind)=>{
                e.textContent = `$${array[ind]*10}/yr`;
                if(!e.classList.contains("added") && add)
                    addElement(e.parentElement,"2 Month free",`color: var(--Marine_blue);font-size: 12px;font-weight:bold`);
            });
        }
}

function addElement(parent,content,style){
    let div =document.createElement("div");
    div.classList.add("added");
    div.textContent =content;
    div.style.cssText = style ;
    parent.appendChild(div);
}
function removeElement(parent,attr){
    if(parent.lastElementChild.classList.contains(attr))
        parent.lastElementChild.remove();
}

function creatDivAndP(parent, textDiv, textP, classe=""){
    let divC= document.createElement("div");
    divC.textContent= textDiv;
    let price= document.createElement("div");
    price.textContent=textP ;
   if(classe !==''){
       let arr = classe.split(' ');
       arr.forEach(e=>price.classList.add(e));
   }
    if(parent.classList.contains("information")){
        let div = document.createElement("div");
        div.prepend(price);
        div.prepend(divC);
        parent.appendChild(div);
    } else {
        parent.prepend(price);
        parent.prepend(divC);
    }
}