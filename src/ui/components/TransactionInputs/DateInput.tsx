// import DatePicker from "react-datepicker";
// import ru from "date-fns/locale/ru";

// import "react-datepicker/dist/react-datepicker.css";

export default function DateInput() {
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="transaction-date">Дата транзакции</label>
            <div className="uk-form-controls">
                {/* <DatePicker
                    className="uk-input"
                    dateFormat="dd MMMM YYYY"
                    id="transaction-date"
                    locale={ru}
                    onChange={() => {}}
                    selected={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                /> */}
            </div>
        </div>
    );
};
