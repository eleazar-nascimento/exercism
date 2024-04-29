const objectColorsValue: any = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}

export function decodedValue(colorsValue: string[]) {
  const concatColorValues = objectColorsValue[colorsValue[0]].toString() + objectColorsValue[colorsValue[1]].toString()
  return Number(concatColorValues)
}
