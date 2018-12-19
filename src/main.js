import axios from 'axios';

log.i('Hello World');
log.i('Babel polyfills Promise for us.');
log.i('setTimeout is implemented by the Android host.');

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

async function main() {
    await wait(50);
    log.i('done waiting for 50ms.');
    log.i('XMLHttpRequest is polyfilled by the Android host. This allows the popular http library axios or jquery ajax to work.');

    const ip = await axios.get('http://jsonip.com');
    log.i(`my ip: ${ip.data.ip}`);
}
main();

log.i('The script will exit, but the async function will continue.');
