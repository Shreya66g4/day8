function findPath(tickets) {
    const graph = createGraph(tickets);
    const itinerary = [];
    dfs("A", graph, itinerary);
    return itinerary;
  }
  
  function createGraph(tickets) {
    const graph = {};
  
    for (const [from, to] of tickets) {
      if (!graph[from]) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
  
    for (const airport in graph) {
      graph[airport].sort();
    }
  
    return graph;
  }
  
  function dfs(airport, graph, itinerary) {
    const destinations = graph[airport];
  
    while (destinations && destinations.length > 0) {
      const nextAirport = destinations.shift();
      dfs(nextAirport, graph, itinerary);
    }
  
    itinerary.unshift(airport);
  }
  
  const tickets1 = [["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]];
  const tickets2 = [["A", "C"], ["A", "B"], ["C", "B"], ["B", "A"], ["B", "C"]];
  const tickets3 = [["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]];
  
  console.log(findPath(tickets1)); 
  console.log(findPath(tickets2)); 
  console.log(findPath(tickets3)); 
  