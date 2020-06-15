import XLSX from 'xlsx';
// 读取xlsx文件，导出成json
const readXlsx2Json = (file) => {
  if (!file) {
    return '文件不能为null';
  }
  //
  const returnData = {
    // onLoaded: () => {}, // 文件加载完
    // onReaded: () => {}, // 文件读取完
    // onEnded: () => {}, // 文件内容转为json格式完，输出
  };
  //
  const reader = new FileReader();
  reader.onload = (e) => {
    if (returnData.onLoaded && typeof returnData.onLoaded === 'function') {
      returnData.onLoaded(e);
    }
    const data = e.target.result;
    const wb = XLSX.read(data, {
      type: 'binary',
    });
    if (returnData.onReaded && typeof returnData.onReaded === 'function') {
      returnData.onReaded(wb, e);
    }
    // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
    // wb.Sheets[Sheet名]获取第一个Sheet的数据
    let wbArray = [];
    let temp = null;
    for (let i = 0, j = wb.SheetNames.length; i < j; i += 1) {
      temp = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[i]]);
      wbArray = wbArray.concat(temp);
    }
    //
    if (returnData.onEnded && typeof returnData.onEnded === 'function') {
      returnData.onEnded(wbArray, e);
    }
  };
  //
  reader.readAsBinaryString(file);
  //
  return returnData;
};

const __s2ab = (s) => {
  // 字符串转字符流
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; i += 1) {
    // eslint-disable-next-line
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
};

// 根据json生成xlsx文件
const jsonToExcel = ({
  json,
  opts = {},
  sheetName = 'default',
  fileName,
  retType,
}) => new Promise((resolve, reject) => {
  try {
    const ws = XLSX.utils.json_to_sheet(json);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    const defaultOpts = { bookType: 'xlsx', bookSST: false, type: 'binary' };
    const bs = XLSX.write(wb, Object.assign(defaultOpts, opts));
    if (retType === 'file') {
      XLSX.writeFile(wb, fileName);
      resolve();
    }
    const blob = new Blob([__s2ab(bs)], { type: '' }); // 构造blob
    if (retType === 'blob') {
      resolve(blob);
    }
    const fileObj = new File([blob], fileName); // 默认构造file对象返回
    resolve(fileObj);
  } catch (err) {
    // console.error(err);
    this.$message.error(err.message);
    reject(err);
  }
});

export {
  jsonToExcel,
  readXlsx2Json,
};
