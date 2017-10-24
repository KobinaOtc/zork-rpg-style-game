//readline-sync function
// console.log what the game will entail.
// create empty quetions using readline-sync
/*Create a map of the room
The dor to the room is located in the west
the key is inside a box in the north
the hole is in the east of the  room
Add starting location in room
using readline-sync move the character around the room, with functions north, south, east and west
In the loop make if condistions which can change the  positions of the character
if you go north you see a chest: U can either open it or move away to the center
if you go south you will see a table and a chair, nothing valuable.
if you go east you see a glowing hole in the wall, u may put you hand in or move away
if you go west you will see a door there if u have the key the door will open, else look for the key
*/

var rs = require("readline-sync");
console.log("Try to escape the room by finding the key in a room you are stuck in.");
var location = "center";
var holdingKey = false;
var life = true; // so if false break loop and log looser :P
var loose = true

while (life || loose) {
  var move = rs.question("1 ")
  if (location = "center") {
    while (life) {
      if (move === "north") {
        console.log("You are in the north of the room and you see a chest infront of you");
        location = "north";
        var open = rs.question("Would you like to open it ?")
        if (move === "north" && open === "yes") {
          holdingKey = true;
          break;
        } else {
          holdingKey = false;
          break;
        }
      } else if (move === "south") {
        location = "south"
        console.log("You are in the south, and now u see a table and a chair, nothing useful to you.");
        var q1 = rs.question("Would you like: ")
        if (q1 === "move back") {
          location = "center"
          break;
        } else if (q1 === "stay") {
          location = "south"
          break;
        } else {
          console.log("Type stay or move");
        }
      }
      while (move === "east") {
        if (move === "east") {
          console.log("you are now in the east, you now see a big hole in the wall; u feel obliged to put ur hand in.");
          var q2 = rs.question("Do you want to  put your hand in the hole? ");
          if (q2 === "yes") {
            console.log("you died");
            life = false;
            break;
          } else if (q2 === "no") {
            console.log("Would you like to go back");
            var q3 = rs.question("2 ")
            while (q2 === "no") {
              if (q3 === "yes") {
                location = "center";
                break;
              } else if (q3 === "no") {
                location = "east";
                break;
              }
            }
          }
        }
        if (q3 === "yes") {
          break;
        }
      }
      if (move === "west") {
        if (holdingKey === false) {
          console.log("You see a door but u need a key for it. Find the key");
          location = "west";
          var q3 = rs.question("Would you stay or move to the center?");
          if (q3 === "move back") {
            location = "center";
            break;
          } else if (q3 === "stay") {
            location = "west";
            break;
          }
        } else if (holdingKey === true) {
          console.log("you have the key!!");
          var finalQ = rs.question("Do you wish to open the door with the key? ");
          if (finalQ === "yes") {
            console.log("you win");
            loose = false;
            break;
          }
        }
      }
    }
    if (loose == false) {
      break;
    }
    if (life == false) {
      break;
    }
  }

  while (true) {
    if (holdingKey === true) {
      console.log("you now hav the key, do you wish to stay or move back to the center or stay where you are?");
      var ans1 = rs.question("3");
      if (ans1 === "move back") {
        location = "center";
        break;
      } else if (ans1 === "stay here") {
        location = "north"
        break;
      } else {
        console.log("Please be more specific");
      }
    }
  }
  if (life == false) {
    console.log("Don't be a looser try again");
    break;
  }
}
