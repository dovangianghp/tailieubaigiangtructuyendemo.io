// function ktchacchan() {
//     var kt = document.getElementById("btnhuy").value;
//     var x = kt.split(',');
//     if (x[0] == "true") {
//         var n = confirm("Bạn có chắc chắn ko!");
//         if (n == true) {
//             return true;
//         } else { return false; }
//     }
// }

let btnDK = document.querySelectorAll(".btndkx");
let btnHuy = document.querySelectorAll(".btnh");

for(var i=0;i<btnDK.length;i++){
    btnDK[i].addEventListener('click', function (e) {
        console.log(e.target.parentNode);
        e.target.parentNode.outerHTML =
            `
        <div class="boxkt">
                    <div class="btnb1"><i class="iconF green fas fa-check-circle"></i><i>Đã đăng kí</i></div>
                    
                        <div class="btnb2"><button    class="btnh" name="btnhuy"><i
                                    class="iconF red far fa-trash-alt"></i><span>Hủy</span></button></div>
  
        `;
        toastMess("Đăng kí thành công");
        update();
        console.log(btnHuy);
        
    });
}
for(var i=0;i<btnHuy.length;i++){
    btnHuy[i].addEventListener('click', function (e) {
        console.log(e.target.parentNode.parentNode.parentNode)
        if (confirm("Bạn có chắc chắn hủy")) {
            e.target.parentNode.parentNode.parentNode.outerHTML =
                `
        <div class="btna"><button   class="btndkx" name="btndk"><i
                            class="iconF fas fa-sign-in-alt"></i><span>ĐĂNG
                            KÍ</span></button></div>
        `;
        toastMess("Hủy thành công");
            update();
            console.log(this);
            console.log(btnDK);
        }
    });

}
function update() {
    btnDK = document.querySelectorAll(".btndkx");
    btnHuy = document.querySelectorAll(".btnh");
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
    setTimeout(function () {
        contain.removeChild(toast);
    }, 8000);
}