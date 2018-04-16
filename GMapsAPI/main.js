function initMap() {
	var harrisburg = {lat: 40.261944, lng: -76.877778};
	var nyc = {lat: 40.7503, lng: -73.9931};
	var indiana = {lat: 41.534167, lng: -87.246944};
	var pittsburgh = {lat: 40.44475, lng: -79.992139};
	var baltimore = {lat: 39.3075, lng: -76.615556};
	var philly = {lat: 39.955833, lng: -75.181944};
	var newark = {lat: 40.734722, lng: -74.164167};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,													//properties of variable map
		center: nyc
	});		// ends map

	var marker1 = new google.maps.Marker({
		position: harrisburg,
		map: map,
		title: 'Harrisburg'
	});		// ends marker1

	var marker2 = new google.maps.Marker({
		position: nyc,
		map: map,
		title: 'NYC'
	});		// ends marker2

	var marker3 = new google.maps.Marker({
		position: indiana,
		map: map,
		title: 'Indiana'
	});		// ends marker3

	var marker4 = new google.maps.Marker({
		position: pittsburgh,
		map: map,
		title: 'Pittsburgh'
	});		// ends marker4

	var marker5 = new google.maps.Marker({
		position: baltimore,
		map: map,
		title: 'Baltimore'
	});		// ends marker5

	var marker6 = new google.maps.Marker({
		position: philly,
		map: map,
		title: 'Philly'
	});		// ends marker6

	var marker7 = new google.maps.Marker({
		position: newark,
		map: map,
		title: 'Newark'
	});		// ends marker7

}		// ends function