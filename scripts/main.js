//form//---------------------
let formEl = document.querySelector('.main__form');
let btnSubm = document.querySelector('.subm')
// ------------------------------

// Message condition------------------
let msgEr = document.querySelector('.message__error')
let msgDone = document.querySelector('.message__done')
let infoUser = document.querySelector('.info__user')
// ---------------------------

// INPUTS//-------------------------------
// let nameUser = document.querySelector('.username')
// let surName = document.querySelector('.surusername')
// let dateBirth = document.querySelector('.birthday')
// let adress = document.querySelector('.location')
// // let select = document.querySelector('.gender--select')
let onCheckbox = document.querySelector('#agreeuser')
console.log(onCheckbox.checked)
//------------------------------------------

let arr= [];

formEl.addEventListener('submit',(ev) =>{
    ev.preventDefault();
    
    const formData = new FormData(ev.target);
    // const info = `${formData.get('firstName')} ${formData.get('surname')} ${formData.get('datebirth')} ${formData.get('adress')} ${formData.get('agree__user')}`;
    // let infoArr = [
    //     formData.get('firstName'),
    //     formData.get('surname'),
    //     formData.get('datebirth'),
    //     formData.get('adress'),
    // ];

    let checkDone = true;

    let checkInp = formData.forEach(input => {
        if(input === null || input.trim() === "" || input === 0 || onCheckbox.checked === false){
            checkDone = false;
            msgEr.innerHTML = 'Онови дані ухилянт'
            msgDone.innerHTML = ''
            infoUser.innerHTML = '';
        }else if(checkDone && onCheckbox.checked === true){
            msgDone.innerHTML = 'Дані оновлено'
            msgEr.innerHTML = '';

            arr.push(input)
            infoUser.innerHTML = `Ваші поточні данні такі: ${arr}`
            console.log(arr)
            // console.log(infoArr.length)
            console.log(onCheckbox.checked)
        }
        
       
    })

});





