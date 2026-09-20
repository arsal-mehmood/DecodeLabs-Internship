import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let notes = [
  {
    id: 1,
    title: "Learn Express basics",
    content: "Practice routes, requests and responses."
  },
  {
    id: 2,
    title: "Test API",
    content: "Use Postman or Thunder Client to test the endpoints."
  }
];

app.get("/", (req, res) => {
  res.json({
    message: "DecodeLabs Project 2 Notes API is running."
  });
});

app.get("/api/notes", (req, res) => {
  res.json({
    success: true,
    count: notes.length,
    data: notes
  });
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((item) => item.id === id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found."
    });
  }

  res.json({
    success: true,
    data: note
  });
});

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({
      success: false,
      message: "Title is required."
    });
  }

  if (!content || !content.trim()) {
    return res.status(400).json({
      success: false,
      message: "Content is required."
    });
  }

  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    title: title.trim(),
    content: content.trim()
  };

  notes.push(newNote);

  res.status(201).json({
    success: true,
    message: "Note created successfully.",
    data: newNote
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
