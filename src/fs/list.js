import { readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const targetDirName = join(dirName, 'files' );

const list = async () => {
    try {
        const files = await readdir(targetDirName);
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error('FS operation failed');
    }
};

await list();