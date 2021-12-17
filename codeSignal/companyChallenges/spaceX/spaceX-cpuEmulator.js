function cpuEmulator(subroutine) {
  let i = 0;
  const registers = new Uint32Array(43);
  while (subroutine[i]) {
    const statement = subroutine[i].split(/[\s,]/g);
    const label = statement[0];
    const operands = [statement[1], statement[2]];
    switch (label) {
      case 'MOV':
        if (operands[0][0] === 'R') {
          registers[+operands[1].slice(1)] = registers[+operands[0].slice(1)];
        } else {
          registers[+operands[1].slice(1)] = +operands[0];
        }
        i++;
        break;
      case 'ADD':
        registers[+operands[0].slice(1)] += registers[+operands[1].slice(1)];
        i++;
        break;
      case 'INC':
        registers[+operands[0].slice(1)]++;
        i++;
        break;
      case 'DEC':
        registers[+operands[0].slice(1)]--;
        i++;
        break;
      case 'INV':
        registers[+operands[0].slice(1)] = ~registers[+operands[0].slice(1)];
        i++;
        break;
      // --
      case 'JMP':
        i = +operands[0] - 1;
        break;
      case 'JZ':
        if (registers[0] !== 0) {
          i++;
        } else {
          i = +operands[0] - 1;
        }
        break;
      case 'NOP':
        i++;
        break;
      default:
        i++;
        break;
    }
  }
  return registers[42].toString();
}
console.log(
  cpuEmulator([
    'MOV 5,R00',
    'MOV 10,R01',
    'JZ 7',
    'ADD R02,R01',
    'DEC R00',
    'JMP 3',
    'MOV R02,R42'
  ])
);
