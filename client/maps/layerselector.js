/*/
/ create layer selector
      function createSelector(layer) {
        var sql = new cartodb.SQL({ user: 'documentation' });

        var $options = $('#layer_selector li');
        $options.click(function(e) {
          // get the area of the selected layer
          var $li = $(e.target);
          var area = $li.attr('data');

          // deselect all and select the clicked one
          $options.removeClass('selected');
          $li.addClass('selected');

          // create query based on data from the layer
          var query = "select * from gentrifi";

          if(area !== 'all') {
            query = "select * from gentrifi where layer is ";
          }

          // change the query in the layer to update the map
          layer.setQuery(query);
        });
      }
function main() {
        cartodb.createVis('map', 'http://wjohnson1261.cartodb.com/api/v2/viz/95ae4b74-7e02-11e3-a54b-0e49973114de/viz.json', {
          tiles_loader: true,
          center_lat: 50,
          center_lon: 20,
          zoom: 3
        })
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          createSelector(layers[1]);
        })
        .error(function(err) {
          console.log(err);
        });
      }

      window.onload = main;

      */