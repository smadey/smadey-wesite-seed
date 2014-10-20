var Services = {};

Services.getPages = function(option, callback) {
    var pages = [
        ['img/page-0.jpg'],
        ['img/page-1.jpg', { type: 'invisible', src: 'img/page-1-invisible.png'}],
        ['img/page-2.jpg', { type: 'invisible', src: 'img/page-2-invisible.png'}],
        ['img/page-3.jpg', { type: 'invisible', src: 'img/page-3-invisible.png'}],
        ['img/page-4.jpg', { type: 'invisible', src: 'img/page-4-invisible.png'}, { type: 'right', src: 'img/page-4-right.png'}]
    ];

    callback(pages);
};
