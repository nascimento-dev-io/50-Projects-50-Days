const loading = document.querySelector(".loading");

window.onload = () => {
  let countLoading = 0;

  loading.style.opacity = 0;

  const interval = setInterval(() => {
    loading.textContent = `${countLoading}%`;

    countLoading++;

    if (countLoading > 99) clearInterval(interval);
  }, 35);
};
