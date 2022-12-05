import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    // Write your code here
    const folderPath = path.resolve(__dirname, 'files');

    if (!existsSync(folderPath)) {
        throw new Error('FS operation failed');
    }

    const files = await readdir(folderPath);

    for (const file of files) {
        console.log(file);
    }
};

await list();