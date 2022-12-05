import { Transform, pipeline } from 'stream';

const transform = async () => {
    // Write your code here

    const transformInstance = new Transform({
        transform: (chunk, _, cb) => {
            const result = chunk.toString().trim().split('').reverse().join('');

            cb(null, `${result}\n`);
        }
    })
    
    pipeline(process.stdin, transformInstance, process.stdout, (err) => console.log(err));
};

await transform();