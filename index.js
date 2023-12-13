// Import stylesheets
import './style.css';

console.log(d3);

let p = d3
  .select(document.body)
  .selectAll('p')
  .datum(function () {
    console.log(this);
    return this.textContent;
  });
p = p
  .data([1, 3], (d) => d)
  .join(
    (enter) => {
      console.log(enter);
      return enter
        .append('p')
        .attr('class', 'enter')
        .text((d) => d);
    },
    (update) => {
      console.log(update);
      return update.attr('class', 'update');
    },
    (exit) => {
      console.log(exit);
      return exit.attr('class', 'exit');
    }
  );
p;

document.getElementById('clickMe').onclick = function () {};
