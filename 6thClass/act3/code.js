function randomNumbers() {
    let number = Math.ceil(Math.random() * 10);
    return number;
}
for (i = 0; i < 10; i++) {
    console.log(randomNumbers());
}
