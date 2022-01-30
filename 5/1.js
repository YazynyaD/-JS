 function filterBlacklist (mailList, mailBlackList) {
    let mailWhiteList = [];
     for (let cleanList of mailList) {
        if (!mailBlackList.includes(cleanList)) {
        mailWhiteList.push(cleanList); 
     }
   }
 return mailWhiteList;
 };
 console.log(filterBlacklist(['1', '2', '3', '4', '5'], ['3', '4', '6']))


      

 

// filter = ['ivan.lis@mail.ru', 'sasha02312@bk.ru', 'Oger.Hfhds@gmail.com', 'Oklok@bk.com', 'Krava-sisamail.ru', 'Gev-Gov@yandex.ru', 'Kilka-Ka@mail.ru', 'Om-Nom.hfn.com'], ['Oklok@bk.com', 'Krava-sisamail.ru'];
// filter = ['1', '2', '3', '4', '5'], ['3', '4'];
