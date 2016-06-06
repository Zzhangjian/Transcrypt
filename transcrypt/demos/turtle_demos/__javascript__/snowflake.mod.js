	(function () {
		var Turtle = __init__ (__world__.turtle).Turtle;
		var _allTurtles = __init__ (__world__.turtle)._allTurtles;
		var _debug = __init__ (__world__.turtle)._debug;
		var _defaultElement = __init__ (__world__.turtle)._defaultElement;
		var _defaultTurtle = __init__ (__world__.turtle)._defaultTurtle;
		var _height = __init__ (__world__.turtle)._height;
		var _ns = __init__ (__world__.turtle)._ns;
		var _offset = __init__ (__world__.turtle)._offset;
		var _rightSize = __init__ (__world__.turtle)._rightSize;
		var _svg = __init__ (__world__.turtle)._svg;
		var _width = __init__ (__world__.turtle)._width;
		var abs = __init__ (__world__.turtle).abs;
		var back = __init__ (__world__.turtle).back;
		var begin_fill = __init__ (__world__.turtle).begin_fill;
		var bgcolor = __init__ (__world__.turtle).bgcolor;
		var circle = __init__ (__world__.turtle).circle;
		var clear = __init__ (__world__.turtle).clear;
		var color = __init__ (__world__.turtle).color;
		var distance = __init__ (__world__.turtle).distance;
		var done = __init__ (__world__.turtle).done;
		var down = __init__ (__world__.turtle).down;
		var end_fill = __init__ (__world__.turtle).end_fill;
		var forward = __init__ (__world__.turtle).forward;
		var goto = __init__ (__world__.turtle).goto;
		var home = __init__ (__world__.turtle).home;
		var left = __init__ (__world__.turtle).left;
		var pensize = __init__ (__world__.turtle).pensize;
		var pos = __init__ (__world__.turtle).pos;
		var position = __init__ (__world__.turtle).position;
		var reset = __init__ (__world__.turtle).reset;
		var right = __init__ (__world__.turtle).right;
		var setDefaultElement = __init__ (__world__.turtle).setDefaultElement;
		var up = __init__ (__world__.turtle).up;
		var josh = Turtle ();
		var draw = function (length) {
			if (length > 9) {
				draw (length / 3);
				josh.left (60);
				draw (length / 3);
				josh.right (120);
				draw (length / 3);
				josh.left (60);
				draw (length / 3);
			}
			else {
				josh.forward (length);
			}
		};
		var length = 150;
		josh.up ();
		josh.forward (length / 2);
		josh.left (90);
		josh.forward (length / 4);
		josh.right (90);
		josh.down ();
		for (var i = 0; i < 3; i++) {
			josh.right (120);
			draw (length);
		}
		josh.done ();
		__pragma__ ('<use>' +
			'turtle' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Turtle = Turtle;
			__all__._allTurtles = _allTurtles;
			__all__._debug = _debug;
			__all__._defaultElement = _defaultElement;
			__all__._defaultTurtle = _defaultTurtle;
			__all__._height = _height;
			__all__._ns = _ns;
			__all__._offset = _offset;
			__all__._rightSize = _rightSize;
			__all__._svg = _svg;
			__all__._width = _width;
			__all__.abs = abs;
			__all__.back = back;
			__all__.begin_fill = begin_fill;
			__all__.bgcolor = bgcolor;
			__all__.circle = circle;
			__all__.clear = clear;
			__all__.color = color;
			__all__.distance = distance;
			__all__.done = done;
			__all__.down = down;
			__all__.draw = draw;
			__all__.end_fill = end_fill;
			__all__.forward = forward;
			__all__.goto = goto;
			__all__.home = home;
			__all__.i = i;
			__all__.josh = josh;
			__all__.left = left;
			__all__.length = length;
			__all__.pensize = pensize;
			__all__.pos = pos;
			__all__.position = position;
			__all__.reset = reset;
			__all__.right = right;
			__all__.setDefaultElement = setDefaultElement;
			__all__.up = up;
		__pragma__ ('</all>')
	}) ();
