angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('ordersAndRequestsCtrl', function($scope) {

})
   
.controller('cartTabDefaultPageCtrl', function($scope) {

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
      
.controller('orderDetailsCtrl', function($scope) {

})
   
.controller('trackTechnicianCtrl', function($scope,uiGmapGoogleMapApi) {
	var currentLocation ={};
	if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(function(pos) {
			markOutLocation(pos)
        });
	  }
	  function markOutLocation(pos){
	  	console.log(pos);
	  	 currentLocation.lat = pos.coords.latitude;
		currentLocation.longitude = pos.coords.longitude;
		$scope.map = { center: { latitude: currentLocation.lat, longitude: currentLocation.longitude }, zoom: 13, options: {disableDefaultUI:true,mapTypeId: google.maps.MapTypeId.ROADMAP} };
	  	 $scope. current = {  
	      	id: 0,
	 		title: "Current",
		      coords: {
		        latitude: currentLocation.lat,
		        longitude: currentLocation.longitude
		      }
		  }
	  }
	     
	      console.log(currentLocation);
	
	 var markers = [
	 {"id": "0",
	 		"title": "Marker 1",
      		"coords": {
       	 		"latitude": "37.0242515598362",
        		"longitude": "-77.56141662597656"
	      }
  		},

  		{"id": "2",
	 		"title": "Marker 2",
      		"coords": {
       	 		"latitude": "37.9305707184741",
        		"longitude": "-77.57755279541016"
	      }
  		}
	];

	uiGmapGoogleMapApi.then(function(maps) {

    });

/*
  		var myLocation ="";
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
            disableDefaultUI:true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		console.log(document.getElementById("map_canvas"));
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
             myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
   // });
 	          // Defining markers for demo
        var markers = [{
            position: setPosition(37.0242515598362, -120.56141662597656),
            title: "Marker 1"
        }, {
            position: setPosition(37.9305707184741, -120.57755279541016),
            title: "Marker 2"
        }];

        // Bind markers
        
        for (var i = 0; i < markers.length; i++) {
            setMarker(markers[i], map);
            
        }   

 function setMarker(marker, map){
    var marker = new google.maps.Marker({
         position: marker.position,
        map: map,
         icon: 'img/engineer.png',
         title: marker.title
     }, function(marker) {

                // Defining event for each marker
                marker.on("click", function() {
                    alert(marker.get('marker').title);
                });

            });   
    var center = map.getCenter();
	var markerLatLng = marker.getPosition().pos;
	
	find_closest_marker(myLatlng,marker.getPosition());
   }
         // Function that return a LatLng Object to Map
    function setPosition(lat, lng) {
        return  new google.maps.LatLng(lat, lng);
    }


google.maps.event.addListener(map, "click", function (e) {
	console.log(e.latLng.lat());
	console.log(e.latLng.lng());
    //lat and lng is available in e object
    var latLng = e.latLng;

});


var closest;
function find_closest_marker(currentLocation, marker) {

	var distance = google.maps.geometry.spherical.computeDistanceBetween(marker,currentLocation);
	  if(!closest || closest.distance > distance){
      closest={marker:marker,distance:distance}
    }
    if(closest){
    //closest.marker will be the nearest marker, do something with it
    //here we simply trigger a click, which will open the InfoWindow 
    console.log(closest)
    google.maps.event.trigger(closest.marker,'click');
  }

   $http.get('https://cors-test.appspot.com/test').then(function(resp) {
    console.log('Success', resp);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
}

    //Log title of closest marker
    //console.log(markers[closest]);
*/
})
   
.controller('serviceRequest', function($scope) {

})
 