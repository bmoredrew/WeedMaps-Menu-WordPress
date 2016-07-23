(function() {

// Localize jQuery variable
var jQuery;

if (document.getElementById("#weedmenuPane") == null) {
  document.write('<div id="weedmenuPane"></div>');
}

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.9.1') {
  var script_tag = document.createElement('script');
  script_tag.setAttribute("type","text/javascript");
  script_tag.setAttribute("src",
    "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
  if (script_tag.readyState) {
    script_tag.onreadystatechange = function () { // For old versions of IE
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        scriptLoadHandler();
      }
    };
  } else {
    script_tag.onload = scriptLoadHandler;
  }
  // Try to find the head, otherwise default to the documentElement
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
  // The jQuery version on the window is the one we want to use
  jQuery = window.jQuery;
  main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
  // Restore $ and window.jQuery to their previous values and store the
  // new jQuery in our local jQuery variable
  jQuery = window.jQuery.noConflict(true);
  // Call our main function
  main();
}

/******** Our main function ********/
function main() {
  jQuery(document).ready(function($) {

    if (typeof wmenu_id == "undefined" || wmenu_id == null) {
      var listing_id = $("#weedmenuPane").attr("data-listing-id");
    }
    else {
      var listing_id = wmenu_id
    }
    if (typeof wmenu_type == "undefined" || wmenu_type == null) {
      var listing_type = "dispensaries"
    }
    else {
      var listing_type = wmenu_type
    }
    /******* Load CSS *******/
    var css_link = $("<link>", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://d2kxqxnk1i5o9a.cloudfront.net/assets/embedded_menu-7eef5fe8b9459b92f1926b1bb57a62ba.css"
    });
    css_link.appendTo('head');


    /******* Load HTML *******/
    var url = "//weedmaps.com/"+listing_type+"/"+listing_id+"/menu_items.js?callback=?";
    $.ajax({
      url: url,
      dataType: 'jsonp'
      //success: buildMenuHtml
    });
  });
}

var buildMenuHtml = function(data) {
  jQuery(document).ready(function($) {
    $("#weedmenuPane").html(data)
  });
}

})(); // We call our anonymous function immediately
