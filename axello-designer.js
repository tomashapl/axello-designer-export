function updatePositions() {
  $('[data-element]').each(function () {
    const $element = $(this)
    const width = $element.width()
    const height = $element.height()

    const originalWidth = parseInt($element.attr("data-original-width"))
    const originalHeight = parseInt($element.attr("data-original-height"))

    const scaleX = width / originalWidth;
    const scaleY = height / originalHeight;

    $element.find("[data-marker]").each(function () {
      const $marker = $(this)
      const x = parseFloat($marker.attr("data-x"))
      const y = parseFloat($marker.attr("data-y"))
      $marker.css("top", y * scaleY - 10)
      $marker.css("left", x * scaleX - 12)
    })
  })
}

$(window).load(function () {
  updatePositions();
});

window.addEventListener('resize', () => {
  updatePositions();
});
