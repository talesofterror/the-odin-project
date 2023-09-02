## Odin Project ETCHASKETCH

`
let string = "markdown testing"
`

Things that need to happen: 

- ui
	* icons
		- pencil	
			~ This could function as both the color picker and the color indicator
		- Resolution dial
			~ Two way arrows? < 50 > 
			~ Drop down menu?
		- Dice
			~ separate dice, or within the color picker if i end up writing one myself. 
		- * possibly: Line/ Rectangle / Circle
	* rolling smiley dials
	* color picker & icon
	* resolution picker & icon
		- drop down? up and down arrows? 
	* eraser icon 
		- on/off variant
	* randomize icon 
		- on/off variant
	* ? special drawer ?
		- line tool
		- circle tool 
		- rect tool 
		
- controls object
	- controls.color 
	- controls.resolution
	- controls.eraser
	- controls.randomize

- functions 
	* rolling smileys
	* color picker
		- pop-up color picker
		- changes pixel:hover 
	* resolution picker
		- already written
	* eraser 
		- returns controls.color to base color (--screenBG)
	* randomize 
		- fisher-yates algo 
		- discreet values -- rgb, hsv, or hex?
		- written below


`#231000`

NOTES: 

`
x = pixelContainer.children[x]
y = pixelContainer.children[x].children[y]
? [x, y] = pixelContainer.children[x].children[y]

function (x, y) {
	return [x,y]
} what??

pointA = [x1,y1]
pointB = [x2,y2]

distance = (x2 - y2) * 2 + (y2-y1) * 2

to draw a rectangle: 
	[x1, y1] = corner1
	[x2, y2] = corner2

	function rect (x1, y1, x2, y2) {
		ghostpoint1 = [x1, y2]
		ghostpoint2 = [x2, y1]

	draw side1
		for (i < distance(corner1, ghostpoint1)) {
			pixelContainer.children[ (x1 + i].children[y].bgcolor = $color
		}
	} 
`