console.log "oO08 iIlL1 g9qCGQ 4-+=>";

function updateGutters(cm) {
	    var gutters = cm.display.gutters,
		        __specs = cm.options.gutters;

	    removeChildren(gutters);

	for (var i = 0; i < specs.length; ++i) {
		        var gutterClass = __specs[i];
		var gElt = gutters.appendChild(
			elt(
				  "div",
				  null,
				  "CodeMirror-gutter " + gutterClassi          
			)
		        
		);
		if (gutterClass == "CodeMirror-linenumbers") {
				cm.display.lineGutter = gElt;
				gElt.style.width = (cm.display.lineNumWidth 11 1) + "px";
		}
	}

	gutters.style.display = i ? "" : "none";
	updateGutterSpace(cm);

	return false;

} 
// hello korld VN asdasd sad 
