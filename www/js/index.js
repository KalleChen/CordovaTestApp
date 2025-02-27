function navigateTo(page) {
  window.location.href = page;
}

function clickProduct() {
  window.i13n.dispatch("action", {
    I13N: {
      action: "ClickProduct",
      products: [
        {
          id: 1,
        },
      ],
    },
  });
}

document.addEventListener(
  "deviceready",
  function () {
    var server = cordova.plugins.CorHttpd;

    var config = {
      www_root: "", // absolute or relative path to your app's root
      port: 8080, // the port number to use
      localhost_only: false, // whether to listen on localhost only or all interfaces
    };

    server.startServer(
      config,
      function (url) {
        console.log("Server is live at " + url);
        // Now you can use 'http://localhost:8080/' instead of 'file://'
      },
      function (error) {
        console.error("Failed to start server: " + error);
      }
    );

    // To stop the server when it's no longer needed
    // server.stopServer();
  },
  false
);
