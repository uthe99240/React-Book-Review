import React from 'react';
import { Bar } from 'react-chartjs-2';

// Import necessary Chart.js modules
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ readBooks }) => {

    const labels = readBooks.map((book) => book.bookName); // Extract book names
    const dataValues = readBooks.map((book) => book.totalPages);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Total Pages',
                data: dataValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Define options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Monthly Sales Data',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
