import fs from "fs/promises";

const folderPath = "./photos";

const fileNames = await fs.readdir(folderPath);

for (const fileName of fileNames) {
  const photoMetaData = await fs.stat(folderPath + "/" + fileName);
  console.log(photoMetaData);
}
