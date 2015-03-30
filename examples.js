x = true;
var not_a_camel_case = null;
if (not_a_camel_case == null) window.alert(x);

var justResult = justAFunction({x: true});

function justAFunction(obj) {
    var result = z + 1;
    var z = result + "wrong quotes";

    for (globalKey in obj) {
        // no if => argues
        z = globalKey;
    }

    for (var localKey in obj) {
        if (obj.hasOwnProperty(localKey)) {
            // has if => passes
            z = lateDefFunction(localKey);
        }
    }

    var lateDefFunction = function() {}
}
