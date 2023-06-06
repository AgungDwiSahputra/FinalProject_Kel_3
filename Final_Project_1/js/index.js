function popup(x) {
    let popup = document.getElementById('popup-'+x);

    console.log(popup);
    popup.classList.remove('hidden');
}

function popup_close(x) {
    let popup = document.getElementById('popup-'+x);
    
    console.log(popup);
    popup.classList.add('hidden');
}

function kirim_contact(x) {
    let nama_lengkap = document.getElementById('nama_lengkap').value;
    let email = document.getElementById('email').value;
    let deskripsi = document.getElementById('deskripsi').value;
    let data = {
        nama: nama_lengkap,
        email: email,
        deskripsi: deskripsi
    };

    localStorage.setItem('contact', JSON.stringify(data));
    popup_close(x);
}