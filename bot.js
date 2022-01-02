const tmi = require('tmi.js');
var ks = require('node-key-sender');
const opn = require('opn');

ks.setOption('globalDelayPressMillisec', 500);

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: 'true',
    },
    identity: {
        username: 'orennoe',
        password: 'oauth:romf60sz7yyd3vz5tshs8b48umblfp',
    },
    channels: ['orennoe'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('orennoe', 'Hola bros');
});

client.on('chat', (channel, user, message, self) => {
    if (message.includes("?" || message.includes("¿")) || message.includes("!")) {
        client.action('orennoe', `PORFAVOR NO INGRESAR NI "?", "¿", "!"`);
    } /*Comandos letras*/
    else {
        if (message === "a") {
            client.action('orennoe', `a`);
            ks.sendKey('a');
        }
        if (message === "b") {
            client.action('orennoe', `b`);
            ks.sendKey('b');
        }
        if (message === "c") {
            client.action('orennoe', `c`);
            ks.sendKey('c');
        }
        if (message === "d") {
            client.action('orennoe', `d`);
            ks.sendKey('d');
        }
        if (message === "e") {
            client.action('orennoe', `e`);
            ks.sendKey('e');
        }
        if (message === "f") {
            client.action('orennoe', `f`);
            ks.sendKey('f');
        }
        if (message === "g") {
            client.action('orennoe', `g`);
            ks.sendKey('g');
        }
        if (message === "h") {
            client.action('orennoe', `h`);
            ks.sendKey('h');
        }
        if (message === "i") {
            client.action('orennoe', `i`);
            ks.sendKey('i');
        }
        if (message === "j") {
            client.action('orennoe', `j`);
            ks.sendKey('j');
        }
        if (message === "k") {
            client.action('orennoe', `k`);
            ks.sendKey('k');
        }
        if (message === "l") {
            client.action('orennoe', `l`);
            ks.sendKey('l');
        }
        if (message === "m") {
            client.action('orennoe', `m`);
            ks.sendKey('m');
        }
        if (message === "n") {
            client.action('orennoe', `n`);
            ks.sendKey('n');
        }
        if (message === "o") {
            client.action('orennoe', `o`);
            ks.sendKey('o');
        }
        if (message === "p") {
            client.action('orennoe', `p`);
            ks.sendKey('p');
        }
        if (message === "q") {
            client.action('orennoe', `q`);
            ks.sendKey('q');
        }
        if (message === "r") {
            client.action('orennoe', `r`);
            ks.sendKey('r');
        }
        if (message === "s") {
            client.action('orennoe', `s`);
            ks.sendKey('s');
        }
        if (message === "t") {
            client.action('orennoe', `t`);
            ks.sendKey('t');
        }
        if (message === "u") {
            client.action('orennoe', `u`);
            ks.sendKey('u');
        }
        if (message === "v") {
            client.action('orennoe', `v`);
            ks.sendKey('v');
        }
        if (message === "w") {
            client.action('orennoe', `w`);
            ks.sendKey('w');
        }
        if (message === "x") {
            client.action('orennoe', `x`);
            ks.sendKey('x');
        }
        if (message === "y") {
            client.action('orennoe', `y`);
            ks.sendKey('y');
        }
        if (message === "z") {
            client.action('orennoe', `z`);
            ks.sendKey('z');
        }
        /*Comandos no letras*/
        if (message === "$enter") {
            client.action('orennoe', `enter`);
            ks.sendKey('enter');
        }
        if (message === "$space") {
            client.action('orennoe', `espaciox`);
            ks.sendKey('space');
        }
        if (message === "$esc") {
            client.action('orennoe', `escapando xd`);
            ks.sendKey('escape');
        }
        if (message === "$borrar") {
            client.action('orennoe', `borrando`);
            ks.sendKey('delete');
        }
        if (message.includes("$control-")) {
            message = message.substring(9, message.length);
            console.log(message);
            client.action('orennoe', `control +` + message);
            ks.sendCombination(['control', message]);
        }
        /*Comandos flechitas*/
        if (message == "$arriba") {
            client.action('orennoe', `flechita arriba...`);
            ks.sendKey("up");
        }
        if (message == "$abajo") {
            client.action('orennoe', `flechita abajo...`);
            ks.sendKey("down");
        }
        if (message == "$derecha") {
            client.action('orennoe', `flechita derecha...`);
            ks.sendKey("right");
        }
        if (message == "$izquierda") {
            client.action('orennoe', `flechita izquierda...`);
            ks.sendKey("left");
            console.log("izquierda");
        }
        /*Comandos de abrir algo*/
        if (message.includes("$youtube")) {
            message = message.substring(9, message.length);
            console.log(message);
            client.action('orennoe', `Abriendo iutub...`);
            opn('youtube.com', {
                app: 'Chrome'
            });
            /*setTimeout(function () {
                ks.sendCombination(['alt', 'd']);
            }, 8000);*/
            setTimeout(function () {
                ks.sendKeys(['tab', 'tab', 'tab', 'tab']);
            }, 8000);
            ks.sendText(message);

        }
        if (message === "$com") {
            client.action('orennoe', `.com ahi va pa trankilate`);
            ks.sendText(".com");
        }
        if (message.includes("$google")) {
            message = message.substring(8, message.length);
            client.action('orennoe', "Googleando " + message + " en google...");
            opn('google.com', {
                app: 'Chrome'
            });
            ks.sendCombination(['control', 'e']);
            setTimeout(function () {
                ks.sendText(message);
            }, 2000);
        }
        if (message.includes("$escribir")) {
            message = message.substring(10, message.length);
            client.action('orennoe', "Escribiendo... " + message + " en el teclado...");
            ks.sendText(message);
        }
    }
});