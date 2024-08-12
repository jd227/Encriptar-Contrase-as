const mapaCaracteres = {};

function generarMapaCaracteres() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < caracteres.length; i++) {
        const valorAleatorio = Math.floor(Math.random() * 10000);
        mapaCaracteres[caracteres[i]] = valorAleatorio;
    }
}

function hashPassword() {
    const password = document.getElementById('password').value;
    let hashed = '';
    for (let i = 0; i < password.length; i++) {
        hashed += mapaCaracteres[password[i]] ? mapaCaracteres[password[i]] + '-' : '';
    }
    hashed = hashed.slice(0, -1);
    document.getElementById('hashedPassword').value = hashed;
}

function unhashPassword() {
    const hashedPassword = document.getElementById('hashedPassword').value;
    const hashedArray = hashedPassword.split('-');
    const reverseMap = Object.fromEntries(Object.entries(mapaCaracteres).map(([key, value]) => [value, key]));
    let unhashed = '';
    for (let i = 0; i < hashedArray.length; i++) {
        if (!reverseMap[hashedArray[i]]) {
            document.getElementById('error').textContent = 'Error, la contraseña hasheada ha sido modificada.';
            return;
        }
        unhashed += reverseMap[hashedArray[i]];
    }
    document.getElementById('password').value = unhashed;
}

generarMapaCaracteres();