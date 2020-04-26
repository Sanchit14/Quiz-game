class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton("PLAY");
    this.greeting = createElement('h2');
    this.button1 = createButton("START QUIZ");
    this.button2 = createButton("A : 25 million Years");
    this.button3 = createButton("B : 65 million Years");
    this.button4 = createButton("C : 100 million Years");
    this.button5 = createButton("D : 135 million Years");
    this.button6 = createButton("A : Lizard");
    this.button7 = createButton("B : Fishes ");
    this.button8 = createButton("C : Birds");
    this.button9 = createButton("D : Amphibians");
    this.button10 = createButton("A : Canine");
    this.button11 = createButton("B : Second Inscisor");
    this.button12 = createButton("C : Premolar");
    this.button13 = createButton("D : Molar");
    this.button14 = createButton("A : Amphibians");
    this.button15 = createButton("B : Reptiles");
    this.button16 = createButton("C : Birds");
    this.button17 = createButton("D : Mammals");
    this.button18 = createButton("A : Bull,dear and Eagle");
    this.button19 = createButton("B : Dear and Elphants");
    this.button20 = createButton("C : Elphants, tiger and Bull");
    this.button21 = createButton("D : Horse And Bull");
    this.button22 = createButton("A : Cellulase");
    this.button23 = createButton("B : Amylase");
    this.button24 = createButton("C : Pectinase");
    this.button25 = createButton("D : Diselase");
    this.button26 = createButton("A : Krait");
    this.button27 = createButton("B : Russel's Viper");
    this.button28 = createButton("C : Rattle Snake");
    this.button29 = createButton("D : King Cobra");
    this.button30 = createButton("A : Crustaceans");
    this.button31 = createButton("B : Arthropoda");
    this.button32 = createButton("C : Mollusca");
    this.button33 = createButton("D : Platyhelminthes");
    this.button34 = createButton("A : Cat");
    this.button35 = createButton("B : Moth");
    this.button36 = createButton("C : Dog");
    this.button37 = createButton("D : Bat");
    this.button38 = createButton("D : Bat");
    this.button39 = createButton("D : Bat");
    this.button40 = createButton("D : Bat");
    this.button41= createButton("D : Bat");

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button6.hide();
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
    this.button11.hide();
    this.button12.hide();
    this.button13.hide();
    this.button14.hide();
    this.button15.hide();
    this.button16.hide();
    this.button17.hide();
    this.button18.hide();
    this.button19.hide();
    this.button20.hide();
    this.button21.hide();
    this.button23.hide();
    this.button24.hide();
    this.button25.hide();
    this.button26.hide();
    this.button27.hide();
    this.button28.hide();
    this.button29.hide();
    this.button30.hide();
    this.button31.hide();
    this.button32.hide();
    this.button33.hide();
    this.button34.hide();
    this.button35.hide();
    this.button36.hide();
    this.button37.hide();
    this.button38.hide();
    this.button39.hide();
    this.button40.hide();
    this.button41.hide();

    
    
    title.hide();
    this.cross.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("MultiTopic Quiz");

    title.position(displayWidth/2 - 70,100);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    


    this.button.mousePressed(()=>{
      background(world);
      this.input.hide();
      this.button.hide();
      this.greeting.html("Hello " + pname);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.button1.position(displayWidth/2,displayHeight/2);

      gameState = 1;
    });

    this.button1.mousePressed(()=>{
      gameState = 2;
      this.button1.hide();
      this.greeting.hide();
      title.hide();
      this.button6.hide();
      this.button7.hide();
      this.button8.hide();
      this.button9.hide();
      this.button10.hide();
      this.button11.hide();
      this.button12.hide();
      this.button13.hide();
      this.button14.hide();
      this.button15.hide();
      this.button16.hide();
      this.button17.hide();
      this.button18.hide();
      this.button19.hide();
      this.button20.hide();
      this.button21.hide();
      this.button22.hide();
      this.button23.hide();
      this.button24.hide();
      this.button25.hide();
      this.button26.hide();
      this.button27.hide();
      this.button28.hide();
      this.button29.hide();
      this.button30.hide();
      this.button31.hide();
      this.button32.hide();
      this.button33.hide();
      this.button34.hide();
      this.button35.hide();
      this.button36.hide();
      this.button37.hide();
      this.button38.hide();
      this.button39.hide();
      this.button40.hide();
      this.button41.hide();
  
      background(panda);
      strokeWeight(10);
      textSize(30);
      textStyle(BOLDITALIC);
      this.button2.position(300,350);
      this.button3.position(1000,350);
      this.button4.position(300,600);
      this.button5.position(1000,600);
      text("For how many yearshave the dinosaures been extinct ?",200,150);
      
    });
    this.button3.mousePressed(()=>{
      background(panda);
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    this.button5.hide();
    this.button10.hide();
    this.button11.hide();
    this.button12.hide();
    this.button13.hide();
    this.button14.hide();
    this.button15.hide();
    this.button16.hide();
    this.button17.hide();
    this.button18.hide();
    this.button19.hide();
    this.button20.hide();
    this.button21.hide();
    this.button22.hide();
    this.button23.hide();
    this.button24.hide();
    this.button25.hide();
    this.button26.hide();
    this.button27.hide();
    this.button28.hide();
    this.button29.hide();
    this.button30.hide();
    this.button31.hide();
    this.button32.hide();
    this.button33.hide();
    this.button34.hide();
    this.button35.hide();
    this.button36.hide();
    this.button37.hide();
    this.button38.hide();
    this.button39.hide();
    this.button40.hide();
    this.button41.hide();

    strokeWeight(10);
    textSize(30);
    textStyle(BOLDITALIC);
    this.button6.position(300,350);
    this.button7.position(1000,350);
    this.button8.position(300,600);
    this.button9.position(1000,600);
    text("Darwin Finches belongs to which Group ?",200,150);
    });

    this.button8.mousePressed(()=>{
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
      this.button7.hide();
      this.button8.hide();
      this.button9.hide();
      this.button14.hide();
      this.button15.hide();
      this.button16.hide();
      this.button17.hide();
      this.button18.hide();
      this.button19.hide();
      this.button20.hide();
      this.button21.hide();
      this.button22.hide();
      this.button23.hide();
      this.button24.hide();
      this.button25.hide();
      this.button26.hide();
      this.button27.hide();
      this.button28.hide();
      this.button29.hide();
      this.button30.hide();
      this.button31.hide();
      this.button32.hide();
      this.button33.hide();
      this.button34.hide();
      this.button35.hide();
      this.button36.hide();
      this.button37.hide();
      this.button38.hide();
      this.button39.hide();
      this.button40.hide();
      this.button41.hide();
       
      
    strokeWeight(10);
    textSize(30);
    textStyle(BOLDITALIC);
    this.button6.position(300,350);
    this.button7.position(1000,350);
    this.button8.position(300,600);
    this.button9.position(1000,600);
    text("Which part of the teeth becomes modified as the tusk of the elephant ?",200,150);
       
    });
  }
}