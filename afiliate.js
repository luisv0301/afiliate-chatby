const rewards = document.getElementById("rewards");
const rewardsBtn = document.getElementById("rewards-btn");
const withdraws = document.getElementById("withdraws");
const withdrawsBtn = document.getElementById("withdraws-btn");
const refMessage = document.querySelector(".afiliate__message--error");
const tokenBtn = document.getElementById("tokenBtn");
const tokenBtnSave = document.getElementById("tokenBtn--save");
const btnGroup = document.getElementById("btn-group");
const copyBtn = document.getElementById("copy-btn");
const afiliateTextField = document.getElementById("afiliate");
const refVerificationEndpoint =
  "https://hook.us1.make.com/der9nnpadnybyd7hjujyiviy7ass9oht";

/* --------Get url params------- */

const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);

const workspace_id = urlParams.get("workspace_id");
const workspace_name = urlParams.get("workspace_name");
const owner_name = urlParams.get("owner_name");
const owner_email = urlParams.get("owner_email");

const dataURL = {
  workspace_id,
  workspace_name,
  owner_name,
  owner_email,
};

console.log("data que llega desde la URL:", dataURL);

//snazzy-khapse-28b8e0.netlify.app/afiliates?workspace_id="155"&workspace_name="Name"&owner_email="correo@gmail.com"&owner_name="Pepe Jose"

https: rewardsBtn.addEventListener("click", () => {
  console.log("click en tab");
  withdraws.style.display = "none";
  rewards.style.display = "table";

  withdrawsBtn.classList.remove("tab--active");
  rewardsBtn.classList.add("tab--active");
});

withdrawsBtn.addEventListener("click", () => {
  console.log("click en tab");
  rewards.style.display = "none";
  withdraws.style.display = "table";

  rewardsBtn.classList.remove("tab--active");
  withdrawsBtn.classList.add("tab--active");
});

//Verify is in frame

const isInIframe = () => (window.frameElement ? true : false);

//Handle Update ref code

tokenBtn.addEventListener("click", () => {
  if (refMessage) {
    refMessage.style.display = "none";
  }
  btnGroup.classList.toggle("btn--inactive");
  tokenBtnSave.classList.toggle("btn--inactive");
  afiliateTextField.disabled = false;
  afiliateTextField.focus();
});

tokenBtnSave.addEventListener("click", () => {
  updateRefCode();
});

//Handle Update ref code call

const updateRefCode = () => {
  if (refMessage) {
    refMessage.style.display = "none";
  }

  const textFieldValue = afiliateTextField.value;

  if (textFieldValue === "") {
    refMessage.textContent = "Debe ingresar un codigo";
    refMessage.style.display = "block";
    refMessage.style.color = "red";
    return;
  }

  const data = {
    workspace: {
      workspace_id,
      workspace_name,
      owner_name,
      owner_email,
    },
    affiliateRef: textFieldValue,
  };

  /*
  const data = {
    workspace: {
      workspace_id: "34950",
      workspace_name: "Tienda del sol",
      owner_name: "Alberto Baron",
      owner_email: "alberto.baron2005@gmail.com",
    },
    affiliateRef: textFieldValue,
  };
  */

  fetch(refVerificationEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "refexists") {
        refMessage.textContent =
          "No se pudo actualizar. El codigo ya se encuentra en uso, intente con otro";
        refMessage.style.display = "block";
        refMessage.style.color = "red";
        afiliateTextField.value = "";
      }

      if (data.status === "success") {
        refMessage.textContent = "Codigo actualizado correctamente";
        refMessage.style.color = "green";
        refMessage.style.display = "block";
        afiliateTextField.disabled = true;
        btnGroup.classList.toggle("btn--inactive");
        tokenBtnSave.classList.toggle("btn--inactive");
      }
    })
    .catch((error) => {
      console.error(error);
      refMessage.textContent =
        "No se pudo actualizar. El codigo ya se encuentra en uso, intente con otro";
      refMessage.style.display = "block";
      refMessage.style.color = "red";
      afiliateTextField.value = "";
    });
};

// ------Copy text---

const copyToClipboard = () => {
  const textFieldValue = afiliateTextField.value;
  var text = "https://www.chatby.io/register?ref=" + textFieldValue;
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};

copyBtn.addEventListener("click", () => {
  copyToClipboard();
});

// Paint data tables

const paintRewardsRow = (data) => {
  const template = `
  <td> ${data.created}</td>
  <td>ChatFood</td>
  <td>
    <span class="afiliate__status">
      <span class="afiliate__circle"></span>${data.status}</span
    >
  </td>
  <td>${data.dateAvailability}</td>
  <td>${data.amount}</td>
            `;

  const row = document.createElement("tr");
  row.innerHTML = template;
  console.log("row:", row);
  rewards.appendChild(row);
  //rewards.insertAdjacentHTML("beforeend", row);
};

const paintWithdrawsRow = (data) => {
  const template = `
  <td>${data.date}</td>
  <td>${data.airtm}</td>
  <td>${data.status}</td>
  <td>${data.amount}</td>
            `;

  const row = document.createElement("tr");
  row.innerHTML = template;
  withdraws.appendChild(row);
  //withdraws.insertAdjacentHTML("beforeend", row);
};

// ----------paint initial data-----------

const paintInitialData = (data) => {
  const currency = data.currency;

  document.getElementById("ownerName").textContent = owner_name;
  document.getElementById("workspaceID").textContent = workspace_id;
  document.getElementById("workspaceName").textContent = workspace_name;

  document.getElementById("afiliate").value = data.affiliateRef;
  document.getElementById("aprovedRewards").textContent =
    currency + data.aprovedRewards;
  document.getElementById("pendingRewards").textContent =
    currency + data.pendingRewards;
  document.getElementById("totalEarned").textContent =
    currency + data.totalEarned;
  document.getElementById("totalMonthlyEarned").textContent =
    currency + data.totalMonthlyEarned;
  document.getElementById("month").textContent = data.month;
  document.getElementById("year").textContent = data.year;

  data.rewards.forEach((el) => paintRewardsRow(el));
  data.withdrawals.forEach((el) => paintWithdrawsRow(el));
};

// ------- get initial data -----------

const getInitialData = () => {
  const endpoint = "https://hook.us1.make.com/ewmnitqoahhktm2m925hacl5hjnlnwfk";

  const data = {
    workspace: {
      workspace_id,
      workspace_name,
      owner_name,
      owner_email,
    },
  };

  /*
  const data = {
    workspace: {
      workspace_id: "34950",
      workspace_name: "Tienda del sol",
      owner_name: "Alberto Baron",
      owner_email: "alberto.baron2005@gmail.com",
    },
  };
*/
  fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        console.log("data inicial", data.response);
        paintInitialData(data.response);

        const overlay = document.getElementById("overlay");
        const overlayContent = document.getElementById("overlay__content");
        overlayContent.classList.add("fade-down");
        overlay.classList.add("fade-out");
      } else {
        const url = new URL("https://chatby.io/affiliate-sign-up");
        url.searchParams.set("workspace_id", workspace_id);
        url.searchParams.set("workspace_name", workspace_name);
        url.searchParams.set("owner_name", owner_name);
        url.searchParams.set("owner_email", owner_email);

        const urlOnError = "https://www.youtube.com/?app";
        window.location.assign(urlOnError);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

getInitialData();
