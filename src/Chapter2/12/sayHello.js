var labels = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature2: 'トップページの機能2です'
};
function cout(labels) {
    labels.forEach(function (label) {
        console.log(label.topTitle);
    });
}
cout(labels);
