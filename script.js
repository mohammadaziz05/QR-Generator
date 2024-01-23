const qrImg = document.getElementById('qr-img')
const qrContainer = document.getElementById('qr-container')
const qrBtn = document.getElementById('qr-btn')
const inputData = document.getElementById('input-data')
const errorMsg = document.getElementById('error-msg')

qrBtn.addEventListener('click', generateQrCode)


function generateQrCode() {    
    if(inputData.value){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputData.value
        qrContainer.classList.add('show-img')
        inputData.value = '' 
    }
    else{        
        inputData.classList.add('error')
        errorMsg.textContent = 'Please enter any text or URL...'
        setTimeout(() => {
            inputData.classList.remove('error')
            errorMsg.textContent = ''
        }, 1800);
    }    
    
}

