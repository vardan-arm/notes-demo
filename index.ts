require('./storageSetup');

const express = require('express');
import readNotes = require('./utils/readNotes');

import constantsData = require('./utils/constants');

const { HTTP_STATUSES, INITIAL_NOTES_RESPONSE_COUNT } = constantsData;
const { ok, internalServerError } = HTTP_STATUSES;

const app = express();

app.get('/api/getInitialNotes/:noteNumber?', async (req, res) => {
  const notes = await readNotes();

  // TODO: find better approach to not allow `*` for CORS
  // res.setHeader('Access-Control-Allow-Origin', '*');

  if (notes !== null) {
    const notesArr = JSON.parse(notes);
    const noteNumber = Number(req.params.noteNumber);

    // If note number is provided in request, return the note at that position.
    // Otherwise, return first `n` notes (set as constant)
    let notesChunk = [];
    if (!Number.isNaN(noteNumber)) {
      notesChunk = noteNumber < notesArr.length ? notesArr.slice(noteNumber, noteNumber + 1) : notesArr.slice(notesArr.length - 1);
    } else {
      notesChunk = notesArr.slice(0, INITIAL_NOTES_RESPONSE_COUNT);
    }

    res.status(ok.code).send({ data: notesChunk });
  } else {
    return res
      .status(internalServerError.code)
      .send({ error: internalServerError.message });
  }
});


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main css file.
  app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
