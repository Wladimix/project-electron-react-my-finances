export default function ExpenditureStatistics() {
    return (
        ['test'].map(expenses => (
            <div key={expenses[0]} className="uk-grid-small" data-uk-grid>
                <div data-uk-leader>
                    продукты
                </div>
                <div className="uk-text-large">100</div>
            </div>
        ))
    );
};
