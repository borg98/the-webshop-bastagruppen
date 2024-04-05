export function paymentMethod() {
  const creditCheckbox = document.getElementById("credit") as HTMLInputElement;
  const invoiceCheckbox = document.getElementById(
    "faktura"
  ) as HTMLInputElement;
  const creditInputContainer = document.getElementById(
    "paymentDisplay"
  ) as HTMLDivElement;
  const orderButton = document.getElementById(
    "orderButton"
  ) as HTMLButtonElement;

  invoiceCheckbox.addEventListener("change", () => {
    if (invoiceCheckbox.checked) {
      creditInputContainer.classList.add("hidden");
      creditInputContainer.classList.remove("visible");
      orderButton.classList.add("visible");
      orderButton.classList.remove("hidden");

      creditCheckbox.checked = false;
    } else {
      orderButton.classList.add("hidden");
      orderButton.classList.remove("visible");
    }
  });

  creditCheckbox.addEventListener("change", () => {
    if (creditCheckbox.checked) {
      creditInputContainer.classList.add("visible");
      creditInputContainer.classList.remove("hidden");
      orderButton.classList.add("visible");
      orderButton.classList.remove("hidden");

      invoiceCheckbox.checked = false;
    } else {
      creditInputContainer.classList.add("hidden");
      creditInputContainer.classList.remove("visible");
      orderButton.classList.add("hidden");
      orderButton.classList.remove("visible");
    }
  });

  orderButton.addEventListener("click", (e) => {
    e.preventDefault;
    const formContainer = document.getElementById(
      "formContainer"
    ) as HTMLElement;

    const firstname = (document.getElementById("firstname") as HTMLInputElement)
      .value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement)
      .value;
    const street = (document.getElementById("street") as HTMLInputElement)
      .value;
    const zip = (document.getElementById("zip") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;

    const pTag = document.createElement("p");
    pTag.classList.add("thxPTag");
    pTag.innerHTML = `Thanks ${firstname} ${lastname} for your order! &#x1F604;<br><br>Your package will be delivered to: <br><strong>${street}, ${zip} ${city}</strong>`;

    const purchaseTag = document.createElement("p");
    purchaseTag.classList.add("purchasePTag");
    if (creditCheckbox.checked) {
      purchaseTag.innerHTML = "Payment method: <strong>Credit card</strong>";
    }
    if (invoiceCheckbox.checked) {
      purchaseTag.innerHTML =
        "Payment method: <strong>Invoice</strong> <br>The invoice will be sent to the same adress as the package";
    }

    formContainer.innerHTML = "";

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("messageContainer");
    messageContainer.appendChild(pTag);
    messageContainer.appendChild(purchaseTag);
    formContainer.appendChild(messageContainer);
  });
}
