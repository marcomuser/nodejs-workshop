import fs from 'fs/promises';
let months = [
  'January',
  'Feburary',
  'March',
  'April',
  'June',
  'May',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

for (let month of months) {
  try {
    await fs.access(`${month}`);
    await fs.access(`${month}/project_name`);
  } catch (err) {
    if (err.syscall === 'access') {
      await fs.mkdir(`${month}`);
      await fs.mkdir(`${month}/project_name`);
    }
  }
}
