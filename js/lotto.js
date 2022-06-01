
console.log("Wired in.");

let number;
let ball;
let playerTicket;
let winnerTicket;
let drawing;
let years;

let runs = 0;
let attempts=0;
let cost;


let jackpot = false;

function numberSelect(){
    number = Math.floor(Math.random()*69)+1;

    return number;
}

function ballSelect(){
    ball= Math.floor(Math.random()*26)+1;

    return ball;
}

function RUNIT(){
    attempts = 1;

    function newTicket(){
        let ticket = {numbers: [], powerball: null};

        while (ticket.numbers.length<5){
            number = numberSelect();
            if(ticket.numbers.indexOf(number) == -1){
                ticket.numbers.push(number);
            }
        }
        ticket.numbers = ticket.numbers.sort();
        ticket.powerball = ballSelect();

        return ticket;
    }

    let winningTicket = newTicket();

    let userTicket = newTicket();



    function winner(userTicket, winningTicket) {
        let result = JSON.stringify(userTicket) === JSON.stringify(winningTicket);
        if (result ==true){
            console.log("JACKPOT");
        }
        return result;
        
    }

    while(!winner(userTicket, winningTicket)) {
        userTicket = newTicket();
        if(attempts%1000000==0){
            console.log(JSON.stringify(userTicket));
        }
        winningTicket = newTicket();
        attempts+=1;
        if(attempts%1000000==0){
            console.log(attempts);
        }

    }


    console.log(attempts);
}

//winner: 1,251,711,858
//winner: 343,944,193
//winner: 103,912,127
//winner: 437,012,751
//winner: 193,529,624
//winner: 519,061,883

//Average: @6:410,416,708 (@5: 319,492,115) vs Powerball: "~292M"