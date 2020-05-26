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

  let triangle = "";

  while (triangle.length < height) {
    triangle += "#";
    console.log(triangle);
  }
}

drawTriangle(7);
