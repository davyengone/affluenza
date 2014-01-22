

/*locStream = new Meteor.Collecti('loc');

locStream.on('update', function(update) {
      //var color = update.lang in langColor ? langColor[update.lang] : '#CD5C5C';
      var coords = getXY(update.coords[0], update.coords[1]);
     // var circle = paper.circle().attr({fill: color, stroke: "#fff", r: 0}).attr(coords);
     // var msg = update.msg;
      //var msgHover;

      circle.animate({r: 5}, 1000, "elastic");
      addHover(circle, msg, paper);

      setTimeout(function(){
        circle.remove();
      }, 20000);
    });
  });
    // convert lat and long into x and y coords
  function getXY(lat, lon) {
    return {
      cx: lon * 2.6938 + 465.4,
      cy: lat * -2.6938 + 227.066
    };
  };
  */
 