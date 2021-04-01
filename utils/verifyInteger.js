export default function verifyInteger(x) {
    return !isNaN(x) && Number.isInteger(x);
}