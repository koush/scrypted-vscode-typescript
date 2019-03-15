// log is a local script variable provided by Scrypted.
declare var log: any;

// need to polyfill Promises
// import "core-js/modules/es6.promise";
declare var Promise: any;

import axios from 'axios';
import { OnOff } from '@scrypted/sdk';

log.i('Hello World. This will create a virtual OnOff device.');

class Device implements OnOff {
    _isOn: boolean;

    constructor() {
        this._isOn = false;
    }
    isOn(): boolean {
        return this._isOn;
    }
    turnOff(): void {
        this._isOn = false;
        log.i('turnOff was called!');
    }
    async turnOn(): Promise<void> {
        // set a breakpoint here.
        log.i('turnOn was called!');

        // turnOn must return immediately, but it can trigger other things... 
        log.i('XMLHttpRequest is polyfilled by the Android host.');
        log.i('This allows the popular http library axios to work.');
        const ip = await axios.get('http://jsonip.com');
        log.i(`my ip: ${ip.data.ip}`);

        this._isOn = true;
    }
}

export default new Device();
