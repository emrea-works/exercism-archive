export function decodedValue(
    /* Method 1...5 */
    //colorNames: typeof COLORS
    // Method 9
    [color1st, color2nd]: typeof COLORS
): number {
  //throw new Error('Remove this statement and implement this function')

  /* // Method 1: Defines an inner function to treat every element
  const gIOf = (colorName: string): number => { return COLORS.indexOf(colorName) };
  return Number(`${gIOf(colorNames[0])}${gIOf(colorNames[1])}`);
  */

  /* // Method 2: returns directly from string concatenating
  return Number(
    String( COLORS.indexOf(colorNames[0]) )
    +
    COLORS.indexOf(colorNames[1]).toString()
  );
  */

  /* // Method 3: limiting picking element length by an iteration
  const limit = 2;
  let res: string = "";

  for (let i = 0; i < limit; i++) {
    res += String(COLORS.indexOf(colorNames[i]))
  }
  return parseInt(res) */

  /* // Method 4: using boolean values as number
  return parseInt(
    String( COLORS.indexOf( colorNames[ Number(false) ] ) )
    +
    String( COLORS.indexOf( colorNames[ Number(true)  ] ) )
  )
  */

  /* // Method 5: cut the ignored part then return the rest: from end to start
  colorNames = colorNames.splice(0, 2)
  let concatedValues: string = ""
  for(let position in colorNames) { concatedValues += COLORS.indexOf(colorNames[position]) }
  return parseInt(concatedValues)
  */

  /* // Method 9: limited the values and length during type declaration */
  return Number(COLORS.indexOf(color1st).toString() + COLORS.indexOf(color2nd));
};

const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
