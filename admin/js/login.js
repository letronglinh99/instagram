/* Login */
let userLogin = document.querySelector(".user-login");
let passLogin = document.querySelector(".pass-login");
let btnLogin = document.querySelector(".btn-lg");

// Định nghĩa login object
const login = {
    loginValidation() {
        // Lắng nghe sự kiện
        userLogin.onblur = this.isValid;
        passLogin.onblur = this.isValid;
        btnLogin.onclick = function() {
            this.setAttribute("href", "./home.html");
        };
    },
    method() {
        // Kiểm tra đăng nhập
        this.loginValidation();
    },
    start() {
        // Thực thi các chức năng có trong login object
        this.method();
    },
};

login.start();