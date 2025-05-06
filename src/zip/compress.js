import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
const destinationFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const sourceReadStream = createReadStream(sourceFile, "utf-8");
    const gzipStream = createGzip();
    const destinationWriteStream = createWriteStream(destinationFile);
    
    try {
        await pipeline(sourceReadStream, gzipStream, destinationWriteStream);
    } catch (error) {
        console.error('Error. Compression failed: ', error.message);
    }
};

await compress();