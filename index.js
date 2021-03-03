let userAcess = document.getElementById("userAcess").getContext('2d')

let label_userAcess = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let data_Acess = ['5','10','15','20','25','30','35','40','45','50','55','60']
let color_userAcess = ['#7EFA6B']

let chart = new Chart (userAcess,{
    type:'bar',
    data: {
        labels: label_userAcess,
        datasets:[{
            data: data_Acess,
            backgroundColor:color_userAcess
        }]
    },
    options:{
        title:{
            text: "Residente que mais acessa",
            display: true
        },
        legends:{
            display:false
        }
    }


});

let userPodcast = document.getElementById("userPodcast").getContext('2d')

let label_userPodcast = ['Nome PodCast']
let data_userPodcast = ['10','10','10','10','10','10']
let color_userPodcast = ['#5FFBF6']

let chart1 = new Chart (userPodcast,{
    type:'pie',
    data:{
        labels: label_userPodcast,
        datasets: [{
            data:data_userPodcast,
            backgroundColor: color_userPodcast
        }]
    },
    options:{
        title:{
            text:"PodCast Mais acessado",
            display: true
        },
        legends:{
            display:false
        }
    }
});

let userWebnar =  document.getElementById("userWebnar").getContext('2d')

let label_userWebnar = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let data_userWebnar = ['5','10','15','20','25','30','35','40','45','50','55','60']
let color_userWebnar = ['#FFE752']


let chart2 = new Chart (userWebnar,{
    type:'bar',
    data: {
        labels: label_userWebnar,
        datasets:[{
            data:data_userWebnar,
            backgroundColor:color_userWebnar
        }]
    },
    options:{
        title:{
            text:"Webnar",
            display:true
        },
        legends:{
            display:false
        }
    }
});
