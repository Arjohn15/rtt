function getStyles(inView) {
    const styles = {
        fixedHeaderMobile: `${inView ? "translate-y-[calc(-20px-100%)]" : "translate-y-[0%]"} duration-1000 fixed top-0 w-full bg-white z-10`,
        listStyle: "block w-full p-[1rem] hover:bg-[rgba(233,75,74,0.5)] hover:rounded-lg",
    }
    return styles;
}

export default getStyles;