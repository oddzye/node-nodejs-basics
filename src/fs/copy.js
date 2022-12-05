import { copyFile, readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    // Write your code here
    const srcPath = path.resolve(__dirname, 'files');
    const destPath = path.resolve(__dirname, 'files_copy');

    if (!existsSync(srcPath) || existsSync(destPath)) {
        throw new Error('FS operation failed');
    }

    const files = await readdir(srcPath);
    await mkdir(destPath);

    for (const file of files) {
        const srcFilePath = path.resolve(srcPath, file);
        const destFilePath = path.resolve(destPath, file);
        await copyFile(srcFilePath, destFilePath);
    }
};

copy();