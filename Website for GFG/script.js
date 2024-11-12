// Sample event data
const events = [
    {
        title: "Coding Workshop",
        description: "Join us for a hands-on coding workshop where you can learn the basics of programming.",
        date: "2023-10-15"
    },
    {
        title: "Tech Talk: AI in 2023",
        description: "A discussion on the latest trends in Artificial Intelligence and its applications.",
        date: "2023-10-22"
    },
    {
        title: "Hackathon",
        description: "Participate in our 24-hour hackathon and showcase your skills!",
        date: "2023-11-05"
    }
];

// Function to display events
function displayEvents() {
    const eventList = document.getElementById('event-list');
    events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <button onclick="openModal(${index})">More Info</button>
        `;
        eventList.appendChild(eventDiv);
    });
}

// Function to open modal
function openModal(index) {
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    title.textContent = events[index].title;
    description.textContent = events[index].description;
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.style.display = "none";
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        this.reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});

// Event listeners for modal close
document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    const modal = document.getElementById('event-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Initialize the event list on page load
window.onload = displayEvents;