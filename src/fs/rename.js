import { rename as renameFS, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const originalFile = join(dirName, 'files', 'wrongFilename.txt');
const renamedFile = join(dirName, 'files', 'properFilename.md');

const fileExists = async (file) => {
    try {
        await stat(file);
        return true;
    } catch (error) {
        if (error.code === 'ENOENT') return false;
        throw error;
    }
}

const rename = async () => {
    try {
        if (!(await fileExists(originalFile))) {
            throw new Error('FS operation failed');
        }

        if (await fileExists(renamedFile)) {
            throw new Error('FS operation failed');
        }

        await renameFS(originalFile, renamedFile);
    } catch (error) {
        throw new Error('FS operation failed');
    } 
};

await rename();