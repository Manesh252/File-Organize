import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath =
  "C:\\Users\\pmr bhupathi\\OneDrive\\Desktop\\Web Development\\Express\\Exercise-1 (Organise Data)";

let files = await fs.readdir(basepath);

for (const item of files) {
  console.log(item);
  let parts = item.split(".");
  let ext = parts[parts.length - 1];

  if (ext !== "js" && ext !== "json" && parts.length > 1) {
    let folderPath = path.join(basepath, ext);

    // Create folder only if it doesn't exist
    if (!fsn.existsSync(folderPath)) {
      await fs.mkdir(folderPath, { recursive: true });
    }

    await fs.rename(path.join(basepath, item), path.join(folderPath, item));
  }
}
