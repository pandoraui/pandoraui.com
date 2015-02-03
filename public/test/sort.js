
/*
  如果序号相等，超过11个数量后，排序后的结果并不是初始排序的状态
  第一个元素和中间元素相等，则中间元素排序第一
 */

var data = [
  {name:'A',rank:1},
  {name:'B',rank:2},
  {name:'C',rank:3},
  {name:'D',rank:4},
  {name:'E',rank:5},
  {name:'F',rank:6},
  {name:'G',rank:7},
  {name:'H',rank:8},
  {name:'I',rank:9},
  {name:'J',rank:10},
  {name:'K',rank:11},
  {name:'L',rank:12},
  {name:'M',rank:1},
  {name:'N',rank:1},
  {name:'O',rank:1},
  {name:'P',rank:1},
  {name:'Q',rank:1},
  {name:'R',rank:1},
  {name:'S',rank:1},
  {name:'T',rank:1},
  {name:'U',rank:1},
  {name:'V',rank:1},
  {name:'W',rank:1},
  {name:'X',rank:1},
  {name:'Y',rank:1},
  {name:'Z',rank:1}
];
function sort(list){
  var rank = 'rank';
  var N = 0;//比较次数
  var result = list.sort(function(a, b) {
    var sortItem;
    (function(){
      printArr(list)
      N++;
    })(list);
    function log(sortItem){
      console.log('第' + N + '次比较: '+ a.name + ', ' + b.name + ',    ' + sortItem);
    }
    r1 = a[rank]//.toString().toLowerCase();
    r2 = b[rank]//.toString().toLowerCase();
    if (r1 < r2) {
      sortItem = (a.name + ' < ' + b.name)
      log(sortItem);
      return -1;
    } else if (r1 > r2) {
      sortItem = (b.name + ' < ' + a.name)
      log(sortItem);
      return 1;
    } else {
      sortItem = ('==')
      log(sortItem);
      return 0;
    }
  });
  function printArr(list,msg){
    var msg = msg || '第'+ N +'次sort结果：';
    var arr = [];
    var len = list.length;
    for(j=0;j<len;j++){
      arr.push(list[j].name)
    }
    console.log(msg+arr);
  }
  printArr(result,'最终sort结果：');
}
function print(num,max,min){
  var min = min || 5;
  var max = max || 26;
  for(i=0;i<num;i++){
    var len = Math.ceil(min+Math.random()*(max-min));
    var array = data.slice(0,len);
    var list = data.slice(0,len);
    //console.log(data.length);
    //console.log(array.length);
    console.log('数组长度：' + len + '，' + array[0].name + '-' + array[len-1].name)
    sort(list);
  }
}
print(1,11,11);
print(1,26,26);
print(1,1,1);
//print(10,6);
//print(10,12,8);
