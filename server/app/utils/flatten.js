/**
 * Flatten a multidimensional object
 *
 * For example:
 *   flattenObject{ a: 1, b: { c: 2 } }
 * Returns:
 *   { a: 1, c: 2}
 */
const flattenObject = (obj) => {
    const flattened = {}

    Object.keys(obj).forEach((key) => {
        console.log(key)
        const value = obj[key]

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.assign(flattened, flattenObject(value))
        } else {
            flattened[key] = value
        }
    })

    return flattened
}

module.exports = flattenObject;
