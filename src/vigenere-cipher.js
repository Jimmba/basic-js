class VigenereCipheringMachine {
    constructor(direct = true){
        this.direct = direct === false ? false : true;
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    init(msg, key) {
        this.word = "";
        if (!(msg && key)) { throw new Error; }
        this.msg = msg.toUpperCase();
        this.key = key.toUpperCase();
    }

    crypto(isEncrypt) {
        for (let i = 0, j = 0; i < this.msg.length; i++,j++) {
            if (!this.abc.includes(this.msg.charAt(i))){
                this.word += this.msg.charAt(i);
                j--;
                continue;
            }
            if (isEncrypt) {
                this.word += this.abc.charAt((this.abc.indexOf(this.msg.charAt(i)) + this.abc.indexOf(this.key.charAt(j % this.key.length))) % this.abc.length);
            } else {
                this.word += this.abc.charAt(((this.abc.indexOf(this.msg.charAt(i)) + this.abc.length) - this.abc.indexOf(this.key.charAt(j % this.key.length))) % this.abc.length); 
            }
        }
    }
    
    checkDirect() {
        return this.direct ? this.word : this.word.split('').reverse().join('');
    }
    encrypt(msg, key) {
        this.init(msg, key);
        this.crypto(true);
        return this.checkDirect();
    }

    decrypt(msg, key) {
        this.init(msg, key);
        this.crypto(false);
        return this.checkDirect();
    }
}

module.exports = VigenereCipheringMachine;