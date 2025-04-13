// header ========
document.querySelector(".icon-menu").addEventListener("click", () => {
    document.body.classList.toggle("lock");
    document.body.classList.toggle("menu-open");
});

//scrollTo =========
document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 30;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
        document.body.classList.remove("menu-open");
        document.body.classList.remove("lock");
    });
});

// tabs ==========
const tabButtons = document.querySelectorAll(".products__button");
const tabContents = document.querySelectorAll(".body-products");

if (tabButtons && tabContents) {
    tabButtons.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const tabId = tabBtn.getAttribute("data-id");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabBtn.classList.add("active");

            tabContents.forEach((content) => {
                content.classList.remove("active");

                if (content.id === tabId) {
                    content.classList.add("active");
                }
            });
        });
    });
}

// showmore ==========
const shopsShowMore = document.querySelector(".shops__showmore");

const hiddenElementsShops = document.querySelectorAll(".item-shops.hidden");

function showMore(elementList, event) {
    const isHidden = elementList[0].classList.contains("hidden");

    elementList.forEach((element) => {
        element.classList.toggle("hidden");
    });

    event.target.textContent = isHidden ? "Скрыть" : "Показать ещё";
}

shopsShowMore.addEventListener("click", function (event) {
    showMore(hiddenElementsShops, event);
});

// modals =====

const modalButtons = document.querySelectorAll(".modal-open");
const modalCall = document.querySelector(".modal-call");
modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        new Fancybox(
            [
                {
                    src: modalCall,
                    type: "html",
                },
            ],
            {
                closeButton: false,
                hideScrollbar: false,
            }
        );
    });
});

const modalDoneButtons = document.querySelectorAll(".next-popup");
const modalDone = document.querySelector(".modal-done");
modalDoneButtons.forEach((button) => {
    button.addEventListener("click", () => {
        new Fancybox(
            [
                {
                    src: modalDone,
                    type: "html",
                },
            ],
            {
                closeButton: false,
                hideScrollbar: false,
            }
        );
    });
});
