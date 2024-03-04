const form = document.querySelector("form");
const input = document.querySelector(".input");

const replaceImages = (url) => {
    const images = document.querySelectorAll("img");
    images.forEach((image) => (image.src = url));
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: replaceImages,
        args: [input.value],
    });
});
