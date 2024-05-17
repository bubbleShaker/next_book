type Point={
  x:number;
  y:number;
}

function printPoint(points:Point[]){
  points.forEach((point)=>{
    console.log(`x座標は${point.x}です`)
    console.log(`y座標は${point.y}です`)
  })
}

printPoint([{x:100,y:100},{x:200,y:200}])