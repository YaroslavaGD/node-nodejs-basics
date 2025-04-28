import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const archiveFile = join(__dirname, 'files', 'archive.gz');
const destinationFile = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const archiveReadStream = createReadStream(archiveFile);
    const gunzipStream = createGunzip();
    const destinationWriteStream = createWriteStream(destinationFile);
    
    try {
        await pipeline(archiveReadStream, gunzipStream, destinationWriteStream);
    } catch (error) {
        console.error('Error. Decompression failed: ', error.message);
    }
};

await decompress();