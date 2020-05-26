/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/

function printChessboard(size) {
  if (!size) {
    return;
  }

  let chessboard = "";

  for (i = 0; i < size; i++) {
    if (i > 0) {
      chessboard += "\n";
    }

    for (j = 0; j < size; j++) {
      chessboard += (i + j) % 2 === 0 ? " " : "#";
    }
  }

  console.log(chessboard);
}

printChessboard(8);
