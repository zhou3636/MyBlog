// JavaScript 用于控制弹窗的打开和关闭
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const openPopup = document.getElementById("open-popup");
    const closePopup = document.getElementById("popup-close");

    // 打开弹窗
    openPopup.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    // 关闭弹窗
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    // 点击遮罩层关闭弹窗
    overlay.addEventListener("click", function () {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});