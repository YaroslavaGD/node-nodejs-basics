import { cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);
const originalDirName = join(dirName, 'files');
const destinationDirName = join(dirName, 'files_copy');

const copy = async () => {
    try {
        await cp(
            originalDirName,
            destinationDirName,
            { errorOnExist: true, recursive: true, force: false }
        );
    } catch (error){
        if (error.code === 'ENOENT' || error.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed');
        }
        throw new Error('FS operation failed');
    }
};

await copy();
