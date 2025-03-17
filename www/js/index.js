const deepStringify = (obj) => {
  return JSON.stringify(
    obj,
    (_, value) => {
      if (typeof value === "object" && value !== null) {
        try {
          return JSON.parse(JSON.stringify(value));
        } catch (err) {
          const error = err;
          return `[Circular or unserializable object: ${error.message}]`;
        }
      }
      return typeof value === "function"
        ? `[Function: ${value.name || "anonymous"}]`
        : value;
    },
    2
  );
};

window.log = async (...message) => {
  await fetch(`http://localhost:3002/post-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: deepStringify(message),
  });
};

window.log("Hello from the webview!");

document.addEventListener("DOMContentLoaded", function () {
  //alert("Calling DOMContentLoaded");
  document.addEventListener(
    "deviceready",
    function () {
      window.log("Device is ready!");
    },
    false
  );
});

window.log("After device ready event listener is set");

document.addEventListener(
  "deviceready",
  function () {
    FCM.getToken()
      .then((token) => {
        console.log("FCM Token:", token);
      })
      .catch((error) => console.error(error));

    FCM.onNotification((data) => {
      if (data.wasTapped) {
        console.log("Received in background:", data);
      } else {
        console.log("Received in foreground:", data);
      }
    });

    FCM.onTokenRefresh((token) => {
      console.log("Token refreshed:", token);
    });
  },
  false
);
