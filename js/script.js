// const myToken = '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';

let form = document.querySelector('.search_bar');
form.addEventListener('submit',function(e) {
    e.preventDefault()

    let search = document.getElementById('search').value;

    fetch(('https://api.github.com/users/'+search))
    .then((result) => result.json())
    .then((data) => {

    console.log(data);

        let avatarDiv = document.querySelector('#avatar');
        let avatarImg = document.querySelector('.profile_img');
        avatarImg.src = data.avatar_url;
        avatarDiv.appendChild(avatarImg);
       
        
        let avatarName = document.querySelector('.name');
        avatarName.textContent = data.name ;
        avatarDiv.appendChild(avatarName);

        let followBtn = document.querySelector('#follow');
        followBtn.textContent = 'Follow' ;
        avatarDiv.appendChild(followBtn);

        let followDiv = document.querySelector('#follow-div');
        let followers = document.querySelector('.followers');
        followers.textContent =  data.followers + ' ' +'Followers';
        followDiv.appendChild(followers);

        let following = document.querySelector('.following');
        following.textContent = data.following +' '+'Following' ;        
        followDiv.appendChild(following);
    

    

    fetch(data.repos_url)
    .then((res) => res.json())
    .then((data) => {
console.log(data);
        for(let i=0; i<6; i++){
            // let l =data[i].language
            // console.log(l);
            let repoContainer = document.createElement('div');
            repoContainer.className='repos'
            let repoName = document.createElement('a');
            repoName.setAttribute('href', '#');
            repoName.className='reponame'
            repoName.textContent = data[i].name;
            repoContainer.appendChild(repoName);
            document.getElementById('boxes').appendChild(repoContainer);

            let smallContainer = document.createElement('div')
            smallContainer.className='smallcontainer'
            repoContainer.appendChild(smallContainer)

            let languages = document.createElement('p')
            languages.className='lang'
            languages.textContent =data[i].language;
            smallContainer.appendChild(languages);

            console.log(languages);

    
            if (languages.textContent === 'JavaScript') {
                let colorDiv = document.createElement('div')
                colorDiv.className = 'colorCircle'
                smallContainer.appendChild(colorDiv)
                colorDiv.style.backgroundColor = 'yellow'
            }
             if (languages.textContent === 'HTML') {
                let colorDiv = document.createElement('div')
                colorDiv.className = 'colorCircle'
                smallContainer.appendChild(colorDiv)
                colorDiv.style.backgroundColor = 'red'
            }
            if (languages.textContent === 'CSS') {
                let colorDiv = document.createElement('div')
                colorDiv.className = 'colorCircle'
                smallContainer.appendChild(colorDiv)
                colorDiv.style.backgroundColor = 'blue'
            }

        }



  
});
})
   

},{ once: true });

 





