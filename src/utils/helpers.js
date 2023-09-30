export const onPageChange = (searchRef) => {
    searchRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
};
