import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
    // Write your code here
    const fileToCompressPath = path.resolve(__dirname, 'files/fileToCompress.txt');
    const compressedFilePath = path.resolve(__dirname, 'files/archive.gz');
    const readStream = createReadStream(compressedFilePath);

    readStream
        .pipe(createUnzip())
        .pipe(createWriteStream(fileToCompressPath))
        .on('finish', () => {
            console.log('file decompressed!');
        });
};

await decompress();