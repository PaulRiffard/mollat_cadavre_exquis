const home = document.getElementById('home')
const stepOne = document.getElementById('step1')
const stepTwo = document.getElementById('step2')
const stepThree = document.getElementById('step3')
const stepFour = document.getElementById('step4')
const confirm = document.getElementById('confirm')
const subject= {
    value:"",
    mail:"",
    name:""
}

const verb = {
    value:"",
    mail:"",
    name:""
}

const cod = {
    value:"",
    name:"",
    mail:""
}

const ccm = {
    value:"",
    name:"",
    mail:""
}


function changeStep(step){
   
    if(step == 1 ){
        home.classList.add('disabled')
        stepOne.classList.remove('disabled')
    }else if(step == 2){
        subject.value = document.getElementById('subject').value
        subject.mail = document.getElementById('mail_subject').value
        subject.name = document.getElementById('name_subject').value
        stepOne.classList.add('disabled')
        stepTwo.classList.remove('disabled')
    }else if(step == 3){
        verb.value = document.getElementById('verb').value
        verb.mail = document.getElementById('mail_verb').value
        verb.name = document.getElementById('name_verb').value
        stepTwo.classList.add('disabled')
        stepThree.classList.remove('disabled')
    } else if(step == 4){
        cod.value = document.getElementById('cod').value
        cod.mail = document.getElementById('mail_cod').value
        cod.name = document.getElementById('name_cod').value
        stepThree.classList.add('disabled')
        stepFour.classList.remove('disabled')
    } else if(step == 5){
        ccm.value = document.getElementById('ccm').value
        ccm.mail = document.getElementById('mail_ccm').value
        ccm.name = document.getElementById('name_ccm').value
        stepFour.classList.add('disabled')
        confirm.classList.remove('disabled')
    } 
}


  

