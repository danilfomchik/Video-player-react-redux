export const onPageChange = (searchRef) => {
    searchRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
};

export const enableHorizontalScroll = (containerRef) => {
    if (containerRef.current) {
        containerRef.current.addEventListener(
            "wheel",
            (e) => {
                e.preventDefault();

                console.log(e.deltaY);

                containerRef.current.scrollLeft += e.deltaY;
            },
            { passive: false }
        );
    }
};
