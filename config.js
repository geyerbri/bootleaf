var config = {
	"title": "Map",
	"start": {
		// "maxZoom": 16,
		"center": [51.531560, -0.156757],
		"zoom": 4,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "About the map",
		"contents": "<p>This map is designed to map human and nonhuman presence across a Victorian landscape in order to allow users to explore how Victorians defined, challenged, and altered what it meant to be human against a nonhuman backdrop. Such humanist ideals can include, but are not limited to, issues of race, class, gender, sexuality, and ability, and how Victorian's perceived these ideals in the precarious zones of nonhuman entanglement and proximity. <br> Using this open source version of Bootleaf, created by Brian McBride and improved by IAG-geo led by Stephen Lead, users can use this map and the associated query widget to target any text or attribute designated within the map.</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
			//"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//http://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
		"history": {
			"position": "bottomleft"
		},
		"bookmarks": {
			"position": "bottomright",
			"places": [
				{
				"latlng": [
					51.531209, -0.157110
				],
				"zoom": 12,
				"name": "Regents Park",
				"id": "a148fa354ba3",
				"editable": true,
				"removable": true
				}
			]
		}
	},
	// "activeTool": "identify", // options are identify/coordinates/queryWidget
	"basemaps": ['esriGray', 'esriDarkGray', 'esriStreets', 'OpenStreetMap', "Aerial"],
	"bing_key": "enter your Bing Maps key",
	//"mapboxKey": "pk.eyJ1IjoiYnVybmxleTIiLCJhIjoiY2s1aWpucm13MDlrcTN0cDRsMHhpaTdzZiJ9.hYC-K6YuQGmhlzU9ERFlQA",
	// "defaultIcon": {
	// 	"imagePath": "http://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "ArcGIS Layers",
			"layers" : ["Puck_Map"/*, "Hound", "Flush", "Vanity_Fair"*/]
		},	
			],
	
	"projections": [
		{4269: '+proj=longlat +ellps=GRS80 +datum=NAD83 +no_defs '}
	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
/*	{
    "id": "puck",
    "name": "Puck",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/puck.geojson",
    "icon": {
        "iconUrl": "./img/dog.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  "minZoom": 12
	   }
		
	},
	
		{
    "id": "flush",
    "name": "Flush",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/flush.geojson",
    "icon": {
        "iconUrl": "./img/dog.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
		  
	  	"minZoom": 12
	  }
	},
		{
    "id": "hound",
    "name": "Hound",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/hound.geojson",
    "icon": {
        "iconUrl": "./img/sherlock.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  	"minZoom": 12
	   }
	},
			{
    "id": "vanityfair",
    "name": "Vanity Fair",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/vanityfair.geojson",
    "icon": {
        "iconUrl": "./img/moneybags.png",
        "iconSize": [24,28]
    },
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 10,
    "weight": 0.5,
    "opacity": 1,
    "color": '#727272',
    },
	  "visible": false,
	  "label": {
	  	"name": "Character",
	  "minZoom": 12
	   }
	},
		{
    "id": "VF_Species",
    "name": "VF Species",
    "type": "geoJSON",
    "cluster": true,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/VF_Species.geojson",
		},
*/
		{
			"id": "Puck_Map",
			"name": "Puck Attributes (feature)",
			"type": "agsFeatureLayer",
			"cluster": false,
			"showCoverageOnHover": false,
			"removeOutsideVisibleBounds": true,
			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/PuckMap/FeatureServer/0",
			"popup": true,
			"tooltipField": "Species",
			"outFields": [
				{"type": "OID",	"name": "FID"},
				{"name": "Character", "alias": "Character"},
				{"name": "Species", "alias": "Species"},
				{"name": "Location", "alias": "Location"},
				{"name": "Class", "alias": "Class"},
				{"name": "Gender", "alias": "Gender"},
				{"name": "Author", "alias": "Author"},
				{"name": "Breed_Race", "alias": "Race"},
			],
			"visible": true,
			"queryWidget": {
				"queries" : [
					{"name": "Character", "alias": "Character", "defaultOperator": "starts with"},
					{"name": "Species", "alias": "Species"}
				],
				"outFields": [
					{"name": "Character", "alias": "Character"},
					{"name": "Species", "alias": "Species"},
				]
			},
			"style": {
				"stroke": true,
		    "fillColor": "#00FFFF",
		    "fillOpacity": 0.5,
		    "radius": 10,
		    "weight": 0.5,
		    "opacity": 1,
		    "color": '#727272'
		  },
			"minZoom": 2
		}/*,
		{
			"id": "Hound",
			"name": "Hound Attributes (feature)",
			"type": "agsFeatureLayer",
			"cluster": true,
			"showCoverageOnHover": false,
			"removeOutsideVisibleBounds": true,
			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/Hounds/FeatureServer/0",
			"popup": true,
			"outFields": [
				{"type": "OID",	"name": "FID"},
				{"name": "Title"},
				{"name": "Author"},
				{"name": "Character"},
				{"name": "Species"},
				{"name": "Gender"},
				{"name": "Breed_Race"},
				{"name": "Class"},
				{"name": "Relationship"},
				{"name": "Occupation"},
				{"name": "Color"},
				{"name": "Location"},
				{"name": "Assumed_Location", "alias": "Assumed Location"},
				{"name": "Longitude"},
				{"name": "Latitude"},
				{"name": "Degrees"},
				{"name": "Longevity"},
				{"name": "Description"},
				{"name": "Page_Number", "alias": "Page Number"},
				{"name": "Marginalized_Associates", "alias": "Marginalized Associates"},
			],
				
			"visible": true,
			"queryWidget": {
				"queries" : [
					{"name": "Title", "defaultOperator": "starts with"},
					{"name": "Character"}
				],
				"outFields": [
					{"name": "Title"},
					{"name": "Author"},
					{"name": "Character"},
					{"name": "Species"}
				]
			},
			"style": {
				"stroke": true,
		    "fillColor": "#00FFFF",
		    "fillOpacity": 0.5,
		    "radius": 10,
		    "weight": 0.5,
		    "opacity": 1,
		    "color": '#727272'
		  },
			"minZoom": 2
		},
	
			{
			"id": "Vanity_Fair",
			"name": "Vanity Fair Attributes (feature)",
			"type": "agsFeatureLayer",
			"cluster": false,
			"showCoverageOnHover": false,
			"removeOutsideVisibleBounds": true,
			"url": "https://services.arcgis.com/uHAHKfH1Z5ye1Oe0/arcgis/rest/services/Vanity_Fair/FeatureServer/0",
			"popup": true,
			"tooltipField": "Character",
			"outFields": [
				{"type": "OID",	"name": "FID"},
				{"name": "Character", "alias": "character"},
				{"name": "Species", "alias": "species"},
				{"name": "Location", "alias": "location"},
				{"name": "Class", "alias": "class"},
				{"name": "Gender", "alias": "gender"},
				{"name": "Author", "alias": "author"},
				{"name": "Breed_Race", "alias": "race"},
			],
			"visible": true,
			"queryWidget": {
				"queries" : [
					{"name": "Character", "alias": "Character", "defaultOperator": "starts with"},
					{"name": "Species", "alias": "species"}
				],
				"outFields": [
					{"name": "Character", "alias": "character"},
					{"name": "Species", "alias": "species"},
					{"name": "HEIGHT", hidden: true},
					{"name": "DIAMETER", "hidden": true}
				]
			},
			"style": {
				"stroke": true,
		    "fillColor": "#00FFFF",
		    "fillOpacity": 0.5,
		    "radius": 10,
		    "weight": 0.5,
		    "opacity": 1,
		    "color": '#727272'
		  },
			"minZoom": 2
		}
			
*/		

	]
}
