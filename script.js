// Add this array at the top of your JavaScript file
const motivationalImages = [
    "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
];

let currentImageIndex = 0;

function refreshImage() {
    const img = document.getElementById('motivationalImage');
    currentImageIndex = (currentImageIndex + 1) % motivationalImages.length;
    img.src = motivationalImages[currentImageIndex];
}

// Set initial image when page loads
window.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('motivationalImage');
    img.src = motivationalImages[0];
});

// Add this CSS animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes loading {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        
        #motivationalImage {
            transition: opacity 0.3s ease;
        }
    </style>
`);

// Replace your entire quote-related JavaScript with this
const quotesList = [
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        emoji: "🌟",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        text: "The future depends on what you do today.",
        emoji: "💪",
        color: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)"
    },
    {
        text: "Believe you can and you're halfway there.",
        emoji: "✨",
        color: "linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        emoji: "⏰",
        color: "linear-gradient(135deg, #06beb6 0%, #48b1bf 100%)"
    },
    {
        text: "Your time is limited, make it count!",
        emoji: "🚀",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
];

let quoteIndex = 0;

function nextQuote() {
    // Get the next quote
    quoteIndex = (quoteIndex + 1) % quotesList.length;
    const quote = quotesList[quoteIndex];
    
    // Update the elements
    document.getElementById('quoteEmoji').textContent = quote.emoji;
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('motivationCard').style.background = quote.color;
}

// Add this to ensure quotes work when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial quote
    nextQuote();
    
    // Add click event listener to the button
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', nextQuote);
    }
});

// Fix for the todo functionality
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') return;
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="complete-btn" onclick="toggleComplete(this)" title="Mark as complete">✓</button>
            <button class="delete-btn" onclick="deleteTask(this)" title="Delete task">×</button>
        </div>
    `;
    
    taskList.appendChild(li);
    input.value = '';
}

// Add task with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.closest('li');
    li.remove();
} 