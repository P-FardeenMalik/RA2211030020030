require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
const API_BASE_URL = process.env.API_BASE_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    }
    next();
};

app.get("/users", authenticate, async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });

        const sortedUsers = response.data.sort((a, b) => b.posts.length - a.posts.length);
        const topUsers = sortedUsers.slice(0, 5);

        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users data" });
    }
});

app.get("/posts", authenticate, async (req, res) => {
    try {
        const { type } = req.query;
        const response = await axios.get(`${API_BASE_URL}/posts`, {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });

        let posts = response.data;

        if (type === "popular") {
            posts = posts.sort((a, b) => b.comments.length - a.comments.length);
        } else if (type === "latest") {
            posts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
        } else {
            return res.status(400).json({ error: "Invalid type parameter. Use 'latest' or 'popular'" });
        }

        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching posts data" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
