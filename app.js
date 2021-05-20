let lijst=document.getElementById('cafe-list')

db.collection('cafes').get().then((snapshot)=>{
    console.log(snapshot.docs)   // toont de array maar niet de inhoud
    snapshot.docs.forEach(doc => console.log(doc)) // forEach toont de docs nu apart, geen data!
    snapshot.docs.forEach(doc => console.log(doc.data())) // data() is methode die data toont
    snapshot.docs.forEach(doc => console.log(doc.data().name))  // toont nu veld inhoud per regel

    // hieronder renders de namen als een lijst
    snapshot.docs.forEach(doc=> {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(doc.data().name))
    var tussen=document.createElement('span')
    tussen.innerText=" : "
    li.appendChild(tussen)
    li.appendChild(document.createTextNode(doc.data().city))
    lijst.appendChild(li);
    })
}
)