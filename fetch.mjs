const response = await fetch(
  "https://stackoverflow.com/api/recent-chat?tags=node.js%20json%20response%20authorize.net&_=1667123026001",
  {
    method: "GET",
  }
);

const data = await response.json();

console.log(data.rooms[0].tags);
