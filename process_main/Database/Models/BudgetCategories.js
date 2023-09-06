function createTable(knex) {
    knex.schema.createTable('budget_categories', function (table) {
        table.increments('id');
        table.string('name');
        table.integer('summ');
        table.string('type');
    }).then(function () {
        console.log('Таблица "budget_categories" создана');
    }).catch(function (error) {
        console.error(error);
    });
}

function getExpensesTypes(knex) {
    return knex.select().from('budget_categories')
        .then((res) => {
            console.log('Данные загружены');
            return res;
        }).catch((error) => {
            console.error(error);
        });
}

function addExpenseType(knex) {
    knex('budget_categories').insert({
        name: 'new Name'
    }).then(() => {
        console.log('Запись добавлена');
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTable,
    getExpensesTypes,
    addExpenseType
}
