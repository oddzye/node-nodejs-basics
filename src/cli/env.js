const parseEnv = () => {
    // Write your code here
    let result = '';
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            const str = `${key}=${value}`;
            result += result ? `; ${str}` : str;
        }
    }
    console.log(result);
};

parseEnv();