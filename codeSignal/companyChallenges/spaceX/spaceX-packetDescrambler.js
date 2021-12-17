function packetDescrambler(seq, fragmentData, n) {
  let ref = [];
  let msg = [];
  for (const i in seq) {
    const pos = seq[i];
    const fragment = fragmentData[i];

    if (!ref[pos]) ref[pos] = {};
    if (!ref[pos][fragment]) {
      ref[pos][fragment] = 1;
    } else {
      ref[pos][fragment]++;
    }

    if (ref[pos][fragment] > n / 2) {
      msg[pos] = fragment;
    }
  }
  let error = false;
  for (let i = 0; i < msg.length; i++) {
    if (!msg[i] || (i < msg.length - 1 && msg[i] === '#')) {
      error = true;
      break;
    }
  }
  return error ? '' : msg.join('');
}
console.log(
  packetDescrambler(
    [1, 1, 0, 0, 0, 2, 2, 2],
    ['+', '+', 'A', 'A', 'B', '#', '#', '#'],
    3
  )
);
