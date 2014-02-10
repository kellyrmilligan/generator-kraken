
<% if (requireJs) { %>

requirejs.config({
    paths: {}
});

require([/*, Dependencies */], function () {

    'use strict';

    var app = {
        initialize: function () {
            // Your code here
        }
    };

    app.initialize();

});

<% } %>
