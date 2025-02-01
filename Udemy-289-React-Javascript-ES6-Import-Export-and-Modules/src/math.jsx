const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // the default can be given anyname whereever its been imported
export { doublePi, triplePi }; // but these exports cant be renamed
