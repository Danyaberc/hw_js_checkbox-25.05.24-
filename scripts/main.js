//form//---------------------
let formEl = document.querySelector('.main__form');
let btnSubm = document.querySelector('.subm')
// ------------------------------

// Message condition------------------
let msgEr = document.querySelector('.message__error')
let msgDone = document.querySelector('.message__done')
// ---------------------------

// INPUTS//-------------------------------
let nameUser = document.querySelector('.username')
let surName = document.querySelector('.surusername')
let dateBirth = document.querySelector('.birthday')
let adress = document.querySelector('.location')
// let select = document.querySelector('.gender--select')
let checkbox = document.querySelector('.agreesoft')
//------------------------------------------
let checkDone = true;


let arr= [];

let inputsArr = [nameUser,surName,dateBirth,adress,checkbox]
console.log('inputs',inputsArr)

formEl.addEventListener('submit',(ev) =>{
    
    ev.preventDefault();
    let valueEl = ev.target.value;
    console.log('!!!!', 3 + 3)
    
    inputsArr.forEach(input =>{
        if(!input.valueEl === ""){
            msgDone.innerHTML = 'Оновлено'
        }
        else{
            msgEr.innerHTML = 'Заповни дані'
        }
    })

});




