document.addEventListener('DOMContentLoaded',() => {
document.getElementById('contactButton').addEventListener('click',function(){
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'THANK YOU for clicking!';
    messageElement.style.color = 'green';

});
});