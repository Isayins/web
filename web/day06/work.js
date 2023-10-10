
// Exercise 1  阶乘
function multiply(n){
    let product = 1;
    for(let i=1;i<=n;i++){
        product*=i;
    }
    return product;
}


// Exercise 2 判断是否质数
function prime(n){
    if (n <= 3) {
        return n > 1;
    }
    // 不在6的倍数两侧的一定不是质数
    if (n % 6 != 1 && n % 6 != 5) {
        return false;
    }
    let sqrt = Math.sqrt(n);
    for (let i = 5; i <= sqrt; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}


 
// Exercise 3 判断是否为斐波那契数列
function fibonacci(n){
    if(n==1||n==2||n==0)  return true;
	let f1=1;  
	let f2=1;  
	let res=0;  //存放结果 
    let i=3;

    while(res<n){
        res=f1+f2;
        f2=f1;
        f1=res;
        i++;

    }
    if (res == n) return true;
	return false;
}


// Exercise 4 数组中最小元素
function minimum(a){
    let length = a.length;
    let res = a[0];
    for(let i=0;i<length;i++){
        if(a[i] < res )
            res = a[i];

    }
    return res;
} 


// Exercise 5 所有数组中元素乘积
function product(a) {
    let res = 1; 
    let length = a.length;
    for(let i=0;i<length;i++){
        res*=a[i];
    }
    return res;
}


// Exercise 6 拼接两个字符串
function  concat(a1, a2){
    let res=[];
    let length2 = a2.length;
    res = a1;
    for(let i=0;i<length2;i++){
        res.push(a2[i]);
    }
    return res;
}


// Exercise 7 
function  toString(a){
    let length = a.length;
    let res='"';
    let i=0;
    for(i;i<length-1;i++){
        res+=String(a[i])+',';
    }
    res+=a[i]+'"';
    return String(res);
}
console.log(toString([5,2,3,1]));


// Exercise 8
function apply(f, a){
    let length = a.length;
    let res=[];
    if(f==="square"){
        for(let i=0;i<length;i++){
            res.push(a[i]*a[i]);
        }
    }else if(f==="addA"){
        for(let i=0;i<length;i++){
           res= res.push(a[i]+'a');
        }
    }
    return res;
}
console.log(apply('square',[3,1,4,5]));
console.log(apply('addA',["Javascript","Python"]));