const fs = require("fs");

const getNotes = (): Promise<string | null> => {
  return new Promise(async (resolve) => {
    try {
      // let notes = [];
      let notes = '';
      const cachedNotes = localStorage.getItem("notes");

      if (cachedNotes) {
        // notes = JSON.parse(cachedNotes);
        notes = cachedNotes;

        // resolve(notes);
      } else {
        // no previously stored data, get from the file (or from DB in real environment)
        // const notes = await fs.promises.readFile('./mocks/notes.json', {encoding: 'utf8'});
        notes = await fs.promises.readFile('./mocks/notes.json', {encoding: 'utf8'});

        // Cache results locally (of course, the local storage won't be used in production)
        // localStorage.setItem("notes", JSON.stringify(notes));

        localStorage.setItem("notes", notes);

        // return resolve(JSON.parse(notes));
        // return resolve(JSON.parse(notes));
      }
      return resolve(notes);

    } catch {
      resolve(null);
    }
  });
};

export = getNotes;
