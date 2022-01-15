function checktk() {
    var tk = document.getElementById("tk");

    if (tk.value == "") {
        toastMess("Bạn chưa nhập gì");
    }
    else {
        toastMess("Kết quả tìm kiếm tượng trưng");
    }
}

function toastMess(mess) {
    var contain = document.querySelector("#containFind");
    var toast = document.createElement("div");
    toast.classList.add("toast", "toast--popup");
    toast.innerHTML = `
    <div class="toast__icon">
        <i class="fas fa-bell"></i>
    </div>
    <div class="toast__body">
        <p class="toast__body__titile">Thông báo</p>
        <p class="toast__body__message">${mess}</p>
    </div>
    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>
    `;
    contain.appendChild(toast);
    setTimeout(function(){
        contain.removeChild(toast);
    },8000);
}