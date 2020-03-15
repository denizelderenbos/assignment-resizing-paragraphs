// Genereer in d3 5 circles met een x en y positie van 25* het getal in het array.
// De 2e en 4e circles (de "even" cirkels) zijn groen gekleurd.
// De "oneven" cirkels zijn rood gekleurd.
// De radius van de cirkels is ook 25, zie het voorbeeld.

let myData = [1, 2, 3, 4, 5];

let canvas = d3.select('#canvas');

canvas.append('svg')
  .style('width', 1000)
  .style('height', 1000)
  .style('background', 'purple')

let svg = canvas.selectAll('svg');

svg.selectAll('circle')
  .data(myData)
  .enter()
  .append('circle')
  .attr('cx', function(d) {
    return d * 25;
  })
  .attr('cy', function(d) {
    return d * 25;
  })
  .attr('r', 25)
  .attr('fill', function(d, i) {
    return (i % 2 === 0) ? 'green' : 'red';
  })