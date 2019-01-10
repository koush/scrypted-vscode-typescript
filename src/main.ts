// log is a local script variable provided by Scrypted.
declare var log: any;

// need to polyfill Promises
import "core-js/modules/es6.promise";
declare var Promise: any;

import axios from 'axios';

log.i('Hello World');

class Program {
    public static wait(ms): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        })
    }

    public static async main(): Promise<void> {
        log.i('setTimeout is implemented by the Android host.');
        await Program.wait(50);
        log.i('done waiting for 50ms.');
        log.i('XMLHttpRequest is polyfilled by the Android host. This allows the popular http library axios or jquery ajax to work.');

        const ip = await axios.get('http://jsonip.com');
        log.i(`my ip: ${ip.data.ip}`);
    }
}

log.i('The script will exit, but the async function will continue.');

Program.main();
