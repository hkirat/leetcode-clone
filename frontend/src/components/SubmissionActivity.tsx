import { useEffect, useRef } from "react";
import { Chart, registerables, ChartConfiguration } from 'chart.js';
import { Card } from "./Card";

Chart.register(...registerables);

type Props = {
    dataValue?: any;
    label?: string;
}

const SubmissionActivity = ({
    dataValue,
}: Props) => {
    const chartRef = useRef(null);

    const demoData = [
        [100, ""],
        [40, ""],
        [15, ""],
        [120, ""],
        [50, ""],
        [30, ""],
        [80, ""],
        [60, ""],
        [25, ""],
        // Add more data as needed
    ];


    const customBackgroundColor = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart: any, _args: any, options: any) => {
            const { ctx } = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#ffffff';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };

    const getBarGraphConfig = (_dataValue: any): ChartConfiguration<"line", (number | [number, number])[], unknown> => {
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
                            callback: (value: any, _index: any, _ticks: any) => {
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
            if (chartRef) {
                //@ts-ignore
                chartRef.current = new Chart(barChartCanvas, config);
            }
        }

        // Instantly assign Chart.js version
        const chartVersionElement = document.getElementById('chartVersion');
        if (chartVersionElement) chartVersionElement.innerText = Chart.version;

        return () => {
            if (chartRef.current) {
                //@ts-ignore
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <Card>
            <div>
                <canvas id="Submission activity"></canvas>
            </div>
        </Card>
    );
}

export default SubmissionActivity;