function runProgram(input) {
    input = input.trim().split("\n");
    let [n,len] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b)
    let line = 2;
    for(let t=0;t<len;t++){
      console.log(check(arr,+input[line++])?"YES":"NO");
    }
    
    function check(arr,x){
        let i=0;
        let j=arr.length-1;
        while(i<=j){
            let mid = i+Math.floor((j-i)/2);
            if(arr[mid]==x){
                return true;
            }else if(arr[mid]>x){
                j=mid-1
            }else{
                i=mid+1
            }
        }
        return false;
    }
    
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  