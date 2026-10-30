const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

<<<<<<< HEAD
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// http://localhost:5001/form should return a form with input elements for username, email, and submit button
=======
// http://localhost:5001/form should return a form with input elements for username, email, comments, newsletter sign up, and submit button.
>>>>>>> bc6d9d7bb634dbf314bcf1e4a3240edc5f6c58b9

app.get("/form", (req, res) => {
  res.set({ "Content-Type": "text/html" });
  res.status(200);
  res.send(`
    <h1>User Feedback Form</h1>
    <form action="/submit" method ="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="comments">Comments:</label>
      <textarea id="comments" name="comments" rows="4" cols="30"></textarea>

      <label>
        <input type="checkbox" name="newsletter" value="Yes">
        sign up for newsletter
      </label>

      <input type="submit">
    </form>
  `);
});

// http://localhost:5001/submit should return all the data the user entered

app.post("/submit", (req, res) => {
  const user = req.body.username;
  const email = req.body.email;
  const comments = req.body.comments;
  const news = req.body.newsletter;
  res.send(`
    <h1>Submitted Data</h1>
    Username: ${user}<br>
    Email: ${email}<br>
    Comments: ${comments}<br>
    Newsletter Signup: ${news ? "Yes" : "No"}<br>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
