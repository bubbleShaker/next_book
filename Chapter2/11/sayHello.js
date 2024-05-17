function printPoint(points) {
    points.forEach(function (point) {
        console.log("x\u5EA7\u6A19\u306F".concat(point.x, "\u3067\u3059"));
        console.log("y\u5EA7\u6A19\u306F".concat(point.y, "\u3067\u3059"));
    });
}
printPoint([{ x: 100, y: 100 }, { x: 200, y: 200 }]);
