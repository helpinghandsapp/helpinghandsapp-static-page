function loadContainers(...containers) {
  containers.forEach((container, i) => {
    const containerElement = document.getElementById(`${container}-container`);
    if (container) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `../${container}.html`, false); // must be synchronous for bootstrap affix
      xhr.send();
      containerElement.innerHTML = xhr.responseText;
    }
  });
}
