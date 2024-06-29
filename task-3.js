const content = "50px";
const padding = "8px";
const border = "4px";

function getElementWidth(content, padding, border) {
    const   a = content.replace("px", ""),
            b = padding.replace("px", ""),
        c = border.replace("px", "");
    
    return Number(a) + 2*Number(b) + 2*Number(c)
}