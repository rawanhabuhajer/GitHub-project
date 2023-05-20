// async function getNumRepos(login) {
//     const response = await fetch(`https://api.github.com/users/${login}/repos`);
//     const data = await response.json();
//     return data.length;
//   }
  
//   async function getWinner(user1, user2) {
//     const user1Repos = await getNumRepos(user1);
//     const user2Repos = await getNumRepos(user2);
  
//     if (user1Repos > user2Repos) {
//       return user1;
//     } else if (user2Repos > user1Repos) {
//       return user2;
//     } else {
//       return "It's a tie!";
//     }
//   }
  

//   getWinner("mojombo", "wycats").then((winner) => {
//     console.log(winner);
//   });
  
let dataOfUer1 ;
let dataOfUer2   ;
let form = document.querySelector('.playerone');
form.addEventListener('submit',function(e) {
    e.preventDefault()

    let search = document.getElementById('player_name').value;

    fetch(('https://api.github.com/users/'+search))
    .then((result) => result.json())
    .then((data) => {

    console.log(data);
      
    let containerOne = document.querySelector('#card1');
        let avatarImg = document.querySelector('.profile_img');
        avatarImg.src = data.avatar_url;
        containerOne.appendChild(avatarImg);
       
        
        let avatarName = document.querySelector('.name');
        avatarName.textContent = data.name ;
        containerOne.appendChild(avatarName);


        let followDiv = document.querySelector('#follow-div');
        let followers = document.querySelector('.followers');
        followers.textContent ='Followers :' +' '+ data.followers;
        followDiv.appendChild(followers);

        let following = document.querySelector('.following');
        following.textContent ='Following :' +' '+ data.following;        
        followDiv.appendChild(following);

        containerOne.appendChild(followDiv)

        let repoNum = document.querySelector('.reponum');
        repoNum.textContent = 'Repos Number :' +' ' +data.public_repos ;
        containerOne.appendChild(repoNum);
        
         dataOfUer1= data;

})
   

})
 

let form2 = document.querySelector('.player2');
form2.addEventListener('submit',function(e) {
    e.preventDefault()

    let search2 = document.getElementById('player_name2').value;

    fetch(('https://api.github.com/users/'+search2))
    .then((result) => result.json())
    .then((data) => {

    console.log(data);
      
    let container2 = document.querySelector('#card2');
        let avatarImg2 = document.querySelector('.profile_img2');
        avatarImg2.src = data.avatar_url;
        container2.appendChild(avatarImg2);
       
        
        let avatarName2 = document.querySelector('.name2');
        avatarName2.textContent = data.name ;
        container2.appendChild(avatarName2);


        let followDiv2 = document.querySelector('#follow-div2');
        let followers2 = document.querySelector('.followers2');
        followers2.textContent ='Followers :' +' '+ data.followers;
        followDiv2.appendChild(followers2);

        let following2 = document.querySelector('.following2');
        following2.textContent ='Following :' +' '+ data.following;        
        followDiv2.appendChild(following2);

        container2.appendChild(followDiv2)

        let repoNum2 = document.querySelector('.reponum2');
        repoNum2.textContent = 'Repos Number :' +' ' +data.public_repos ;
        container2.appendChild(repoNum2);
        
         dataOfUer2= data;

})

let resultBtn = document.getElementById('winner_btn');

resultBtn.addEventListener('click', function(e) {
    e.preventDefault()
    
    if (dataOfUer1 && dataOfUer2) {
        
    
    if (dataOfUer1.public_repos< dataOfUer2.public_repos) {
        
     
        let result = document.getElementById('playerOneResult');
        result.textContent = 'Loser';
        

        let result2 = document.getElementById('playerTwoResult');
        result2.textContent = 'Winner';
    }
    else if (dataOfUer1.public_repos > dataOfUer2.public_repos) {
        let result = document.getElementById('playerOneResult');
        result.textContent = 'Winner';
       

        let result2 = document.getElementById('playerTwoResult');
        result2.textContent = 'Loser';
    }
    else {
        let result = document.getElementById('playerOneResult');
        result.textContent = 'Tie';
        

        let result2 = document.getElementById('playerTwoResult');
        result2.textContent = 'Tie';
    }
    }
})

})
 




