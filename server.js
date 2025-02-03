const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const emailData = [
    {
        id: 1,
        sender: "john.doe@example.com",
        recipient: "jane.smith@example.com",
        subject: "Meeting Reminder",
        date: "2024-07-27T09:00:00Z",
        status: "unread",
        priority: "high",
        size: 150
    },
    {
        id: 2,
        sender: "support@company.com",
        recipient: "john.doe@example.com",
        subject: "Your Support Ticket",
        date: "2024-07-26T14:30:00Z",
        status: "read",
        priority: "normal",
        size: 200
    },
    {
        id: 3,
        sender: "newsletter@example.com",
        recipient: "jane.smith@example.com",
        subject: "Weekly Newsletter",
        date: "2024-07-25T18:00:00Z",
        status: "read",
        priority: "low",
        size: 1024
    },
    {
        id: 4,
        sender: "admin@server.com",
        recipient: "john.doe@example.com",
        subject: "Server Alert",
        date: "2024-07-24T22:45:00Z",
        status: "unread",
        priority: "high",
        size: 50
    },
    {
        id: 5,
        sender: "sales@company.com",
        recipient: "jane.smith@example.com",
        subject: "Special Offer",
        date: "2024-07-23T11:15:00Z",
        status: "read",
        priority: "normal",
        size: 300
    }
];

app.get('/api/emails', (req, res) => {
    res.json(emailData);
});

app.listen(port, () => {
    console.log(\`Server listening at http://localhost:${port}\`);
});
