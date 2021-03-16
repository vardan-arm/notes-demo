const fs = require("fs");

const readNotes = (): Promise<string | null> => {
  return new Promise(async (resolve) => {
    try {
      let notes = '';
      const cachedNotes = localStorage.getItem("notes");

      if (cachedNotes) {
        notes = cachedNotes;
      } else {
        // no previously stored data, get from the file (or from DB in real environment)
        notes = await fs.promises.readFile('./mocks/notes.json', {encoding: 'utf8'});

        // Cache results locally (of course, the local storage won't be used in production)
        localStorage.setItem("notes", notes);
      }
      return resolve(notes);

    } catch {
      resolve(null);
    }
  });
};

export = readNotes;
