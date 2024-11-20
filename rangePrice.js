const minSlider = document.getElementById("my-price-range-min-slider");
const maxSlider = document.getElementById("my-price-range-max-slider");
const minDisplay = document.getElementById("my-price-range-min");
const maxDisplay = document.getElementById("my-price-range-max");

const minPrice = parseInt(minSlider.min);
const maxPrice = parseInt(maxSlider.max);

minSlider.addEventListener("input", () => {
    let minValue = parseInt(minSlider.value);
    let maxValue = parseInt(maxSlider.value);

    // Prevent overlap
    if (minValue >= maxValue - 10) {
        minSlider.value = maxValue - 10;
        minValue = maxValue - 10;
    }

    minDisplay.textContent = `$${minValue}`;
});

maxSlider.addEventListener("input", () => {
    let minValue = parseInt(minSlider.value);
    let maxValue = parseInt(maxSlider.value);

    // Prevent overlap
    if (maxValue <= minValue + 10) {
        maxSlider.value = minValue + 10;
        maxValue = minValue + 10;
    }

    maxDisplay.textContent = `$${maxValue}`;
});
