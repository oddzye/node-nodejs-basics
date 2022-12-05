import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    // Write your code here
    const fileToCompressPath = path.resolve(__dirname, 'files/fileToCompress.txt');
    const compressedFilePath = path.resolve(__dirname, 'files/archive.gz');
    const readStream = createReadStream(fileToCompressPath);

    readStream
        .pipe(createGzip())
        .pipe(createWriteStream(compressedFilePath))
        .on('finish', () => {
            console.log('file compressed!');
        });
};

await compress();