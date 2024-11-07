import DeleteForeverSVG from "../SVG/DeleteForeverSVG";
import EditFileSVG from "../SVG/EditFileSVG";

export default function TransactionsTableRow() {
    return (
        <>
            <tr>
                <td>дата</td>
                <td>тест</td>
                <td>тест</td>
                <td>тест</td>
                <td>тест</td>
                <td className="uk-text-center">
                    <button
                        className="uk-icon-link"
                        data-uk-icon="icon: pencil"
                        data-uk-toggle="target: #transaction"
                        hidden={false}
                        onClick={() => {}}
                    >
                        <EditFileSVG />
                    </button>
                    <button
                        className="uk-icon-link"
                        data-uk-icon="icon: trash"
                        hidden={false}
                        onClick={() => {}}
                    >
                        <DeleteForeverSVG />
                    </button>
                </td>
            </tr>
        </>
    );
};
