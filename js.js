document.addEventListener("DOMContentLoaded",function(event){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 7, 3, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
    });   
})
// FUNÇÃO PARA O SELETOR
function newGraph(){
    var x = document.getElementById("carga").value;
    var y = document.getElementById("informacao").value;
    document.getElementById("teste").innerHTML = "Você selecionou " + x + " " + y;
    // LOGICA PARA MOSTRAR O GRÁFICO SELECIONADO
    if(x=="Total" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [5, 7, 3, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C1" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C2" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C3" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C4" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C5" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C6" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C7" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C8" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C9" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C10" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="Total" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [5, 7, 3, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C1" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C2" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C3" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C4" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C5" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C6" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C7" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C8" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C9" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C10" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="Total" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [5, 7, 3, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C1" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C2" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C3" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C4" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C5" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C6" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C7" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C8" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C9" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C10" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [10, 10, 10, 5, 20, 10, 45, 2, 13, 13, 12, 20, 6, 7, 17, 2, 13, 13, 5, 3, 8, 11, 22, 1],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }      
}

