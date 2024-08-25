
const track = document.getElementById("image-track")

window.onmousedown = e => {
    // console.log("i am in msdwn")
    // e.clientX;
    track.dataset.mouseDownAt = e.clientX;
    // console.log(track.dataset)
    // console.log(e.clientX)
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;
    const current_pos = parseFloat(track.dataset.mouseDownAt)-e.clientX,
    // console.log(current_pos)
    max_val = window.innerWidth / 2;
    const percentage = (current_pos/max_val)*-100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    Math.min(nextPercentage,0);
    Math.max(nextPercentage,-100);
    for(const image of track.getElementsByClassName("image")){
        image.style.objectPosition = `${nextPercentage +100} 50%`
    }
    track.dataset.percentage = nextPercentage;
    // console.log(track.dataset)
    // console.log(percentage)
    track.style.transform = `translate(${nextPercentage}%,-50%)`
} 
window.onmouseup = e => {
    // console.log("i am in msup");
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}