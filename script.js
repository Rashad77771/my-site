document.querySelector('.cta-button').addEventListener('click', () => {
    alert('1win-ə xoş gəlmisiniz!');
});
document.getElementById('register-btn').addEventListener('click', () => {
    window.location.href = 'https://1wzocn.life/casino/list?open=register&p=ivce';
});
document.getElementById('login-btn').addEventListener('click', () => {
    window.location.href = 'https://1wzocn.life/casino/list?open=register&p=ivce';
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://1wzocn.life/casino/list?open=register&p=ivce';
    });
});
