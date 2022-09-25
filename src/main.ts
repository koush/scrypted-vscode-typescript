// https://developer.scrypted.app/#getting-started
// package.json contains the metadata (name, interfaces) about this device
// under the "scrypted" key.
import { OnOff, ScryptedDeviceBase } from '@scrypted/sdk';
import axios from 'axios';

console.log('Hello World. This will create a virtual OnOff device.');
// OnOff is a simple binary switch. See "interfaces"  in package.json
// to add support for more capabilities, like Brightness or Lock.

class TypescriptLight extends ScryptedDeviceBase implements OnOff {
    constructor(nativeId?: string) {
        super(nativeId);
        this.on = this.on || false;
    }
    async turnOff() {
        this.console.log('turnOff was called!');
        this.on = false;
    }
    async turnOn() {
        // set a breakpoint here.
        this.console.log('turnOn was called!');

        this.console.log("Let's pretend to perform a web request on an API that would turn on a light.");
        const ip = await axios.get('http://jsonip.com');
        this.console.log(`my ip: ${ip.data.ip}`);

        this.on = true;
    }
}

export default TypescriptLight;
