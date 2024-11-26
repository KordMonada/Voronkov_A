function submitForm() {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pets = document.getElementById('pets').value.trim();

    if (!name || !dob || !phone || !pets) {
        alert("Пожалуйста, заполните все поля!");
        return false;
    }

    const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    if (!dob.match(dobPattern)) {
        alert("Неверный формат даты рождения! Используйте формат ДД.ММ.ГГГГ.");
        return false;
    }

    const phonePattern = /^\+?[\d\s\-()]+$/;
    if (!phone.match(phonePattern)) {
        alert("Неверный номер телефона!");
        return false;
    }

    alert(`Форма отправлена!
Имя: ${name}
Дата рождения: ${dob}
Телефон: ${phone}
Домашних животных: ${pets}`);
    return true;
}

function submitCallbackForm() {
    const form = document.getElementById('callbackForm');
    if (!form.checkValidity()) {
        alert("Пожалуйста, заполните все поля корректно!");
        return false;
    }

    alert("Форма успешно отправлена!");
    return true;
}

document.getElementById('callbackForm').onsubmit = function(event) {
    var form = event.target;
    if (!form.checkValidity()) {
        alert("Пожалуйста, заполните все поля корректно!");
        event.preventDefault();
    }
};

document.querySelector('.btn1').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'green'; 
});
document.querySelector('.btn1').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'rgb(221, 221, 31)'; 
});

document.querySelector('.header-img').addEventListener('mouseenter', function() {
    this.style.transition = 'transform 0.5s ease-in-out';
    this.style.transform = 'rotate(360deg)';  
});
document.querySelector('.header-img').addEventListener('mouseleave', function() {
    this.style.transform = 'rotate(0deg)';  
});
