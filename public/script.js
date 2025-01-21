import { applyTheme } from './theme.js';

const socket = io();
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');
const overlay = document.getElementById('overlay');
const usernameInput = document.getElementById('username-input');
const joinButton = document.getElementById('join-chat');

let username = null;

const notificationSound = new Audio('notification.mp3');

// Join chat after entering name
joinButton.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name) {
        username = name;
        socket.emit('set username', name);
        overlay.style.display = 'none';
    }
});

// Send message to server
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', { msg: input.value, user: username });
        input.value = '';
    }
});

// Receive messages from server
socket.on('chat message', ({ msg, user }) => {
    const li = document.createElement('li');

    if (user === 'system') {
        li.textContent = msg;
        li.classList.add('system');
    } else {
        li.textContent = `${user}: ${msg}`;

        if (user === username) {
            li.classList.add('sent');
        } else {
            li.classList.add('received');
            notificationSound.play().catch((err) => {
                console.error('Notification sound failed to play:', err);
            });
        }
    }

    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
});

// Set the default theme on page load
window.onload = () => {
    applyTheme('default');
};

document.getElementById('theme-selector').addEventListener('change', (event) => {
    applyTheme(event.target.value);
});