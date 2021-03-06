
module.exports = isViable = (password, errors) => {
    // Import passwored requirements
    const requirements = require('./passwordRequirements')(password)

    // Check for symbols
    if (password.match(requirements.symbols) == null) {
        errors.password = 'Password must contain at least 2 symbols'
        return errors
    }

    // Check for numbers
    if (password.match(requirements.numbers) == null) {
        errors.password = 'Password must contain at least 2 numbers'
        return errors
    }

    // Check for lower characters
    if (password.match(requirements.lowerCharacters) == null) {
        errors.password = 'Password must contain at least one lower character'
        return errors
    }

    // Check first two characters for uppercase
    if (password.match(requirements.upperTwoFirstChars) == null) {
        errors.password = 'The first two characters must be uppercase'
        return errors
    }

    // Check for repeated characters
    if (requirements.isRepeated) {
        errors.password = 'Password must not have repeated characters'
        return errors
    }

    // Check for ambiguos characters
    if (password.match(requirements.ambiguousCharacters)) {
        errors.password = 'Password must not contain ambiguous characters eg. {}[]()/\'"`~,;:.<>'
        return errors
    }
    return errors
}

