(function (/* root, doc */) {

    window.ref = ``;
  
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
  
    function getUtmsFromUrl() {
        var list = {};
        let tracks = window.location.search.substr(1).split("&");
       // debugger;
  
        // get from url
        for (let i = 0; i < tracks.length; i++) {
            let item = tracks[i].split("=");
            if (item[0]) {
                list[item[0]] = item[1];
            }
        };
  
        // if empty, get from cookies
        if (list && !list.length) {
            // debugger;                            
            var cookieKeys = ["gh_utm_campaign", "gh_utm_content", "gh_utm_medium", "gh_utm_term", "gh_utm_source"];
            for (cookieKey of cookieKeys) {
                var cookieVal = getCookie(cookieKey);
                if (cookieVal) {
                    list[cookieKey] = cookieVal;
                }
            }
        }
  
        return list;
    }
  
    function initGhUtm(verbose, fieldSelector) {
        // debugger;
        if (fieldSelector) {
            var fields = document.querySelectorAll(fieldSelector);
            var cookie_jar = getUtmsFromUrl();
            for (field of fields) {
                var field_name = "gh_" + field.getAttribute("name");
                if (field_name && field_name.indexOf("utm") > -1) {
                    // field.parentNode.style.display = "none";
                    if (cookie_jar[field_name]) {
                        field.value = cookie_jar[field_name];
                    }
                    if (verbose) {
                        console.log("UTM field: " + field_name);
                    }
                } else {
                    if (verbose) {
                        console.log("Other field: " + field_name);
                    }
                }
            }
        }
    }
  
    function setUtmCookies() {
        var cookie_jar = getUtmsFromUrl();
        if (cookie_jar && Object.keys(cookie_jar).length > 0) {
            var keys = Object.keys(cookie_jar);
            for (key of keys) {
                var cookie_val = cookie_jar[key];
                document.cookie = 'gh_' + key + "=" + cookie_val + ";path=/";
            }
        }
    }
  
    setUtmCookies();
  
    window.addEventListener('load', (event) => {
        initGhUtm(false, "#conversion-form input");
          
        var iconBr = document.createElement("img");
        iconBr.className = "flag";
        iconBr.setAttribute("width", 26);
        iconBr.setAttribute("src", "https://dk9suync0k2va.cloudfront.net/js/rd/stable/flags/4x3/br.svg");
        //document.querySelector("#select2-chosen-2").appendChild(iconBr);
    });
  
  }(window, document));
  