var res = fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1))

function foo(arr){
    for(var i=0; i<arr.length; i++){
        var div = document.createElement("div");
        div.style.color = "blue"
        div.style.fontSize = "32px"
        div.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${arr[i].id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${arr[i].title}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${arr[i].body}</h6>
  </div>
</div>`;
document.body.append(div)
    }
}