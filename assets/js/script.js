const propiedades_alquiler = [
    {
    nombre: 'Casa Amplia',
    src: './assets/img/casaarriendo1.jpg',
    descripcion: 'Century21 vende casa de 135 m2 construidos en 999 m2 de terreno. Propiedad cuenta con 3 dormitorios más una oficina, hall de acceso, living-comedor, cocina independiente, 2 baños completos, amplia terraza techada, piscina en perfectas condiciones, quincho, logia cerrada, bodega, estacionamiento para 2 vehículos, amplios jardines en buen estado de conservación con palmera, arbustos etc. Casa ubicada en sector céntrico de Buin, barrio residencial consolidado, cercana a comercio en general excelente conectividad.',
    ubicacion: 'Buin Oriente # 123',
    habitaciones: 3,
    baños: 3,
    costo: "3000 UF",
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa Grande y buena conectividad',
    src: './assets/img/casaarriendo2.jpg',
    descripcion: '',
    ubicacion: 'Buin Oriente # 456',
    habitaciones: 4,
    baños: 3,
    costo: "3800 UF",
    smoke: false,
    pets: true
    },
    {
    nombre: 'Casa comoda y segura',
    src: './assets/img/casaarriendo3.jpg',
    descripcion: '',
    ubicacion: 'Buin Poniente # 123',
    habitaciones: 5,
    baños: 3,
    costo: "4500 UF",
    smoke: true,
    pets: false
    },
    {
    nombre: 'Casa de ensueño',
    src: './assets/img/casaarriendo4.jpg',
    descripcion: '',
    ubicacion: 'Buin Poniente # 456',
    habitaciones: 3,
    baños: 2,
    costo: "2000 UF",
    smoke: false,
    pets: false
    },
    ]

const alquiler = document.querySelector("#alquiler");

for (let propiedad of propiedades_alquiler){
const template = `
<div class="col-md-4 mb-4">
<div class="card">
<img
    src="${propiedad.src}"
    class="card-img-top"
    alt="Imagen del departamento"
/>
<div class="card-body">
<h5 class="card-title">${propiedad.nombre}</h5>
<p class="card-text">${propiedad.descripcion}</p>
<p>
    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
</p>
<p>
    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
    <i class="fas fa-bath"></i> ${propiedad.baños} Baños
</p>
<p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
<p class="text-${propiedad.smoke ? 'success' : 'danger'}">
    <i class="fas fa-smoking${propiedad.smoke ? '' : '-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
</p>
<p class="text-${propiedad.pets ? 'success' : 'danger'}">
    <i class="fas fa${propiedad.pets ? '-paw' : '-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
</p>
</div>
</div>
</div>
`;
alquiler.innerHTML += template;
}
