const main = document.querySelector("main");

const getInfoKey = (event) => {
  const key = event.key;
  const keyCode = event.keyCode;
  const keyEventCode = event.code;
  showInfoView(key, keyCode, keyEventCode);
};

const showInfoView = (key, keyCode, keyEventCode) => {
  main.innerHTML = `
  <div class="view">
        <div class="box">
          <h4>event.key</h4>
          <div class="event">
            <div class="info-key">${key === " " ? "Space" : key}</div>
          </div>
        </div>

        <div class="box">
          <h4>event.keyCode</h4>
          <div class="event">
            <div class="info-key">${keyCode}</div>
          </div>
        </div>

        <div class="box">
          <h4>event.code</h4>
          <div class="event">
            <div class="info-key">${keyEventCode}</div>
          </div>
        </div>
      </div>
  `;
};

document.addEventListener("keyup", getInfoKey);
