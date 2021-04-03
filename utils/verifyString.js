export const StringCheck = {
	NonEmpty: 'NON_EMPTY',
	LineInput: 'LINE_INPUT',
	FirebaseKey: 'FIREBASE_KEY',
}

export default (s, checks) => {
	if (typeof s !== 'string') return false;
	if (!s) return !checks.includes(StringCheck.NonEmpty) && !checks.includes(StringCheck.FirebaseKey);
	if (checks.includes(StringCheck.LineInput) || checks.includes(StringCheck.FirebaseKey)) {
		for (let c = 0; c < 32; ++c) if (s.includes(String.fromCharCode(c))) return false;
		if (s.includes(String.fromCharCode(127))) return false;
	}
	if (checks.includes(StringCheck.FirebaseKey)) {
        let b = 0, i = 0, c;
		for (; c = s.charCodeAt(i++); b += c>>11 ? 3 : c>>7 ? 2 : 1);
		let bad = b > 768;
		'.$#[]/'.split('').forEach((c) => {
			if (s.includes(c)) bad = true;
		});
        if (bad) return false;
	}
	return true;
};