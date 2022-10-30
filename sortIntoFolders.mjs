import fs from "fs/promises";

const photosFolderPath = "./photos";
const sortedFolderPath = "./sorted";

// get an array with all file names of our photos
const fileNames = await fs.readdir(photosFolderPath);

// lookup object to match the correct name of the month
const months = {
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
for (const fileName of fileNames) {
  // extract the date from the file name
  const date = fileName
    .split("_")
    .filter((substring) => substring.length === 8)
    .join();

  // extract the year and the month from the date string
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);

  // create the new date folder name using the lookup object
  const dateFolderName = `${year} ${months[month]}`;

  // Check if we already have a folder for the date of the photo. If not, create one.
  try {
    await fs.access(`${sortedFolderPath}/${dateFolderName}`);
  } catch {
    await fs.mkdir(`${sortedFolderPath}/${dateFolderName}`);
  }

  // move all photos into their new home
  await fs.rename(
    `${photosFolderPath}/${fileName}`,
    `${sortedFolderPath}/${dateFolderName}/${fileName}`
  );
}
