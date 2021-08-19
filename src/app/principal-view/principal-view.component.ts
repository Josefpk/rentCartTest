import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrincipalViewService } from './principal-view.service';


@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  orderBy = [
    { value: 'brand', viewValue: 'Por marca' },
    { value: 'name', viewValue: 'Por nombre' }
  ];

  slides = [
    { 'image': 'https://www.ford.com.co/content/ford/co/es_co/home/_jcr_content/par/billboard_2012571225/imageComponent/image.imgs.full.high.jpg' },
    { 'image': 'https://i.blogs.es/c3e1c3/1366_2000-2/450_1000.jpg' },
    { 'image': 'https://fotos.perfil.com//2019/10/07/900/0/cuales-son-los-autos-mas-potentes-del-mundo-788461.jpg' },
  ];


  // mockDataCars = [
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://ips-invite.iperceptions.com/Invitations/invitationsJS/127/s127032/images/ford_image.jpg",
  //     model: "2021",
  //     year: "2021",
  //     brand: "FORD",
  //     price: "$60.000.000",
  //     name: "ECOSPORT",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Nuevo",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   }, {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/explorer-st/2021/overview/gallery-trigger/overlay/fco-explorerst-gal-co-pilot.jpg",
  //     model: "2021",
  //     year: "2021",
  //     brand: "FORD",
  //     price: "$70.000.000",
  //     name: "EXPLORER",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Usado",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   },
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://www.mazda.com.co/globalassets/01_global/imagenes-comparador/mazda-cx-30/01_prime_mt.png",
  //     model: "2021",
  //     year: "2021",
  //     brand: "MAZDA",
  //     price: "$98.990.000",
  //     name: "CX 30 LTS",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Nuevo",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   },
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://http2.mlstatic.com/D_NQ_NP_828412-MCO47113860974_082021-O.webp",
  //     model: "2017",
  //     year: "2021",
  //     brand: "FORD",
  //     price: "$40.000.000",
  //     name: "ECOSPORT",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Usado",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   },
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://cdn.group.renault.com/ren/co/vehicles/duster/hjd/galeria/duster-robusto.jpg.ximg.large.webp/ab499f3fd6.webp",
  //     model: "2020",
  //     year: "2019",
  //     brand: "RENAULT",
  //     price: "$60.000.000",
  //     name: "DUSTER",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Nuevo",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   },
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ford-fiesta-st-edition-8-1601985776.jpg?crop=1.00xw:0.704xh;0,0.149xh&resize=1200:*",
  //     model: "2020",
  //     year: "2020",
  //     brand: "FORD",
  //     price: "$35.000.000",
  //     name: "FIESTA",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Usado",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   },
  //   {
  //     smallPhoto: "https://material.angular.io/assets/img/examples/shiba2.jpg",
  //     largPhoto: "https://11uk91uj5h62os2u61c0s6o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/SUPER-BLANCO-12.jpg",
  //     model: "2021",
  //     year: "2021",
  //     brand: "TOYOTA",
  //     price: "$200.000.000",
  //     name: "TXL",
  //     description: "Siente la adrenalina de pasar de 0 a 100 km/h",
  //     type: "Nuevo",
  //     specs: [
  //       { key: 'Capacidad de tanque', value: '15.8' },
  //       { key: 'Carrocería', value: '5 Puertas' },
  //       { key: 'Cilindros', value: '4' },
  //       { key: 'Combustible', value: 'Gasolina' },
  //       { key: 'Dirección', value: 'Eléctrica asistida (EPAS)' },
  //       { key: 'Motor', value: '2.0L EcoBoost I‑4' },
  //       { key: 'Transmisión', value: 'Automática de 8 velocidades' }
  //     ]
  //   }
  // ];
  callOne: Boolean = false;
  copyMockFilter: any;
  mockDataCars: any;

  constructor(
    public dialog: MatDialog,
    private serviceData: PrincipalViewService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.copyMockFilter = Array.from(this.mockDataCars);

  }

  /**
   * Metodo para obtener info mockeada
   */
  getData(){
    this.serviceData.serviceMock().subscribe((res: any) => {
      if(res){
        this.mockDataCars = res;
      }
    });
  }

  /**
   * Metodo para aplicar filtro por  marca
   * @param event info del input (nombre  marca)
   */
  applyFilter(event: any) {
    const filterValue = event.target.value;
    if (filterValue) {
      this.mockDataCars = this.mockDataCars.filter((element:any) =>
        element.brand.trim().toLowerCase() === filterValue.trim().toLowerCase()
      );
    } else {
      this.mockDataCars = this.copyMockFilter;
    }
  }

  /**
   * Ordenar cards por marca
   * @memberof PrincipalViewComponent
   */
  orderByValue(data: any) {
    const value = data.value;
    if (data &&  (value != 'brand' || value != 'name')){
      this.mockDataCars = this.mockDataCars.sort((a: any, b: any) => {
        return a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0
      });
    }
  }

}
