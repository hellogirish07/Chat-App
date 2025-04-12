export const themes = {
    default: {
        bodyBackground: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(252, 70, 107, 1) 100%)",
        containerBackground: "rgba(255, 255, 255, 0.5)",
        sentMessageBackground: "rgba(252, 70, 107, 1)",
        receivedMessageBackground: "#fff",
        dropdownBackground: "#f1f1f1",
        dropdownTextColor: "#000",
        dropdownBorder: "1px solid #000",
        sendButton : "rgba(252, 70, 107, 1)",
    },

    pastelBlue: {
        bodyBackground: "linear-gradient(45deg, #a1c4fd 0%, #c2e9fb 100%)",
        // containerBackground: "rgba(255, 255, 255, 0.9)",
        containerBackground: "rgba(255, 255, 255, 0.5)",
        sentMessageBackground: "#90caf9",
        receivedMessageBackground: "#e3f2fd",
        dropdownBackground: "#bbdefb",
        dropdownTextColor: "#0d47a1",
        dropdownBorder: "1px solid #42a5f5",
        sendButton : "#90caf9",
    },

    mintGreen: {
        bodyBackground: "linear-gradient(45deg, #d4fc79 0%, #96e6a1 100%)",
        // containerBackground: "rgba(255, 255, 255, 0.8)",
        containerBackground: "rgba(255, 255, 255, 0.5)",
        sentMessageBackground: "#81c784",
        receivedMessageBackground: "#e8f5e9",
        dropdownBackground: "#c8e6c9",
        dropdownTextColor: "#1b5e20",
        dropdownBorder: "1px solid #66bb6a",
        sendButton : "#81c784",
    },

    lavender: {
        bodyBackground: "linear-gradient(45deg, #e0c3fc 0%, #8ec5fc 100%)",
        // containerBackground: "rgba(255, 255, 255, 0.9)",
        containerBackground: "rgba(255, 255, 255, 0.5)",
        sentMessageBackground: "#b39ddb",
        receivedMessageBackground: "#ede7f6",
        dropdownBackground: "#d1c4e9",
        dropdownTextColor: "#4a148c",
        dropdownBorder: "1px solid #7e57c2",
        sendButton : "#b39ddb",
    },
};

export function applyTheme(themeName) {
    const theme = themes[themeName] || themes.default;

    document.body.style.background = theme.bodyBackground;

    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) chatContainer.style.background = theme.containerBackground;

    const dropdown = document.getElementById("theme-selector");
    if (dropdown) {
        dropdown.style.background = theme.dropdownBackground;
        dropdown.style.color = theme.dropdownTextColor;
        dropdown.style.border = theme.dropdownBorder;
    }

    // Styling sent and received messages 
    const sentMessages = document.querySelectorAll("#messages li.sent");
    sentMessages.forEach((msg) => {
        msg.style.background = theme.sentMessageBackground;
    });

    const receivedMessages = document.querySelectorAll("#messages li.received");
    receivedMessages.forEach((msg) => {
        msg.style.background = theme.receivedMessageBackground;
    });

    const sendButton = document.querySelectorAll('button');
    sendButton.forEach(button => {
        button.style.background = theme.sendButton;
    });
}
