const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const sayHappyBirthDay = (name) => {
    console.log(`Selamat ulang tahun ${name}`);
}

myEventEmitter.on('ulangtahun', sayHappyBirthDay); // Menggunakan 'ulangtahun' sebagai nama acara
myEventEmitter.emit('ulangtahun', 'Awen'); // Mengirimkan acara 'ulangtahun' dengan nama 'Awen'
