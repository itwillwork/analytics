export default [
    {
        type: 'LineChart',
        viewBoxObject: {
            x: 0,
            y: 0,
            width: 500,
            height: 400,
        },
        yAxisLabel: "Altitude",
        xAxisLabel: "Elapsed Time (sec)",
        gridHorizontal: true,
        availableZoom: true,
    },
    {
        type: 'BarChart',
        width: 350,
        height: 280,
        colors: (x)=> ['#3182bd', '#a8a8a8'][x],
        stackOffset: "wigget",
        fill: '#f29',
    },
    {
        type: 'PieChart',
        width: 350,
        height: 280,
        radius: 80,
        innerRadius: 20,
        sectorBorderColor: "white",
    }
];