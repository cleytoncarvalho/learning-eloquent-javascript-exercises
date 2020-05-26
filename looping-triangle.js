/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function drawTriangle(height = 0) {
  if (!height) {
    return;
  }

  let row = "";

  for (i = 0; i < height; i++) {
    row += "#";

    console.log(row);
  }
}

drawTriangle(7);
