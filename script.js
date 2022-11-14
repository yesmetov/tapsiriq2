class Message {
    constructor(authorName, time, text) {
        this.authorName = authorName
        this.time = time
        this.text = text
    }
    toString() {
        console.log(`${this.authorName} : ${this.time}:${this.text}`)
    }
}

class Messenger {
    constructor() {
        this.messages = []
    }
    show_history() {
        this.messages.map(message => message.toString())
    }
    send(author, text) {
        let message = new Message(author, text, gettime())
        this.messages.push(message)
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()