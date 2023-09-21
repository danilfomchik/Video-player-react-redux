export const onPageChange = (searchRef) => {
    console.log("work");

    searchRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
};
