const stringStore = document.getElementById('stringStore');
console.log(stringStore)
let text = [...stringStore.textContent];
let length = text.length;
setInterval(() => {
    let removed = text.pop()
    stringStore.textContent = text.join('');
    text.unshift(removed);
    stringStore.textContent = text.join('');
}, 150);

