var data=[
    {
        num: '2',
        title: 'Ingleburn Rd',
        shortdesc: '35 INGLEBURN RD, LEPPINGTON, NSW',
        desc: '82 unit apartment block situated in an up-and-coming neighbourhood close to the new Western Sydney Airport.',
        profit1: '$6,787,000',
        profit2: '123.4% return',
        startdate: '1st December 2017',
        progressreport: ' APRIL 2021 | 3',
        pic: 'img/home1.jpg'
    },
    {
        num: '3',
        title: 'Pope St',
        shortdesc: '2-4 POPE ST, RYDE, NSW',
        desc: 'A commercial development that currently hosts 12 residential units and a medical centre. Plans are to build 60+ apartments and a new medical practice.',
        profit1: '$8,771,000',
        profit2: '70.7% return',
        startdate: '1st December 2019',
        progressreport: ' APRIL 2021 | 6',
        pic: 'img/home2.jpg'
    },
    {
        num: '4',
        title: 'Auburn Rd',
        shortdesc: '269 AUBURN RD, AUBURN NSW',
        desc: 'Renovate a block of 9 units (7 x 2 bedders and 2 x 1 bedders) which is already strata titled.',
        profit1: '$1,046,500',
        profit2: '24.6% return',
        startdate: '8th December 2020',
        progressreport: ' APRIL 2021 | 9',
        pic: 'img/home3.jpg'
    }
]
var num = document.getElementById('num');
var title = document.getElementById('title');
var shortdesc = document.getElementById('shortdesc'); 
var desc = document.getElementById('desc');
var profit1 = document.getElementById('profit1');
var profit2 = document.getElementById('profit2');
var startdate = document.getElementById('startdate');
var progressreport = document.getElementById('progressreport');
var pic = document.getElementById('pic');

num.innerText = data[0].num;
title.innerText = data[0].title;
shortdesc.innerText = data[0].shortdesc;
desc.innerText = data[0].desc;
profit1.innerText = data[0].profit1;
profit2.innerText = data[0].profit2;
startdate.innerText = data[0].startdate;
progressreport.innerText = data[0].progressreport;
pic.src = data[0].pic;

var map = L.map('mapid').setView([-33.8140015, 151.0430135], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-33.8358020, 150.9865196]).addTo(map)
    .bindPopup('Ingleburn Rd')
    .on('click', () => {
        num.innerText = data[0].num;
        title.innerText = data[0].title;
        shortdesc.innerText = data[0].shortdesc;
        desc.innerText = data[0].desc;
        profit1.innerText = data[0].profit1;
        profit2.innerText = data[0].profit2;
        startdate.innerText = data[0].startdate;
        progressreport.innerText = data[0].progressreport;
        pic.src = data[0].pic;
    });
L.marker([-33.8540015, 151.0430135]).addTo(map)
    .bindPopup('Pope St')
    .on('click', () => {
        num.innerText = data[1].num;
        title.innerText = data[1].title;
        shortdesc.innerText = data[1].shortdesc;
        desc.innerText = data[1].desc;
        profit1.innerText = data[1].profit1;
        profit2.innerText = data[1].profit2;
        startdate.innerText = data[1].startdate;
        progressreport.innerText = data[1].progressreport;
        pic.src = data[1].pic;
    });
    L.marker([-33.7932162, 151.1100844]).addTo(map)
    .bindPopup('Auburn Rd')
    .on('click', () => {
        num.innerText = data[2].num;
        title.innerText = data[2].title;
        shortdesc.innerText = data[2].shortdesc;
        desc.innerText = data[2].desc;
        profit1.innerText = data[2].profit1;
        profit2.innerText = data[2].profit2;
        startdate.innerText = data[2].startdate;
        progressreport.innerText = data[2].progressreport;
        pic.src = data[2].pic;
    });
