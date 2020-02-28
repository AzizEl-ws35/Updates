
(function() {
    var RR_ID = "RR_5e287a6135842",
        RR_EN = "RR_5dea255093907",
        countryCode = (document.documentElement.lang || document.getElementsByTagName("html")[0].getAttribute("lang") || 'EN');

    function generateScript(e) {
        var c = document.createElement("script");
        c.type = "text/javascript", c.src = "https://api.globres.io/RealRate/tc103006/BB/" + e + "/" + countryCode.toUpperCase(), document.body.appendChild(document.createComment("Start RealRate script")), document.body.appendChild(c), document.body.appendChild(document.createComment("End RealRate script "))
    }

    function SpecialDetectingCountryCode() {
        try {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function(e) {
                if (4 == this.readyState && 200 == this.status) {
                    var t = this.responseText.split("\n").find(function(e) {
                            return e.startsWith("loc=")
                        }),
                        n = t.substring(t.search("loc=") + 4, t.length);
                    null != n && 0 < n.length && ("ID" == n || "IDN" == n ? generateScript(RR_ID) : generateScript(RR_EN))
                }
            }, e.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", !0), e.send()
        } catch (e) {
            return null
        }
    }
    SpecialDetectingCountryCode();
})();
