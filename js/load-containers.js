function loadContainers(...containers) {
  containers.forEach((container, i) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `../${container}.html`, false); // must be synchronous for bootstrap affix
    xhr.send();
    document.getElementById(`${container}-container`).innerHTML = xhr.responseText;
  });
}
