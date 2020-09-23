import app from './app';
import '@babel/polyfill';
const port = process.env.PORT || 4000;

async function main() {
    await app.listen(port);
    console.log('Server on port ' + port);
}

main();