document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characterPool = '';
    if (useUppercase) characterPool += uppercaseChars;
    if (useLowercase) characterPool += lowercaseChars;
    if (useNumbers) characterPool += numberChars;
    if (useSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('password').value = password;
});