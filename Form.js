class Form{
    constructor(){
this.title = createElement('h2');
this.input = createInput("Name");
this.button = createButton('play');
this.greeting = createElement('h2');
}

hide(){
this.greeting.hide();
this.input.hide();
this.title.hide();
}

display(){
    this.title.html("car racing game");
    this.title.position(200,50);
    this.input.position(200,135);
    this.button.position(200,200);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        var name = input.value();
        playerCount += 1;
        player.update(name);
        player.updateCount(playerCount) ;
        greeting.html("Hello!"+name);
        this.greeting.position(200,100);
    });

}
}