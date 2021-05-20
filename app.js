const lijst=document.getElementById('cafe-list')

// create element en render in doc
function renderCafe(doc){
  let li=document.createElement('li')
  let name=document.createElement('h3')
  let city=document.createElement('span')

  li.setAttribute('data-id',doc.id)
  name.textContent=doc.data().name
  city.textContent=doc.data().city

  li.appendChild(name)
  li.appendChild(city)
  lijst.appendChild(li)
}



db.collection('cafes').get().then((snapshot)=>{
    console.log(snapshot.docs)   // toont de array maar niet de inhoud
    snapshot.docs.forEach(doc => console.log(doc)) // forEach toont de docs nu apart, geen data!
    snapshot.docs.forEach(doc => console.log(doc.data())) // data() is methode die data toont
    snapshot.docs.forEach(doc => console.log(doc.data().name))  // toont nu veld inhoud per regel

    // hieronder de render, via functie
    snapshot.docs.forEach(doc=> {
      renderCafe(doc)
    })
})
