let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let pesan = document.getElementById("pesan");
let saveButton = document.getElementById("saveBtn");
function genPassword(len){
    const lower_alpha = "abcdefghijklmnopqrstuvwxyz";
    const upper_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%&'()*+,-./:;<=>";

    const data = lower_alpha + upper_alpha + numeric + symbol;
    let generator = ''; 

    for(let i = 0; i < len; i++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}


function getPassword() {
    const newPass = genPassword(passwordLength.value)
    password.value = newPass;
    pesan.textContent = "Password sukses dibuat";
    setTimeout(() => {
        pesan.textContent = "";
    }, 5000);
}

const savePassword = () => {
    let pass = password.value
    
    navigator.clipboard.writeText(pass).then(() => {
        pesan.textContent = "password berhasil tercopy ke clipboard!"
        setTimeout(() => {
            pesan.textContent = "";
        }, 5000);
    }).catch(err => {
        console.error("Gagal menyalin teks: ", err);
    })
}


