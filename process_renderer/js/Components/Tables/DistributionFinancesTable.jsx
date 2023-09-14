import React from "react";

import { useStore } from "effector-react";
import Table from "react-bootstrap/Table";

import RowWithDownloadNotification from "../TablesRows/RowWithDownloadNotification.jsx";
import DistributionFinancesRows from "../TablesRows/DistributionFinancesRows.jsx";
import AdditionDistributionFinancesTypeRow from "../TablesRows/AdditionDistributionFinancesTypeRow.jsx";

import DownloadProcessStorage from "../../Storages/DownloadProcessStorage.js";

export default function DistributionFinancesTable() {
    const isLoadingDistributionFinances = useStore(DownloadProcessStorage.$isLoadingDistributionFinances);

    return <Table className='distribution-finances-table' striped bordered>
        <thead>
            <tr className='table-row'>
                <th colSpan={2}>Распределение финансов</th>
            </tr>
        </thead>
        <tbody>
            {isLoadingDistributionFinances ? (
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
