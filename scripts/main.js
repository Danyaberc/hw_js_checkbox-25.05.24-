//form//---------------------
let formEl = document.querySelector('.main__form');
let btnSubm = document.querySelector('.subm')
// ------------------------------

// Message condition------------------
let msgEr = document.querySelector('.message__error')
let msgDone = document.querySelector('.message__done')
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


// let arr= [];

// let inputsArr = [nameUser,surName,dateBirth,adress,checkbox]
// console.log('inputs',inputsArr)

formEl.addEventListener('submit',(ev) =>{
    ev.preventDefault();
    
    const formData = new FormData(ev.target);
    // const info = `${formData.get('firstName')} ${formData.get('surname')} ${formData.get('datebirth')} ${formData.get('adress')} ${formData.get('agree__user')}`;
    let infoArr = [
        formData.get('firstName'),
        formData.get('surname'),
        formData.get('datebirth'),
        formData.get('adress'),
    ];

    let checkDone = true;

    let checkInp = infoArr.forEach(input => {
        if(input === null || input.trim() === "" || input === 0 || onCheckbox.checked === false){
            checkDone = false;
            msgEr.innerHTML = 'Онови дані ухилянт'
            msgDone.innerHTML = ''
        }else if(checkDone && onCheckbox.checked === true){
            msgDone.innerHTML = 'Дані оновлено'
            msgEr.innerHTML = ''
            console.log(onCheckbox.checked)
        }
    })


    // let newInfo = info.split('')
    // console.log(newInfo)

    // let newInfoArr = newInfo.map(input => input.value);
    // console.log(newInfoArr)


    // if(newInfoArr.innerHTML === "" || 0 || null){
    //     msgEr.innerHTML = 'Онови дані ухилянт'
    // }else{
    //     msgDone.innerHTML = 'Дані оновлено'
    // }
    
    // info.forEach(input =>{
    //     if(input === ""){
    //         msgEr.innerHTML = 'Онови дані ухилянт'
    //     }else{
    //         msgDone.innerHTML = 'Дані оновлено'
    //     }
    // })
    // msgDone.innerHTML = info;


});




