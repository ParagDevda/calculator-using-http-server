async function fetching(){ 
    let inputA = document.getElementById("a")
    let a = inputA.value ;
    let inputB = document.getElementById("b")
    let b = inputB.value ;
    let path = "http://localhost:3000/sum/" ;

    // let result = await fetch(path, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ a: a, b: b })
    // });
    let result = await axios.post(path,{a:a,b:b});
    // let json = await result.json();
    console.log(result.data.sum);
}