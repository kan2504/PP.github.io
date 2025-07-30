// Простая валидация формы и отправка (заглушка)
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем значения полей
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    // Простая валидация
    if(name && email && message) {
        // Здесь будет код для отправки формы (например, через fetch)
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');

        // Очищаем форму
        this.reset();
    } else {
        alert('Пожалуйста, заполните все обязательные поля.');
    }
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Учитываем высоту шапки
                behavior: 'smooth'
            });
        }
    });
});