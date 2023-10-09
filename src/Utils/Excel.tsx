import * as XLSX from 'xlsx';

const generateExcel = (filename: string, data: object[], columnData: { values: { name: string, count: string }[] }[], countryname: string): void => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);
    const columnNames = data.map((item: any) => item['columnName']);
    XLSX.utils.sheet_add_aoa(worksheet, [columnNames], { origin: { r: 0, c: 0 } });
    const columnWidths = columnNames.map((column) => ({ wch: column.length + 5 }));
    worksheet['!cols'] = columnWidths;

    let rowno = 2;
    columnData.forEach((row) => {
        const data = row.values.map((da: any) => da['count']);
        XLSX.utils.sheet_add_aoa(worksheet, [data], { origin: 'A' + rowno });
        rowno++;
    });

    const totalRow = data.map((item: any) => {
        if (item['columnName'] === 'Date') {
            return 'Total'; // Skip the date column
        }
        const columnValues = columnData.map((row) => {
            const columnDataItem = row.values.find((value) => value.name === item['columnName']);
            return columnDataItem ? parseInt(columnDataItem.count) : 0;
        });
        const columnTotal = columnValues.reduce((acc, val) => acc + val, 0);
        return columnTotal.toString();
    });
    XLSX.utils.sheet_add_aoa(worksheet, [totalRow], { origin: 'A' + rowno });



    XLSX.utils.book_append_sheet(workbook, worksheet, countryname);


    const excelFile = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    const blob = new Blob([excelFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
};

const FileUtil = {
    generateExcel
}
export default FileUtil;