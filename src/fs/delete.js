import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    // Write your code here
    const filePath = path.join(__dirname, 'files/fileToRemove.txt');

    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    unlink(filePath);
};

await remove();