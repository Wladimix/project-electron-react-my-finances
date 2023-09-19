import React from "react";
import { useStore } from "effector-react";
import Table from "react-bootstrap/Table";

import RowWithDownloadNotification from "../TablesRows/RowWithDownloadNotification.jsx";
import DistributionFinancesRows from "../TablesRows/DistributionFinancesRows.jsx";
import AdditionDistributionFinancesTypeRow from "../TablesRows/AdditionDistributionFinancesTypeRow.jsx";

import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function DistributionFinancesTable() {
    const isLoadingDistributionFinancesAfterAdding = useStore(DownloadProcessStorage.$isLoadingDistributionFinancesAfterAdding);

    return <Table className='distribution-finances-table table-info' striped bordered>
        <thead>
            <tr className='table-row'>
                <th colSpan={3}>Распределение финансов</th>
            </tr>
        </thead>
        <tbody>
            {isLoadingDistributionFinancesAfterAdding ? (
                <RowWithDownloadNotification
                    notificationText='Загрузка таблицы распределения финансов'
                    colSpan={2}
                />
            ) : (
                <DistributionFinancesRows/>
            )}
            <AdditionDistributionFinancesTypeRow/>
        </tbody>
    </Table>;
}
