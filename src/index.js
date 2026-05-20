function generateStrongPassword(length = 12) {
  if (length < 8) {
    throw new Error('Password length must be at least 8 to be strong');
  }
  const allowedPasswordCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let strongPassword;
  do {
    strongPassword = Array
      .from(
        { length },
        () => {
          const randomAllowedPasswordCharacterIndex =
            Math.floor(Math.random() * allowedPasswordCharacters.length);
          const randomAllowedPasswordCharacter =
            allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
          return randomAllowedPasswordCharacter;
        })
      .join('');
  } while (!isStrongPassword(strongPassword));
  return strongPassword;
}

function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  const isPasswordStrong = /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+]/.test(password);
  return isPasswordStrong;
}

module.exports = { generateStrongPassword, isStrongPassword };
