class Notice {
    constructor() {}
    getInfo() { // 拡張機能の各種情報
        return {
            id: 'Notice',
            name: 'Notice', // 拡張機能の名前
            blocks: [ // 各ブロックの定義
            {
                opcode: 'Notice', // このブロックが実行されると、クラス内のhelloというメソッドが呼ばれることを意味しています
                blockType: Scratch.BlockType.COMMAND,　// 「10歩動かす」のような通常の命令ブロック
                text: 'Notice' // ブロックに表示されるテキスト
            }
            ]
        }
    }
    Notice() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.scratch.mit.edu/users/Linux-zen/messages/count");
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = xhr.response;
                alert(data.count);
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
    }
}
Scratch.extensions.register(new Notice());
