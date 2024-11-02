class Test {

    constructor() {}

    getInfo() {
        return {
            id: 'test',
            name: 'Test',
            blocks: [
            {
                opcode: 'hello',
                blockType: Scratch.BlockType.COMMAND,
                text: 'hello'
            }
            ]
        }
    }

    _GetMyNotice() {
        let apiResponse = fetch("https://api.scratch.mit.edu/users/Linux-zen/messages/count").then(res => res.json()).then((data) => { return data; });
        alert("please wait...")
        console.log(apiResponse)
    }
}

Scratch.extensions.register(new Test());
