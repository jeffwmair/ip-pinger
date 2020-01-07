/**
 * Simple program that loops though IP addresses to ping on the local network.
 * Helps me to identify the IPs of my computers that are not using a monitor.
 * 
 * Just run the program and ips that are 'alive' will be printed.
 */
const ping = require('ping');
const max_ip = 30;
const promises = [];

// based on router settings
const ip_prefix = '192.168.0';

for (let i = 0; i <= max_ip; i++) {
    let ip = `${ip_prefix}.${i}`;
    promises.push(ping.promise.probe(ip));
}

Promise.all(promises).then(function(values) {
    values.forEach(function(val) {
        if (val.alive === true) {
            console.log('Alive:' + val.host);
        }
    })
})

