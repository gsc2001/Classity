import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const bar = (x, y, width, height, color) => ({
    canvas: [{ type: 'rect', x, y, w: width, h: height, color }]
});

const spikyCircle = (centerX, centerY, radius, color, fill = true, noOfSpikes = 50) => {
    const points = [];
    let angle = 0;

    for (let i = 0; i < noOfSpikes; i++) {
        points.push({
            x: centerX + (radius + 4) * Math.cos(angle),
            y: centerY + (radius + 4) * Math.sin(angle)
        });

        angle += Math.PI / noOfSpikes;

        points.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        });

        angle += Math.PI / noOfSpikes;
    }

    return {
        type: 'polyline',
        color: fill && color,
        lineColor: color,
        closePath: true,
        points
    };
};

export default function getCertificate(user, course, date) {
    const docDefinition = {
        info: { title: 'Classity' },
        pageSize: { width: 515, height: 370 },
        pageMargins: [0, 0, 0, 0],
        content: [
            {
                layout: {
                    hLineWidth: () => 15,
                    vLineWidth: () => 15,
                    paddingLeft: () => 0,
                    paddingRight: () => 0,
                    paddingTop: () => 15,
                    paddingBottom: () => 0
                },
                table: {
                    widths: ['*'],
                    body: [
                        [
                            [
                                {
                                    text: [
                                        {
                                            text: 'Classity\n',
                                            style: { fontSize: 25 }
                                        },
                                        {
                                            text: 'CERTIFICATE\n',
                                            style: { fontSize: 50 }
                                        },
                                        {
                                            text: 'OF COMPLETION\n',
                                            style: { fontSize: 25 }
                                        }
                                    ]
                                },
                                {
                                    margin: 10,
                                    ...bar(20, 0, 30, 5, '#7619cc')
                                },
                                {
                                    text: [
                                        {
                                            text: `${user}\n`,
                                            style: { fontSize: 25 }
                                        },
                                        {
                                            text: '\nsuccessfully completed\n',
                                            style: { color: '#aaa', fontSize: 10, lineHeight: 1.2 }
                                        },
                                        {
                                            text: `${course}\n`,
                                            style: { color: '#7619cc', fontSize: 10 }
                                        }
                                    ],
                                    margin: [0, 0, 0, 25]
                                },
                                {
                                    layout: 'noBorders',
                                    fillColor: '#eee',
                                    table: {
                                        widths: ['*'],
                                        body: [
                                            [
                                                {
                                                    canvas: [
                                                        spikyCircle(83, 0, 55, '#252227'),
                                                        spikyCircle(83, 0, 45, '#aaa', false, 500),
                                                        spikyCircle(83, 0, 30, '#aaa', true, 500),
                                                        {
                                                            type: 'rect',
                                                            x: 41,
                                                            y: -15,
                                                            w: 83,
                                                            h: 29,
                                                            color: '#252227'
                                                        },
                                                        bar(42, 9, 80, 1.5, '#aaa').canvas[0],
                                                        bar(42, -11, 80, 1.5, '#aaa').canvas[0]
                                                    ],
                                                    style: { alignment: 'left' }
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'COMPLETE',
                                                    style: {
                                                        alignment: 'left',
                                                        fontSize: 15,
                                                        color: '#aaa'
                                                    },
                                                    relativePosition: {
                                                        x: 43,
                                                        y: -72
                                                    }
                                                }
                                            ],
                                            [
                                                {
                                                    stack: [
                                                        {
                                                            text: date,
                                                            style: { fontSize: 15 },
                                                            relativePosition: { x: 0, y: -50 }
                                                        },
                                                        bar(30, -34, 105, 1.5, '#aaa'),
                                                        {
                                                            text: 'Date of Issuance',
                                                            style: {
                                                                fontSize: 10,
                                                                bold: false,
                                                                color: '#aaa'
                                                            },
                                                            relativePosition: { x: 0, y: -30 }
                                                        },
                                                        { text: ' ', style: { fontSize: 15 } }
                                                    ]
                                                }
                                            ]
                                        ]
                                    }
                                }
                            ]
                        ]
                    ]
                }
            }
        ],
        defaultStyle: {
            alignment: 'center',
            color: '#252227',
            bold: true
        }
    };

    pdfMake.createPdf(docDefinition).open();
}
