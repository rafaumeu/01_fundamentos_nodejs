import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        this.push(String(i)); // Enviando como string
      }
    }, 1000);
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half'
})
