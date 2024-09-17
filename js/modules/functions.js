/**
 * Show block, when user clicks on link.
 * @param {number} defaultValue
 */
export function showBlock(defaultValue = 0) {
    // Get all div elements with data-block-parent attribute.
    let parentElements = document.querySelectorAll("[data-block-parent]");

    // Go through a loop for each of element.
    parentElements.forEach(function (parentElement) {
        // Get all links with data-block-link attribute.
        const childlinks = parentElement.querySelectorAll("[data-block-link]");

        // Get all items with data-block-item attribute.
        const childblocks = parentElement.querySelectorAll("[data-block-item]");
        if (defaultValue) {
            addActiveByDefault(childlinks, defaultValue);
            addActiveByDefault(childblocks, defaultValue);
        }

        // Go through a loop for each of links.
        childlinks.forEach(function (childlink) {
            // Listen user's click on the link.
            childlink.addEventListener("click", function (element) {
                // Removes active class from links and items
                removeActives(childlinks);
                removeActives(childblocks);
                // Get attribute of link element
                let attrElement = childlink.dataset.blockLink;
                childlink.classList.add("active");

                // Go through a loop for each of items.
                childblocks.forEach(function (childblock) {
                    // Get attribute of item element
                    let attrBlock = childblock.dataset.blockItem;
                    // Check if attribute of link equals attribute of item.
                    // If true, add an active class to item element.
                    if (attrBlock === attrElement) {
                        childblock.classList.add("active");
                    }
                });
            });
        });
    });
}

/**
 * Add active to the element.
 * It is for to select default element.
 * @param {object} elements
 * @param {number} defaultValue
 */
function addActiveByDefault(elements, defaultValue) {
    elements.forEach(function (element) {
        let attrElement;
        // Check if element has an attribute 'data-block-link' or 'data-block-item'.
        // If one of the conditions is true,
        // then to set an attribute value to the attrElement variable.
        if (element.hasAttribute("data-block-link")) {
            attrElement = element.dataset.blockLink;
        } else if (element.hasAttribute("data-block-item")) {
            attrElement = element.dataset.blockItem;
        }
        // Check if an attribute value equals default value.
        // If true, add active class.
        if (attrElement == defaultValue) {
            element.classList.add("active");
        }
    });
}

/**
 * Remove active class from elements.
 * @param {object} elements
 */
function removeActives(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active");
    });
}

export function clickPhoto() {
    let parentImages = document.querySelectorAll("[data-parent-images]");

    parentImages.forEach(function (parentImage) {
        let blockImages = parentImage.querySelectorAll("[data-image]");
        blockImages.forEach(function (blockImage) {
            let photos = blockImage.querySelectorAll("img");
            let mainPhoto = parentImage.querySelector(
                "[data-main-image] > img"
            );
            photos.forEach(function (photo) {
                photo.addEventListener("click", function () {
                    mainPhoto.removeAttribute("src");
                    mainPhoto.setAttribute("src", photo.getAttribute("src"));
                });
            });
        });
    });
}

export function getPosts() {
    let posts = document.querySelectorAll("[data-posts]");
    posts.forEach(function (post) {
        showPosts(post);
    });
}

function showPosts(post) {
    let buttonLoad = post.querySelector("[data-posts-btn]");
    let currentItems = 3;
    // let postLength = post.querySelectorAll(".post__item").length;
    buttonLoad.addEventListener("click", function (e) {
        let elementList = [...post.querySelectorAll("[data-post]")];
        for (let i = currentItems; i < currentItems + 3; i++) {
            if (elementList[i]) {
                setTimeout(function () {
                    elementList[i].style.display = "flex";
                });
            }
        }
        currentItems += 3;
        if (currentItems >= elementList.length) {
            buttonLoad.classList.add("hide");
        }
    });
}
