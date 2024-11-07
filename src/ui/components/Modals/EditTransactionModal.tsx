import AddressOrCategoryInput from "../TransactionInputs/AddressOrCategoryInput";
import AmountInput from "../TransactionInputs/AmountInput";
import DateInput from "../TransactionInputs/DateInput";
import NoteInput from "../TransactionInputs/NoteInput";
import SourceOfTransactionInput from "../TransactionInputs/SourceOfTransactionInput";

export default function EditTransactionModal() {
    return (
        <div id="transaction" data-uk-modal data-container="false">
            <div className="uk-modal-dialog">

                <button className="uk-modal-close-default" type="button" data-uk-close></button>

                <div className="uk-modal-header">
                    <h2 className="uk-modal-title">
                        заглавие
                    </h2>
                </div>

                <div className="uk-modal-body">
                    <DateInput />
                    <SourceOfTransactionInput />
                    <AddressOrCategoryInput />
                    <NoteInput />
                    <AmountInput />

                    <div>
                        <p>РАСХОД</p>
                    </div>
                </div>

                <div className="uk-modal-footer uk-text-right">
                    <button
                        className="uk-button uk-button-default uk-modal-close"
                        onClick={() => {}}
                    >
                        ЗАКРЫТЬ
                    </button>
                    <button
                        className="uk-button uk-button-primary uk-modal-close"
                        disabled={false}
                        onClick={() => {}}
                    >
                        РЕДАКТИРОВАТЬ
                    </button>
                </div>

            </div>
        </div>
    );
};
