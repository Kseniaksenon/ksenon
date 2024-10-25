function handleFormSubmit() {
    // Получаем значения полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const interests = [];
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;

    // Собираем выбранные интересы
    document.querySelectorAll('input[name="interest"]:checked').forEach((interest) => {
        interests.push(interest.value);
    });

    // Регулярные выражения для проверки
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/; // Имя: буквы и пробелы
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Электронная почта: стандартный формат
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Пароль: минимум 8 символов, одна заглавная буква, одна цифра

    // Проверка имени
    if (!nameRegex.test(name)) {
        alert('Имя должно содержать только буквы и пробелы.');
        return false;
    }

    // Проверка электронной почты
    if (!emailRegex.test(email)) {
        alert('Введите корректный адрес электронной почты.');
        return false;
    }

    // Проверка пароля
    if (!passwordRegex.test(password)) {
        alert('Пароль должен содержать минимум 8 символов, включая хотя бы одну заглавную букву и одну цифру.');
        return false;
    }

    // Если все проверки пройдены, выводим данные в блок #output
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Данные пользователя:</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Электронная почта:</strong> ${email}</p>
        <p><strong>Пароль:</strong> ${'*'.repeat(password.length)}</p>
        <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(', ') : 'Не указаны'}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Город:</strong> ${city}</p>
    `;

    // Предотвращаем отправку формы, чтобы страница не перезагружалась
    return false;
}

