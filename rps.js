const score =JSON.parse(localStorage.getItem
    ('score')) || {
       wins:0,
       losses:0,
       ties:0
      };

    updatescore();

    let isAutoPlay = false;
    let intervalId ;

    function autoplay(){
      if(!isAutoPlay){
      intervalId = setInterval(() => {
        const playemove = f1();
        f2(playemove);
      },1000);
      isAutoPlay=true;
      
    }else{
      clearInterval(intervalId);
      isAutoPlay=false;
    }
    }

    document.querySelector('.js-rock')
    .addEventListener('click',() => {
      f2('rock');
    });

    document.querySelector('.js-paper')
    .addEventListener('click',() => {
      f2('paper');
    });

    document.querySelector('.js-scissors')
    .addEventListener('click',() => {
      f2('scissors');
    });

    document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
          f2('rock');
        }
        else if(event.key==='p'){
          f2('paper');
        }
        else if(event.key==='s'){
          f2('scissors');
        }
    });
    
    function f2(playemove){

    const compMove = f1();

    if(playemove==='scissors'){
       if(compMove==='rock'){
        result = 'You Lose.';
       }else if(compMove==='paper'){
        result='You Win.';
       }else{
        result='Tie.';
       }
      }

    else if(playemove==='paper'){
       if(compMove==='rock'){
        result = 'You Win.';
       }else if(compMove==='paper'){
        result='Tie.';
       }else{
        result='You Lose.';
       }
      }

    else{
      if(compMove==='rock'){
       result = 'Tie.';
     }else if(compMove==='paper'){
      result='You Lose.';
     }
     else{
      result='You Win.';
     }
    }

    if(result==='You Win.'){
      score.wins+=1;
    }
    else if(result==='You Lose.'){
      score.losses+=1;
    }
    else{
      score.ties+=1;
    }

       localStorage.setItem('score',JSON.stringify(score));

      updatescore();

       document.querySelector('.js-result').innerHTML=result; 
        
       document.querySelector('.js-moves')
       .innerHTML=`You <img src="${playemove}-emoji.png" class="move-icon">
    <img src="${compMove}-emoji.png" class="move-icon">
    Computer`; 
    
}

  function updatescore(){
    document.querySelector('.para')
      .innerHTML =`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
    
  }

  function f1(){

    const randomNumber=Math.random()

     let compMove = '';

  if(randomNumber >= 0 && randomNumber<1/3){
     compMove = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
     compMove = 'paper';
  }
  else {
     compMove = 'scissors';
  }
  return compMove;
  }
