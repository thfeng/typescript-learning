/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 12:22:21
 * @LastEditTime: 2022-02-17 12:31:08
 * @FilePath: \typescript\typescript-learning\src\2-enum.ts
 * @Description: 
 */
console.log('********* 2-enum *********');

enum AppID {
  EMS,
  EMA,
  MA,
  DA,
  EA,
  FA
}

console.log(AppID.EMS);

enum AppID2 {
  EMS = 1,
  EMA,
  MA,
  DA,
  EA,
  FA,
  QIANLIYAN = AppID2.FA
}
console.log(AppID2.EMS);
console.log(AppID2.EMA);
console.log(AppID2.QIANLIYAN);

enum NormalDate {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day'
}

enum Vehicle {
  BIKE = 'bike',
  CAR = 'car',
  BUS = 'bus',
  BICYCLE = Vehicle.BIKE
}