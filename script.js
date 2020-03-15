let sizes = [4, 8, 15, 16, 23, 42];

let allPs = d3.selectAll('p');

allPs
  .data(sizes)
  .style('font-size', function(d) {
    return `${d}px`
  });

let div = d3.select('div');

div.selectAll('p')
  .data(sizes)
  .enter()
  .append('p')
  .text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae atque, ratione, in non quas debitis minus repellat possimus vero tenetur.')
  .style('font-size', function(d) {
    return `${d}px`
  });