module.exports = function check(str, bracketsConfig) {
  var StackOpen = [];
  correct = true;
  //перебираем строку
  for (let index = 0; index < str.length; index++) {
    var open = false;
    const element = str[index];
      for (let BCindex = 0; BCindex < bracketsConfig.length; BCindex++) {
        const BCelement = bracketsConfig[BCindex];
        //проверяем является ли текущий элемент строки открывающей скобкой
        if (element == BCelement[0])
        {
          open = true;
          //если элемент открывающий - добавляем в стек
          StackOpen.push(element);
        }
      }
    //если элемент закрывающий  
    if (open==false)
    {
      //ищем в каком подмассиве описан этот тип скобок
      for (let BCindex = 0; BCindex < bracketsConfig.length; BCindex++) {
        const BCelement = bracketsConfig[BCindex];
        if (element == BCelement[1])
        { //читаем последний элемент стека
          LastInElement = StackOpen.pop(); 
          //проверяем соответствует ли последний элемент стека открывающей скобке 
          if (BCelement[0] == LastInElement)
          {
            correct = true;
          }
          else
          {
            correct = false;
            return correct; 
          }
        }
      }
    }  
  }
  if ((correct)&&(StackOpen.length==0))
  {
    return correct;
  }
  else
  {
    return !correct;
  }
}
