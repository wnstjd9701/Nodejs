const xlsx = require('xlsx');

const excelFile = xlsx.readFile('test.xlsx');

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' });
console.log(jsonData.length);
for (var i = 0; i < jsonData.length; i++) {
  const studentName = jsonData[i].이름;
  const major = jsonData[i].학과;
  const studentId = jsonData[i].학번;
  const grade = jsonData[i].학년;
  const sex = jsonData[i].성별;
  const phoneNumber = jsonData[i].휴대전화번호;
  const laptopCompanyType = jsonData[i].노트북종류; // 띄어쓰기 처리 어떻게 ?
  const laptopId = jsonData[i].노트북번호;
  const isReturn = jsonData[i].반납여부;

  // DB 저장 로직 (Update, Insert)..
}
