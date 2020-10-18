let re;
re=/hello/; 
re=/hello/i; // i= case insensitive
// re=/hello/g; // Global search
// console.log(re);// "/hello/"
// console.log(re.source);//hello

//exec()- return results in a array or null
// const result=re.exec('hello world');//match and return the array index
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test()-return true or false
// const result=re.test('hello');
// console.log(result);

//match()-return result array or null
// const str='Hello there';
// const result=str.match(re);
// console.log(result);

//search()-return index of the first match if  not found return -1
// const str='Hello there';
// const result=str.search(re);
// console.log(result);

//replace()-return new string with some or all matches of a pattern
// const str='Hello there';
// const newStr=str.replace(re,'Hi');
// console.log(newStr);


let re;
//meta charaters
re=/^h/i;//start with
re=/d$/i;//end with
re=/^hello$/i;// begin and end with
re=/^h.llo$/i;// match any one charater
re=/^h*llo$/i;// match any charater 0 or more times
re=/gre?a?y/i;// optional charater
re = /gre?a?y\?/i;// escape charater

//brackets[] -charactersets
re = /gr[ae]y/i; //must be an a or e
re = /[gf]ray/i; //must be an g or f
re = /[^gf]ray/i; //match any thing other than g or f
re = /[A-Z]ray/i; 
re = /[a-z]ray/i; 
re = /[A-Za-z]ray/i; 
re = /[A-Za-z]ray/i; 
re = /[0-9]ray/i; 

//braces{}-quantifiers
re = /hel{2}o/i; 

//pranthesis() grouping
re = /([0-9]x){3}/i; 

//short hand charater classes
re = /\w/; //word charater
re = /\w+/;//+ one ore more word characters
re = /\W/;//non word charater
re = /\d/;//match any digit
re = /\d+/;//match any digit 1 or more times
re = /\D/;//match non digit
re = /\s/;//match whitespace character
re = /\S/;//match non whitespace character
re = /hell\b/i;//word boundary

//assertions
re=/x(?=y)/;//match x only if followed by y
re=/x(?!y)/;//match x only if not followed by y


const str = 'Hello World';


const result = re.exec(str);
console.log(result);


function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);