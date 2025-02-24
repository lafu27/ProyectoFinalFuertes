export const productos = [
    {
      id: 1,
      nombre: "RTX 4080",
      categoria: "tarjetas-graficas",
      precio: 799999,
      stock: 5,
      imagen: "/img/rtx4080.png",
      descripcion: "La GeForce RTX 4080 está construida con la arquitectura NVIDIA Ada Lovelace. Con un rendimiento extraordinario, la RTX 4080 te permite jugar a juegos de ray-tracing con el máximo de FPS.",
      especificaciones: {
        memoria: "16GB GDDR6X",
        nucleosCuda: "9728",
        frecuenciaBase: "2.21 GHz",
        consumo: "320W"
      }
    },
    {
      id: 2,
      nombre: "Ryzen 9 7950X",
      categoria: "procesadores",
      precio: 549999,
      stock: 8,
      imagen: "/img/ryzen9.png",
      descripcion: "El procesador más rápido del mundo para juegos. 16 núcleos y 32 hilos para un rendimiento extraordinario en gaming y creación de contenido.",
      especificaciones: {
        nucleos: "16",
        hilos: "32",
        frecuenciaBase: "4.5 GHz",
        frecuenciaMaxima: "5.7 GHz",
        tdp: "170W"
      }
    }
  ];
  
export default productos;