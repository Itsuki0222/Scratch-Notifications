const xhr = new XMLHttpRequest();
xhr.open("GET", "https://corsproxy.io/?https%3A%2F%2Fapi.scratch.mit.edu%2Fusers%2FLinux-zen%2Fmessages%2Fcount");
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
