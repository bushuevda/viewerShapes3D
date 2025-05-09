import * as THREE from 'three'
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils' ;



type Vertex = {
    x: number;
    y: number;
    z: number;
    noramls: number[];
}

/*
    Функция получения цветов для отдельной грани
*/
function getColor(geometry: THREE.BufferGeometry, color: THREE.Color): Float32Array{
    const indicesLength1 = geometry.attributes.position.count;
    const newColor = new Float32Array(indicesLength1 * 3);
    for (let k = 0; k < newColor.length; k+=3){
        newColor[k] = color.r;
        newColor[k+1] = color.g;
        newColor[k+2] = color.b;
    }

    return newColor;
}


function createFace4(v1:Vertex, v2: Vertex, v3: Vertex, v4: Vertex): THREE.BufferGeometry{

    const color = new THREE.Color(Math.random() * 0xffffff);

    const geometry = new THREE.BufferGeometry();

    let positions = new Float32Array([
        v1.x, v1.y, v1.z,
        v2.x, v2.y, v2.z,
        v3.x, v3.y, v3.z,
        v4.x, v4.y, v4.z,
    ]);

    const normals = new Float32Array([
        v1.noramls[0],  v1.noramls[1],  v1.noramls[2],
        v2.noramls[0],  v2.noramls[1],  v2.noramls[2],
        v3.noramls[0],  v3.noramls[1],  v3.noramls[2],
        v4.noramls[0],  v4.noramls[1],  v4.noramls[2],
    ]);

    const colors = new Float32Array([
        0, 1, 1, 1,
        1, 0, 1, 1,
        1, 1, 0, 1,
        1, 1, 1, 1,
    ]);

    const indices = [
        0, 1, 3,
        2, 3, 1,
    ];

    geometry.setIndex( indices );
    geometry.setAttribute('position', new THREE.BufferAttribute( positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(getColor(geometry, color), 3));
    geometry.setAttribute('normals', new THREE.BufferAttribute(normals, 3));
    
    return geometry;
}


function createFace3(v1:Vertex, v2: Vertex, v3: Vertex): THREE.BufferGeometry{

    const color = new THREE.Color(Math.random() * 0xffffff);

    const geometry = new THREE.BufferGeometry();

    let positions = new Float32Array([
        v1.x, v1.y, v1.z,
        v2.x, v2.y, v2.z,
        v3.x, v3.y, v3.z,
    ]);

    const normals = new Float32Array([
        v1.noramls[0],  v1.noramls[1],  v1.noramls[2],
        v2.noramls[0],  v2.noramls[1],  v2.noramls[2],
        v3.noramls[0],  v3.noramls[1],  v3.noramls[2],
    ]);

    const colors = new Float32Array([
        0, 1, 1, 1,
        1, 0, 1, 1,
        1, 1, 0, 1,
    ]);

    const indices = [
        0, 1, 3,
        2, 3, 1,
    ];

    geometry.setIndex( indices );
    geometry.setAttribute('position', new THREE.BufferAttribute( positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(getColor(geometry, color), 3));
    geometry.setAttribute('normals', new THREE.BufferAttribute(normals, 3));

    return geometry;
}



export function createBasisRectangle(): THREE.BufferGeometry{
    const f1 = createFace4(  
        {x: 0, y: 0, z: 0, noramls: [0,0,1]},
        {x: 0, y: 1, z: 0, noramls: [0,0,1]},
        {x: 1, y: 1, z: 0, noramls: [0,0,1]},
        {x: 1, y: 0, z: 0, noramls: [0,0,1]},
    );
    const f2 = createFace4(           
        {x: 1, y: 0, z: 0, noramls: [1,0,0]},
        {x: 1, y: 1, z: 0, noramls: [1,0,0]},
        {x: 1, y: 1, z: 1, noramls: [1,0,0]},
        {x: 1, y: 0, z: 1, noramls: [1,0,0]},
    );
    const f3 = createFace4(   
        {x: 1, y: 0, z: 1, noramls: [0,0,-1]},
        {x: 1, y: 1, z: 1, noramls: [0,0,-1]},
        {x: 0, y: 1, z: 1, noramls: [0,0,-1]},
        {x: 0, y: 0, z: 1, noramls: [0,0,-1]},
    );
    const f4 = createFace4(            
        {x: 0, y: 0, z: 1, noramls: [-1,0,0]},
        {x: 0, y: 1, z: 1, noramls: [-1,0,0]},
        {x: 0, y: 1, z: 0, noramls: [-1,0,0]},
        {x: 0, y: 0, z: 0, noramls: [-1,0,0]},
    );
    const f5 = createFace4(            
        {x: 0, y: 1, z: 0, noramls: [0,1,0]},
        {x: 0, y: 1, z: 1, noramls: [0,1,0]},
        {x: 1, y: 1, z: 1, noramls: [0,1,0]},
        {x: 1, y: 1, z: 0, noramls: [0,1,0]},
    );

    const f6 = createFace4(            
        {x: 0, y: 0, z: 0, noramls: [0,-1,0]},
        {x: 1, y: 0, z: 0, noramls: [0,-1,0]},
        {x: 1, y: 0, z: 1, noramls: [0,-1,0]},
        {x: 0, y: 0, z: 1, noramls: [0,-1,0]},
    );
    let geometry = BufferGeometryUtils.mergeGeometries([f1, f2, f3, f4, f5, f6]);
     

    return geometry; 
}



export function createBasisPyramid(): THREE.BufferGeometry{

    const f1 = createFace3(           
        {x: 0, y: 0, z: 0, noramls: [1,0,0]},
        {x: 0.5, y: 0.5, z: 0.5, noramls: [1,0,0]},
        {x: 1, y: 0, z: 0, noramls: [1,0,0]},
    );
    const f2 = createFace3(   
        {x: 1, y: 0, z: 0, noramls: [0,0,-1]},
        {x: 0.5, y: 0.5, z: 0.5, noramls: [0,0,-1]},
        {x: 1, y: 0, z: 1, noramls: [0,0,-1]},
    );
    const f3 = createFace3(            
        {x: 1, y: 0, z: 1, noramls: [-1,0,0]},
        {x: 0.5, y: 0.5, z: 0.5, noramls: [-1,0,0]},
        {x: 0, y: 0, z: 1, noramls: [-1,0,0]},
    );
    const f4 = createFace3(            
        {x: 0, y: 0, z: 1, noramls: [0,1,0]},
        {x: 0.5, y: 0.5, z: 0.5, noramls: [0,1,0]},
        {x: 0, y: 0, z: 0, noramls: [0,1,0]},
    );

    const f5 = createFace4(   
        {x: 0, y: 0, z: 0, noramls: [0,0,-1]},
        {x: 1, y: 0, z: 0, noramls: [0,0,-1]},
        {x: 1, y: 0, z: 1, noramls: [0,0,-1]},
        {x: 0, y: 0, z: 1, noramls: [0,0,-1]},
    );

    let geometry = BufferGeometryUtils.mergeGeometries([f1, f2, f3, f4, f5]);

    return geometry; 
}
