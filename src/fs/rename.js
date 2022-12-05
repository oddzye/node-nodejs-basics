import fsPromises from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    // Write your code here
    const oldFilePath = path.resolve(__dirname, 'files/wrongFilename.txt');
    const newFilePath = path.resolve(__dirname, 'files/properFilename.md');

    if (!existsSync(oldFilePath) || existsSync(newFilePath)) {
        throw new Error('FS operation failed');
    }

    await fsPromises.rename(oldFilePath, newFilePath);
};

await rename();