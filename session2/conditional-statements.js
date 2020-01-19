

// let i = 36;

// if(i <= 5 && i > 0){
//     console.log("Baby")
// } else if ( i < 10) {
//     console.log("Nhi Đồng")
// } else if (i<18){
//     console.log("Teen")
// } else if(i < 35){
//     console.log("Thanh Niên")
// } else {
//     console.log("Trung niên")
// }

// let name = "Việt"
// if(name === 'Tùng' || name === "Việt" ){
//     console.log(name, "Đẹp trai")
// }

// if(i<35){
//     console.log("Thanh niên")
// }

id = 'c4e70'
pass = 'codethechange'

// Xây 1 chương trình đăng nhập
// Nếu như người dùng đăng nhập đúng, in ra thông báo "Welcome to the wonderland"
// Nếu như người dùng đăng nhập sai, thì in ra thông báo "Đăng nhập sai, welcome to the hell"

// Chỉ cho người dùng đăng nhập sai tối đa 3 lần, sau 3 lần thông báo bạn hết quyền đăng nhập


let i = 0
let loop = true
while(loop){
    let username = prompt("Nhập username")
    let password = prompt("Nhập pass")
    if(username === id && password === pass){
        console.log("Welcome to the wonderland")
        break
    } else {
        console.log("Welcome to the hell")
        i++
        if(i==3){
            console.log("Đăng nhập đủ rồi bạn ơiii")
            loop = false
            console.log("Đă123123ng nhập đủ rồi bạn ơiii")
        }
    }
}