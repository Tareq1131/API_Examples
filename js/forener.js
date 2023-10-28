const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => display(data));
}

const display = user =>{
 
 const nameTag = document.getElementById('name');
 nameTag.innerHTML = user.results[0].name.title +' '+  user.results[0].name.first + ' '+ user.results[0].name.last

 const genderTag = document.getElementById('gender');
 genderTag.innerHTML = user.results[0].gender

 const locationTag = document.getElementById('location');
 locationTag.innerHTML = user.results[0].location.city

 const imgTag = document.getElementById('img');
 imgTag.src =user.results[0].picture.medium

 const emailTag = document.getElementById('email');
 emailTag.innerHTML = user.results[0].email
 console.log(user.results[0].email);
}

loadUser();