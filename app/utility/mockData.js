export default {
    BarChart: [
        {
            "name": "Series A",
            "values": [
                { "x": 1, "y":  91},
                { "x": 2, "y":  191},
                { "x": 3, "y":  141},
                { "x": 4, "y":  131},
                { "x": 5, "y":  51}
            ]
        },
        {
            "name": "Series B",
            "values": [
                { "x": 1, "y":  91},
                { "x": 2, "y":  191},
                { "x": 3, "y":  141},
                { "x": 4, "y":  131},
                { "x": 5, "y":  51}
            ]
        }
    ],
    PieChart: [
        {label: 'Margarita', value: 20.0},
        {label: 'John', value: 55.0},
        {label: 'Tim', value: 25.0 }
    ],
    LineChart: [
        {
            name: "series1",
            values: [ { x: 0, y: 20 }, { x: 25, y: 10 }, { x: 50, y: 110 } , { x: 75, y: 80 } , { x: 100, y: 90 } ],
            strokeWidth: 3,
            strokeDashArray: "5,5",
        },
        {
            name: "series2",
            strokeWidth: 1,
            values: [ { x: 0, y: 10 }, { x: 25, y: 20 }, { x: 50, y: 10 }, { x: 75, y: 30 }, { x: 100, y: 10 } ],
        },
        {
            name: "series3",
            strokeWidth: 1,
            values: [ { x: 0, y: 50 }, { x: 25, y: 35 }, { x: 50, y: 69 }, { x: 75, y: 70 }, { x: 100, y: 40 }],
        }
    ]
};