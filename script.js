let btn = document.querySelectorAll('button')
        let winner = document.querySelector('.winner')
        let score = [0,0]

        for(i = 0; i<btn.length; i++){
            btn[i].addEventListener("click", toss)
        }
        function toss(e){
             // user selection
            user_choice = e.target.innerText

            // perform toss 
            let choices = ['Head', 'Tail']
            random = choices[parseInt(Math.random() * choices.length)]

            if(user_choice == random){
                message = 'You won!'
                score[0]++
            }else{
                message = 'Computer Won!'
                score[1]++
            }
            winner.innerText = `${message} 
                  User: ${score[0]} Computer: ${score[1]}`

        }
        