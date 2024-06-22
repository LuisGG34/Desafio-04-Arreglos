const propiedades_venta = [
    {
    nombre: 'casaventa1',
    src: './assets/img/casaventa1.jpg',
    descripcion: 'Esta hermosa casa ofrece una vista genial',
    ubicacion: 'los guindos',
    habitaciones: 2,
    baños: 2,
    costo: "1800 UF",
    smoke: false,
    pets: true
    },
    {
    nombre: 'casaventa2',
    src: './assets/img/casaventa2.jpg',
    descripcion: 'Esta hermosa casa ofrece una vista genial',
    ubicacion: 'los guindos',
    habitaciones: 4,
    baños: 2,
    costo: "2800 UF",
    smoke: true,
    pets: true
    },
    {
    nombre: 'casaventa3',
    src: './assets/img/casaventa3.jpg',
    descripcion: 'Esta hermosa casa ofrece una vista genial',
    ubicacion: 'los guindos',
    habitaciones: 3,
    baños: 3,
    costo: "3800 UF",
    smoke: false,
    pets: true
    },
    {
    nombre: 'casaventa4',
    src: './assets/img/casaventa1.jpg',
    descripcion: 'Esta hermosa casa ofrece una vista genial',
    ubicacion: 'los guindos',
    habitaciones: 6,
    baños: 4,
    costo: "5000 UF",
    smoke: false,
    pets: false
    },
    ]

const ventas = document.querySelector("#venta");


for (let propiedad of propiedades_venta){
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
ventas.innerHTML += template;
}