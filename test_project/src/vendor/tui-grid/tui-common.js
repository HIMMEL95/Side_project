import Grid from 'tui-grid';

var grid;

function createTuiGrid(id, columns, option, record, callData) {
    grid = new Grid({
        el: document.getElementById(id),
        columns: columns,
        scrollX: true,
        scrollY: true,
        data: record,
        rowHeaders: option.rowHeaders,
        columnOptions: option.columnOptions,
        showDummyRows: true
    })

    grid.on('check', ev => {
    });

    grid.on('uncheck', ev => {
    });
}