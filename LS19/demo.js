//Date

//UTC 协调世界时间 Coordinated Universal Time
//GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time
var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)
//var date4 = new Date(0);    //1970-01-01:00:00:00

var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date5 = new Date();//new Date(Date.now());
console.log(date5);
//当前时刻的时间Mon May 07 2018 14:38:50 GMT+0800 (中国标准时间)
//补充：无效日期

var date6 = new Date(NaN);
console.log(date6);
//Invalid Date