import { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

type Props = {
    dataValue?: any;
    label?: string;
}

const SubmissionActivity = ({
    dataValue,
    label
}: Props) => {
    const chartRef = useRef(null);

    const demoData = [
        [100, "2022-01-01"],
        [40, "2022-02-01"],
        [15, "2022-03-01"],
        [120, "2022-01-01"],
        [50, "2022-02-01"],
        [30, "2022-03-01"],
        [80, "2022-01-01"],
        [60, "2022-02-01"],
        [25, "2022-03-01"],
        // Add more data as needed
    ];
    

    const customBackgroundColor = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart: any, args: any, options: any) => {
            const { ctx } = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#ffffff';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };

    const getBarGraphConfig = (dataValue: any): ChartConfiguration<"line", (number | [number, number])[], unknown> => {
        return {
            type: 'line',
            data: {
                labels: demoData?.map((chartDataValue: any) => (chartDataValue[1])),
                datasets: [
                    {
                        label: ' Line Chart ',
                        data: demoData?.map((a : any) => a[0]),
                        borderColor: "rgb(86, 236, 247)",
                        borderWidth: 1,
                        backgroundColor: [
                            'rgba(116, 224, 232,0.9)',
                        ],
                        fill:true
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: 'top',
                        labels: {
                            boxWidth: 8,
                            boxHeight: 8,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                weight: 'bold',
                                size: 16,
                                family: 'Helvetica Neue',
                            },
                            textAlign: 'left',
                            padding: 10,
                        },
                    },
                    
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value: any, index: any, ticks: any) => {
                                return `${value}`;
                            },
                            font: {
                                size: window.innerWidth <= 999 ? 10 : 16,
                                weight: 'lighter',
                                family: 'arial',
                            },
                            color: '#282C3F',
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: window.innerWidth <= 999 ? 10 : 16,
                            },
                            color: '#282C3F',
                        },
                    },
                },
            },
            plugins: [customBackgroundColor],
        };
    };

    useEffect(() => {

        // configurations of chart 
        const config = getBarGraphConfig(dataValue);
        // getting chart canvas
        const barChartCanvas = document.getElementById('Submission activity') as HTMLCanvasElement | null;

        if (barChartCanvas) {
            // Initialize chart
            chartRef.current = new Chart(barChartCanvas, config);
        }

        // Instantly assign Chart.js version
        const chartVersionElement = document.getElementById('chartVersion');
        if (chartVersionElement) chartVersionElement.innerText = Chart.version;

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div className="px-5">
            <canvas id="Submission activity"></canvas>
            </div>
        </>
    );
}

export default SubmissionActivity;
