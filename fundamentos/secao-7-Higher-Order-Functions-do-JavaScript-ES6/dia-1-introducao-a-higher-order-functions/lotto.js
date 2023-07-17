const lottoCheck = (myTicket, sortTicket) => myTicket === sortTicket;

const lottoSort = (myTicket, lottoCheck) => {
   const sortTicket = Math.floor((Math.random() * 5) + 1);  

   return lottoCheck(myTicket, sortTicket) ? `Parabéns, você ganhou` : `Tente novamente`;
}

console.log(lottoSort(2, lottoCheck));
