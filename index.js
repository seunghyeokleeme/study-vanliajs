const devinanInfo = {
  name: "Devinan",
  age: 20,
  developer: true,
  language: ["html", "css", "javascript", "mongodb", "phyton"],
  favStudy: [
    {
      name: "nomadcorder",
      month: 3,
      like: "clone-coding"
    },
    {
      name: "생활코딩",
      month: 5,
      like: "easy-talk"
    }
  ]
};

console.log(devinanInfo.favStudy[0].month);

/* 
{} 는 object 이다.
{}는 array와 다르게 데이터에게 라벨을 붙인다. 즉 db에서 데이터리스트를 합치고 정보를 만들때 array보다 {}를 쓰는게 맞다.
그리고 object은 array 안에도 들어갈수 있다.
*/
