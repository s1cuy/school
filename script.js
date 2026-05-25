const scheduleData = {
    music: [
        { subject: "Фортепиано", day: "Пн, Чт", time: "15:00" },
        { subject: "Вокал", day: "Вт, Пт", time: "17:30" }
    ],
    art: [
        { subject: "Натюрморт", day: "Ср", time: "16:00" },
        { subject: "Масло", day: "Сб", time: "11:00" }
    ],
};

function renderSchedule(category) {
    const container = document.getElementById("schedule-container");
    const data = scheduleData[category];

    let html = `
        <table class="fade-in">
            <tr>
                <th>Направление</th>
                <th>Дни</th>
                <th>Время</th>
            </tr>`;

    data.forEach(item => {
        html += `
            <tr>
                <td>${item.subject}</td>
                <td>${item.day}</td>
                <td>${item.time}</td>
            </tr>`;
    });

    html += `</table>`;
    container.innerHTML = html;
}

const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(button => {
    button.addEventListener("click", () => {
        // Удаляем активный класс у всех и добавляем нажатой кнопке
        tabs.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Получаем категорию из data-атрибута и обновляем таблицу
        const category = button.getAttribute("data-target");
        renderSchedule(category);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    renderSchedule("music");
});