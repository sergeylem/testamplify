import React, { Component } from 'react';
import classes from './Buttons.css';
import getFourRndImages from './components/getFourRndImages';

class App extends Component {
  state = {
    imgList: [
      { id: 0, img: require('./assets/images/img0.jpg'), sound: require('./assets/sounds/0.m4a'), name: 'БЕЛЫЙ ГРИБ' },
      { id: 1, img: require('./assets/images/img1.jpg'), sound: require('./assets/sounds/1.m4a'), name: 'ДУБОВИК' },
      { id: 2, img: require('./assets/images/img2.jpg'), sound: require('./assets/sounds/2.m4a'), name: 'ЛИСИЧКИ' },
      { id: 3, img: require('./assets/images/img3.jpg'), sound: require('./assets/sounds/3.m4a'), name: 'МАСЛЯТЯ' },
      { id: 4, img: require('./assets/images/img4.jpg'), sound: require('./assets/sounds/4.m4a'), name: 'МОХОВИК' },
      { id: 5, img: require('./assets/images/img5.jpg'), sound: require('./assets/sounds/5.m4a'), name: 'ОПЯТА' },
      { id: 6, img: require('./assets/images/img6.jpg'), sound: require('./assets/sounds/6.m4a'), name: 'ПОДБЕРЁЗОВИК' },
      { id: 7, img: require('./assets/images/img7.jpg'), sound: require('./assets/sounds/7.m4a'), name: 'ПОДОСИНОВИК' },
      { id: 8, img: require('./assets/images/img8.jpg'), sound: require('./assets/sounds/8.m4a'), name: 'РЫЖИК' },
      { id: 9, img: require('./assets/images/img9.jpg'), sound: require('./assets/sounds/9.m4a'), name: 'СЫРОЕЖКА' },
      { id: 10, img: require('./assets/images/img10.jpg'), sound: require('./assets/sounds/10.m4a'), name: 'ГРУЗДИ' },
      { id: 11, img: require('./assets/images/img11.jpg'), sound: require('./assets/sounds/11.m4a'), name: 'ВЕШЕНКА' },
      { id: 12, img: require('./assets/images/img12.jpg'), sound: require('./assets/sounds/12.m4a'), name: 'ВОЛНУШКА' },
      { id: 13, img: require('./assets/images/img13.jpg'), sound: require('./assets/sounds/13.m4a'), name: 'НАВОЗНИК' },
      { id: 14, img: require('./assets/images/img14.jpg'), sound: require('./assets/sounds/14.m4a'), name: 'ГОВОРУШКА' },
      { id: 15, img: require('./assets/images/img15.jpg'), sound: require('./assets/sounds/15.m4a'), name: 'КОРОЛЕВСКИЙ ОПЁНОК' },
      { id: 16, img: require('./assets/images/img16.jpg'), sound: require('./assets/sounds/16.m4a'), name: 'СВИНУШКА' },
      { id: 17, img: require('./assets/images/img17.jpg'), sound: require('./assets/sounds/17.m4a'), name: 'ШАМПИНЬОН' },
      { id: 18, img: require('./assets/images/img18.jpg'), sound: require('./assets/sounds/18.m4a'), name: 'СТРОЧОК' },
      { id: 19, img: require('./assets/images/img19.jpg'), sound: require('./assets/sounds/19.m4a'), name: 'СТРОФАРИЯ СИНЕ-ЗЕЛЕНАЯ' },
      { id: 20, img: require('./assets/images/img20.jpg'), sound: require('./assets/sounds/20.m4a'), name: 'ТРЮФЕЛЬ' },
      { id: 21, img: require('./assets/images/img21.jpg'), sound: require('./assets/sounds/21.m4a'), name: 'ТРУТОВИК' },
      { id: 22, img: require('./assets/images/img22.jpg'), sound: require('./assets/sounds/22.m4a'), name: 'МУХОМОР КРАСНЫЙ' },
      { id: 23, img: require('./assets/images/img23.jpg'), sound: require('./assets/sounds/23.m4a'), name: 'МУХОМОР ПАНТЕРНЫЙ' },
      { id: 24, img: require('./assets/images/img24.jpg'), sound: require('./assets/sounds/24.m4a'), name: 'МУХОМОР БЕЛЫЙ' },
      { id: 25, img: require('./assets/images/img25.jpg'), sound: require('./assets/sounds/25.m4a'), name: 'БЛЕДНАЯ ПОГАНКА' },
      { id: 26, img: require('./assets/images/img26.jpg'), sound: require('./assets/sounds/26.m4a'), name: 'РЯДОВКА ЯДОВИТАЯ' },
      { id: 27, img: require('./assets/images/img27.jpg'), sound: require('./assets/sounds/27.m4a'), name: 'ЛОЖНООПЁНОК' },
      { id: 28, img: require('./assets/images/img28.jpg'), sound: require('./assets/sounds/28.m4a'), name: 'ЛЕПИОТА КОРИЧНЕВО-КРАСНАЯ' },
      { id: 29, img: require('./assets/images/img29.jpg'), sound: require('./assets/sounds/29.m4a'), name: 'ПАУТИННИК' },
      { id: 30, img: require('./assets/images/img30.jpg'), sound: require('./assets/sounds/30.m4a'), name: 'ЖЕЛЧНЫЙ ГРИБ' },
      { id: 31, img: require('./assets/images/img31.jpg'), sound: require('./assets/sounds/31.m4a'), name: 'СМАРЧОК' }
    ],
      rndImages: [0, 0, 0, 0], //Хранятся индексы imgList 4-х картинок
      questionIndex: 0,
      maxArray: 31,
      correctAnswer: false,
      playResultAnswer: false,
      playError: true,
      playQuestion: true,
      gameOver: false      
  };

  componentDidMount() {
    this.initialState(this.state.maxArray);    
  }

  initialState = (maxArray) => {
    const rndIndexes = getFourRndImages(maxArray); //Получить 4 случайных индекса из массива imgList         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 
    
    this.setState( { rndImages: rndIndexes, questionIndex: questionIndex } ); //Запомнить 4 картинки и индекс озвученной картинки 
  }
  
  changeImgList = (buttonIndex) => {
    let tmpArray = this.state.imgList;  //imgList записываю во временный массив 
    const rndImages = this.state.rndImages; //ХРАНЯТСЯ ИНДЕКСЫ!
    const maxArray = this.state.maxArray;
    const idImage = tmpArray[rndImages[buttonIndex]].id; //Нахожу картинку по индексу кнопки

    const imageIndex = tmpArray.findIndex(idImg => idImg.id === idImage); //Нахожу индекс картинки в imgList по картинке
    tmpArray.splice(imageIndex, 1);  //Удаляю эту картинку из imgList
  
    const rndIndexes = getFourRndImages(maxArray-1); //Получить 4 случайных индекса из массива imgList
         
    const questionIndex = Math.floor(Math.random() * 4 ); //Индекс озвученной картинки 

    this.setState({ imgList: tmpArray, maxArray: (maxArray-1), rndImages: rndIndexes, questionIndex: questionIndex, 
      correctAnswer: false, playResultAnswer: false }); 

    console.log("Размер массива: " + this.state.imgList.length);
  };
  
  checkAnswer = (buttonIndex) => {    
    if (buttonIndex === this.state.questionIndex) {
      if (this.state.imgList.length > 4) {
        this.setState({questionIndex: buttonIndex, correctAnswer: true, playResultAnswer: true, playError: false}); 
      } 
      else {
        this.setState({gameOver: true}); 
//        alert("УРА! ФАНФАРЫ!");
      } 
    } 
    else {
      this.setState( (state) => ({ correctAnswer: false, playResultAnswer: true, playError: !state.playError }) ); 
    }    
  };
 
  repeatAnswer = () => {
   this.setState( (state) => ({ playQuestion: !state.playQuestion }) ); 
  };

  render() {  
  
    let nextButton, playQuestion, playSound, playGameOver;

    if (this.state.playResultAnswer === true) {
      if (this.state.correctAnswer === false ) {
        nextButton = null; //Прячем кнопку
        if (this.state.playError === true) {
          playSound = (
            <audio src = { require('./assets/sounds/e1.mp3') } autoPlay />
          );
        }      
        else {
          playSound = (
            <audio src = { require('./assets/sounds/e3.mp3') } autoPlay />
          );
        }
      }
      else {
        playSound = (
          <audio src = { require('./assets/sounds/s1.mp3') } autoPlay />
        );
    
        nextButton = (
          <button >
             <img 
               onClick={() =>  {this.changeImgList(this.state.questionIndex)} }
               src= {require('./assets/arrows/arrow2.png')} 
               alt ="ButtonNext" className={classes.OrderBtnNext}/>
          </button>
        );
      };    
    }

    if (this.state.playQuestion === true) {
       playQuestion = (
        <audio src = { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} autoPlay />
    );
    }
    else {
      playQuestion = ( //Включил <div>, чтобы был рендеринг 
        <div>
          <audio src = { this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} autoPlay />
        </div>
      );
    }

    if (this.state.gameOver === true) {
      playGameOver = (
        <audio src = { require('./assets/sounds/s1.wav') } autoPlay />
      );
    }

    return (
      <div>
        {playQuestion}
        {playSound}
        {playGameOver}
        <div>
           <button> 
             <img
               onClick={() =>  { this.checkAnswer(0); } }
               src= {this.state.imgList[this.state.rndImages[0]].img} 
               alt ="Button1" className={classes.OrderButton}/>
           </button>
           <button>
             <img 
               onClick={() => { this.checkAnswer(1); } }
               src= {this.state.imgList[this.state.rndImages[1]].img} 
               alt="Button2" className={classes.OrderButton} />
           </button>
           <button >
             <img 
               onClick={() =>  {this.repeatAnswer()} }
               src= {require('./assets/arrows/speaker2.png')} 
               alt ="ButtonNext" className={classes.OrderBtnRepeat}/>
          </button> 
        </div>
        <div>
          <button>
             <img 
               onClick={() => { this.checkAnswer(2); } }
               src= {this.state.imgList[this.state.rndImages[2]].img} 
               alt="Button3" className={classes.OrderButton}/>
          </button>
          <button>
             <img
               onClick={() => { this.checkAnswer(3); }  }
               src= {this.state.imgList[this.state.rndImages[3]].img} 
               alt="Button4" className={classes.OrderButton}/>
          </button>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default App;


