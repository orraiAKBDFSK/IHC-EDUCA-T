const courses = [
    {
        title: "AWS Certified solutions Architect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "$89",
        instructor: "Lina",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400"
    },
    {
        title: "AWS Certified solutions Architect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "$89",
        instructor: "Lina",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400"
    },
    {
        title: "AWS Certified solutions Architect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "$89",
        instructor: "Lina",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
    },
    {
        title: "AWS Certified solutions Architect",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        price: "$89",
        instructor: "Lina",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400"
    }
];

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-content">
                <div class="course-name">${course.title}</div>
                <div class="course-description">${course.description}</div>
                <div class="course-footer">
                    <span class="course-instructor">👤 ${course.instructor}</span>
                    <span class="course-price">${course.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    
    const saveBtn = document.querySelector('.btn-save');
    saveBtn.addEventListener('click', saveProfile);
});

function saveProfile() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const timezone = document.getElementById('timezone').value;

    if (nombre && apellido && email) {
        alert(`Perfil guardado exitosamente:\n\nNombre: ${nombre} ${apellido}\nEmail: ${email}\nZona horaria: ${timezone || 'No especificada'}`);
    } else {
        alert('Por favor completa al menos el nombre, apellido y correo electrónico');
    }
}