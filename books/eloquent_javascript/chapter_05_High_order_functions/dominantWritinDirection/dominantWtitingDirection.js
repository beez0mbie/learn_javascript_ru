require('./scripts.js')

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

//console.log(characterScript(121));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    console.log(scripts);
    
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    console.log(total);

    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  
}

console.log(textScripts('英国的狗说woof, 俄罗斯的狗说тявыывыв'));

// My solution
function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    console.log('SC',scripts);
    
    let bigger = scripts.reduce((n, {count}) => {
      return n > count ? n : count
    }, 0);
    
    if (bigger == 0) return "No scripts found";

    let direction = scripts.find(element => element.count == bigger)

    return direction.name
}

console.log(dominantDirection("Hey, مساء الخير"));
console.log(dominantDirection(""));

//Book solution

function dominantDirectionBook(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  console.log('counted', counted);
  
  if (counted.length == 0) return "No scripts found";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirectionBook("Hello!"));
// → ltr
console.log(dominantDirectionBook("Hey, مساء الخير"));
// → rtl
console.log(dominantDirectionBook(""));