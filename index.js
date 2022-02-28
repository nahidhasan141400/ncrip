function enc (value,key){
    let o ='';
    if(typeof(value)=== "string"){
       o=value;
    }
    else{
        o=value.toString()
    }
    let p = o.split('');
    let n = [];
    let ns= 0 ;
    p.map((v,i)=>{
        let vc = v.charCodeAt();
        n.push(vc*key);
    });
    n.map((v)=>{
        if(ns){
            ns += `,${v}`
        }else{
            ns = v;
        }
        
    })
    return ns;
}

function dnc(value,key){
    let f = value.split(',');
    let word = [];
    let text = '';
    f.map((v)=>{
        let code = parseFloat(v)/key;
        word.push(code);
    })
    word.map((v)=>{
        let t = String.fromCharCode(v);
        text += t;
    })
    return text;
}

module.exports ={enc ,dnc};



