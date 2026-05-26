const scheduleData = {
    music: [
        { subject: "Фортепиано", day: "Пн, Чт", time: "15:00", teacher: "Казаков А." },
        { subject: "Вокал", day: "Вт, Пт", time: "17:30", teacher: "Петров И." },
        { subject: "Гитара", day: "Ср, Сб", time: "16:00", teacher: "Смирнов С." },
        { subject: "Музыкальная теория", day: "Пн, Ср", time: "18:00", teacher: "Казаков А." }
    ],
    art: [
        { subject: "Натюрморт", day: "Ср", time: "16:00", teacher: "Рябина К." },
        { subject: "Масло", day: "Сб", time: "11:00", teacher: "Рябина К." },
        { subject: "Акварель", day: "Вт, Пт", time: "17:00", teacher: "Рябина К." },
        { subject: "Рисунок карандашом", day: "Пн, Чт", time: "19:00", teacher: "Рябина К." }
    ],
};

function renderSchedule(category) {
    const container = document.getElementById("schedule-container");
    const data = scheduleData[category];

    let html = `
        <table>
            <tr>
                <th>Направление</th>
                <th>Дни</th>
                <th>Время</th>
                <th>Преподаватель</th>
            </tr>`;

    data.forEach(item => {
        html += `
            <tr>
                <td>${item.subject}</td>
                <td>${item.day}</td>
                <td>${item.time}</td>
                <td>${item.teacher}</td>
            </tr>`;
    });

    html += `</table>`;
    container.innerHTML = html;
}

const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(button => {
    button.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const category = button.getAttribute("data-target");
        renderSchedule(category);
    });
});

// ===== МОДАЛЬНОЕ ОКНО =====
const modal = document.getElementById("enrollModal");
const startBtn = document.getElementById("startBtn");
const closeBtn = document.querySelector(".close");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Обработка формы записи на обучение
const enrollForm = document.getElementById("enrollForm");
if (enrollForm) {
    enrollForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const formInputs = this.querySelectorAll('input, select, textarea');
        const name = formInputs[0].value;
        const email = formInputs[1].value;
        const phone = formInputs[2].value;
        const direction = formInputs[3].value;
        const level = formInputs[4].value;
        
        if (name && email && phone && direction && level) {
            alert(`Спасибо, ${name}!\n\nВаша заявка принята. Мы свяжемся с вами по номеру ${phone} в течение одного часа.`);
            this.reset();
            modal.style.display = "none";
        } else {
            alert("Пожалуйста, заполните все обязательные поля формы");
        }
    });
}

// Обработка формы контакта
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && phone && message) {
            alert(`Спасибо, ${name}!\n\nВаша заявка получена. Мы свяжемся с вами по номеру ${phone} в течение 24 часов.`);
            this.reset();
        } else {
            alert("Пожалуйста, заполните все поля формы");
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    renderSchedule("music");
    
    // Гладкий скролл при клике на ссылки якоря
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
