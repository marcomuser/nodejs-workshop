import fs from "fs/promises";

const folderPath = "./photos/";

const photoPaths = await fs.readdir("./photos");

for (const photoPath of photoPaths) {
  const photoMetaData = await fs.stat(folderPath + photoPath);
  console.log(photoMetaData);
}
