import fs from "fs/promises";

let photosFolderPath = "./photos";
let sortedFolderPath = "./sorted";

// get an array with all file names of our photos
let fileNames = await fs.readdir(photosFolderPath);

// lookup object to match the correct name of the month
let months = {
  "01": "January",
  "02": "Feburary",
  "03": "March",
  "04": "April",
  "06": "June",
  "05": "May",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

// Check if we already have a sorted directory. IF not, create one.
try {
  await fs.access(sortedFolderPath);
} catch {
  await fs.mkdir(sortedFolderPath);
}

// loop over all file names
for (let fileName of fileNames) {
  // split filename string into chunks array
  let chunks = fileName.split("_");

  let date = "";

  // find date string in chunks array
  for (let chunk of chunks) {
    if (chunk.length === 8) {
      date = chunk;
    }
  }

  // extract the year and the month from the date string
  let year = date.slice(0, 4);
  let month = date.slice(4, 6);

  // create the new date folder name using the lookup object
  let dateFolderName = `${year} ${months[month]}`;

  // Check if we already have a folder for the date of the photo. If not, create one.
  try {
    await fs.access(`${sortedFolderPath}/${dateFolderName}`);
  } catch {
    await fs.mkdir(`${sortedFolderPath}/${dateFolderName}`);
  }

  // move photo into its new home
  await fs.rename(
    `${photosFolderPath}/${fileName}`,
    `${sortedFolderPath}/${dateFolderName}/${fileName}`
  );
}
