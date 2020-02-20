let input = prompt("Nhap vao di: ")
let s = input.split(",")
console.log(s)
let min = s[0]
for(let i =0;i<s.length;i++)
{
    if(min > s[i]){
        min = s[i]
    }
    // sum+=Number(s[i])
}
console.log(`${min}`)