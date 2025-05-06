import { unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const deleteFileName = join(dirName, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await unlink(deleteFileName);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw new Error('FS operation failed');
    }
};

await remove();