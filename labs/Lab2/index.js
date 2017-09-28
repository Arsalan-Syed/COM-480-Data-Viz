let add = (x,y) =>{return x+y};
let even = x =>{return x%2==0};
let odd = x =>{return x%2==1};
let generateRandomInteger =(min=0,max=100) =>{
  return Math.round(Math.random() * (max - min) + min);
}

let inc = (init=0,step=1)=>{
  return add(init,step);  
}

/*
Use ...<placeholder_name> to have as many arguments as you want.
You use a reduce in order to combine the list (args) into one value. The multiplication needs 2 parameters, a initial value and the next value to multiply the initial with. Next value is supplied by each element in list. Initial=1
*/
let multiply = (...args) =>{
  return args.reduce((prod,val)=>{
    return prod*val;
  },1); 
};
 
let vars={
  universe:42,
  /*
  Functional approach, recursive and has no variables
  */
  generateRandomArray:(len=50)=>{
    if(len==0){
      return [];
    } else{
      return [random()].concat(generateRandomArray(len-1));
    }   
  }
}

let gen=(len=50)=>{
    if(len==0){
      return [];
    } else{
      return [generateRandomInteger()].concat(gen(len-1));
    }       
}

let aboveUniverseAndEven=()=>{
  return x=> {   
    return x>vars.universe && even(x);
  };
};
 
let results=gen(10);
const newResults=results.filter(num=>num>42);
let resultsSquared=results.map(x=>x*x);
let resultsSum=results.reduce((sum,value)=>{
  return sum+value;
},0);

const data = [
  {a: 40, b: 'batman', c: ['black','grey']}, 
  {a: 100, b: 'superman', c: ['red','blue','black']}, 
  {a: 50, b: 'ironman', c: ['grey','red']}
];

let color=data.reduce((accum,nextValue)=>{
  return accum.concat(nextValue.c.filter(x=>!accum.includes(x)));
},[]);







/*
let abc = ()=> {
  console.log(results);
  return results.filter(num=>aboveUniverseAndEven());
};
*/

//const longWords = words.filter(word => word.length > 6);


/*


let test = () => {
  console.log(add(1,2)==3);
  console.log(add(-1,52)==51);  
}*/