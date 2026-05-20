# @abdel-sa/password-utilities

[![npm version](https://badge.fury.io/js/%40abdel-sa%2Fpassword-utilities.svg)](https://www.npmjs.com/package/@abdel-sa/password-utilities)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight JavaScript library for generating and validating strong passwords.

## Installation

**npm:**
```bash
npm install @abdel-sa/password-utilities
```

**yarn:**
```bash
yarn add @abdel-sa/password-utilities
```

## Usage

```javascript
const { generateStrongPassword, isStrongPassword } = require('@abdel-sa/password-utilities');

// Generate a 12-character password
const password = generateStrongPassword(12);
console.log(password); // e.g., "pC%mD8TpCKn2"

// Validate a password
console.log(isStrongPassword('pC%mD8TpCKn2')); // true
console.log(isStrongPassword('Hello World'));   // false
```

## API

### `generateStrongPassword(length?)`

Generates a random password using uppercase letters, lowercase letters, digits, and special characters (`!@#$%^&*()_+`). Guaranteed to always return a password that passes `isStrongPassword`.

| Parameter | Type   | Default | Description                                  |
|-----------|--------|---------|----------------------------------------------|
| `length`  | number | `12`    | The desired password length (minimum: **8**) |

**Returns:** `string`

**Throws:** `Error` if `length` is less than 8.

**Examples:**
```javascript
generateStrongPassword(12);  // e.g., "pC%mD8TpCKn2"
generateStrongPassword();    // e.g., "xK@9mLqR2#Tz"
generateStrongPassword(1);   // throws Error: Password length must be at least 8 to be strong
```

### `isStrongPassword(password)`

Checks whether a password meets all strength requirements:

- Minimum **8 characters**
- At least one **uppercase letter** (A–Z)
- At least one **lowercase letter** (a–z)
- At least one **digit** (0–9)
- At least one **special character** (`!@#$%^&*()_+`)

| Parameter  | Type   | Description              |
|------------|--------|--------------------------|
| `password` | string | The password to validate |

**Returns:** `boolean`

**Examples:**
```javascript
isStrongPassword('Hello World');   // false — no digit, no special character
isStrongPassword('pC%mD8TpCKn2'); // true
isStrongPassword('abc');           // false — too short
isStrongPassword('ABCabc123');     // false — no special character
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

If you discover a security vulnerability, please see [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Abdelrahman Salama & Mohamad Aldulemi
