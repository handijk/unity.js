(function (window) {

    function Local() {
        head.js('jquery', 'io', this.init);
    }

    var p = Local.prototype;

    p.init = function () {

        this = $(this), local = this;
	
        this.socketio = io.connect('http://handijk.no.de');
		
	this.socket.on('error', function (reason) {
	    local.trigger('connection_error', reason);
        });

	this.socket.on('connect', function () {
	    local.trigger('connection_ready');
	});        
    }

    window.local = new Local();

})(window);

local.on('connection_ready', function () { console.log('we hebben verbinding!'); });

    /*socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });*/
