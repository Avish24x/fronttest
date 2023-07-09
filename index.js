function disableScroll(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}

// Attach event listener to the document
document.addEventListener("wheel", disableScroll, { passive: false });
