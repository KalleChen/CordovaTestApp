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
