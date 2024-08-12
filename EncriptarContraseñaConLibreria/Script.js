const secretKey = "my-secret-key";

        function hashPassword() {
            const password = document.getElementById('password').value;
            const hashedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
            document.getElementById('hashedPassword').value = hashedPassword;
        }

        function decryptPassword() {
            try {
                const hashInput = document.getElementById('hashInput').value;
                const bytes = CryptoJS.AES.decrypt(hashInput, secretKey);
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

                if (!originalPassword) {
                    throw new Error("Invalid decryption");
                }

                document.getElementById('decryptedPassword').value = originalPassword;
            } catch (e) {
                document.getElementById('decryptedPassword').value = "Error: Incorrect or modified hashed password";
            }
        }