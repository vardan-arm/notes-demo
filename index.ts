require("./storageSetup");

const express = require("express");
import getNotes = require('./utils/getNotes')

import constantsData = require("./utils/constants")
const { HTTP_STATUSES, INITIAL_NOTES_RESPONSE_COUNT } = constantsData;
const { ok, internalServerError } = HTTP_STATUSES;

const app = express();

app.get("/api/getInitialNotes", async(req, res) => {
  const notes = await getNotes();

  // TODO: better approach to not allow `*` for CORS
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (notes !== null) {
    const notesArr = JSON.parse(notes);
    res.status(ok.code).send({ data: notesArr.slice(0, INITIAL_NOTES_RESPONSE_COUNT)});
  } else {
    return res
      .status(internalServerError.code)
      .send({ error: internalServerError.message });
  }
});


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main css file.
  app.use(express.static('client-side/build'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
