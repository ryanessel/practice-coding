// Canvas element is used to draw graphics via Javascript
// <canvas> element is only container fro the graphics
// canvas might look like a cat and <img> elem but it doesn't have src or alt attributes





const canvas = document.getElementById("example"); // this is targeting out speficied <canvas> elem
const context = canvas.getContext("2d");// this is applying the conext to the tageted canvas above using the variable under which it was decalred



// DRAWING SHAPES

// Origin of the grid is at the top left (0,0)
// our canvas is 300px X 300px so thtats the sapace we have to work itn obvisoulty

//CANVAS- SUPPORTS ONLY 2 PRIVITIVE SHAPES:
//1.RECTANGLES
//2.PATHS!

// OTHER SHAPES MUST BE CREATED BY COMBINING ONE OR MORE PATHS!!!!!
// lists of points connected by lines
// but there are drawing funcitons which make this easier


//3 rectangle functions !!!!!IMPORTANT!!!!! ---- THESE METHODS ARE APPLIED AFTER THE CONTEXT. So 1. target canvas, 2 apply context to canvas, 3 use methods on context which has been apllied to a canvas
//EXAMPLE OF THISS
//// context.strokeRect(110, 110, 40, 40);

//1. fillRect(x, y, width, height); draws a filled rectangle
//2. strokeRect(x, y, width, height): draws a recangular outline; not filled in rectangle 
//3. clearREct(x, y, width, height); makes an invisible rectangle. I guess for spacing pruposes?


context.fillStyle = "thistle";// .fillStyle = "color"; lets you set a color for yoru object.
context.fillRect(150, 150, 70, 70); 
// context.clearRect(150, 151, 70, 70); // its not clear, its blank


//PATHS! - the other primitive shape. 
// it is a list of points connected by segments of line that can be of different shapes, curved, or not, and of different widths and of different colors

//A path or even subpath can be clased. To make shapes using pahts takes some extra steps:
// 1. create path
// 2. use drawing bommands to draw into the path
// 3. Close the path.
// 4. One the path has been created, you can stroke or fill the path to render it.//

// METHODS(says functions? lol what?)

// beginPath(); // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
// closePath(); // Closes the path so that future drawing commands are once again directed to the context.
// stroke(); // Draws the shape by stroking its outline.
// fill(); // Draws a solid shape by filling the path's content area.

