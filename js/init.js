var after;
var before;

var options = {
    containerSelector : '#container',
    bounds: {
        southWest: {
            lat: 49.185000,
            lng: 28.360614
        },
        northEast: {
            lat: 49.289704,
            lng: 28.595854
        }
    },
    center: {
        lat: 49.233476,
        lng: 28.465933
    },
    markerClickCallback : markerClickHandler
};
document.addEventListener("DOMContentLoaded", function() {
    KH.prototype.initialize(options);
    initContentPanel();
    doneResizing();

    var resizeId;
    window.addEventListener('resize', function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
        var container = document.getElementById('container');
        var containerClasses = container.classList;
        applySmallStyle(containerClasses);
        resizeImage()
        if(typeof selectedPoint !== 'undefined' && selectedPoint) {
            KH.prototype.flyToTargetPoint(selectedPoint)
        }
        if(window.innerHeight < 380) {
            $('.leaflet-control-select').hide()
        } else {
            $('.leaflet-control-select').show()
        }
    }
});

$(document).on('mouseup', function(e) {
    var container = $('.leaflet-control-select-menu');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.remove();
    }
});